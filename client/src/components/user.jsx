import React from 'react';

import Cards from './cards.jsx';
import Search from './search.jsx';

// Just another example of destructuring in a import. The byLastName function cannot be accesed in user.jsx
// In this case does not matter, because it's used as default order in orderBy method (See lib/orderBy.js)
import {orderBy, byFirstName} from "../lib/orderBy.js";

export default class User extends React.Component {

    constructor() {
        super();
        // The initial state is configured in the component constructor.
        // Once the component is rendered, the componentDidMount callback function is executed.
        this.state = {users: [], filtered: [], checked: [], filterText: ''};
        
        // We need to inform to the function what "this" will be used in the context of the function call.
        this.handleClick = this.handleClick.bind(this);
        // It's possible to bind the function in the moment of you usage (take a look in the render() method, <Search> child).
        // in es6, we can use the arrow functions to call the function. In this case a bind is not necessary;
        
    }
    
    //
    // The functions with component prefix are used to watch the life cycle of the component
    // You can see the order that things happen in your browser's console
    //
    
    componentWillMount() {
        console.log('User - componentWillMount');
    }
      
   componentDidMount() {
        console.log('User - componentDidMount');

        // An ajax can be used here to access the data, by a rest API service
        const data = orderBy(require("json!../data/users.json"));
        // Example of injecting another order by
        //const data = orderBy(require("json!./data/users.json"), byFirstName);
        
        this.setState({users: data, filtered: data});
    }
        
    shouldComponentUpdate(nextProps, nextState){
        console.log('User - shouldComponentUpdate');
        return true;
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log('User - componentWillUpdate');
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log('User - componentDidUpdate');
    }
    
    componentWillReceiveProps(nextProps) {
      console.log('User - componentWillReceiveProps');
    }
    
    // Just a function that checks if the text exists in the names
    
    hasString(name, text) {
        return name.toUpperCase().indexOf(text.toUpperCase()) >=0;
    }
    
    //
    // The following functions are passed to the child components, making it possible for the state in the parent be updated by a child
    //
    
    handleFilter(f, text, checked = this.state.checked){
        return this.hasString(f.first_name, text) || this.hasString(f.last_name, text) || checked.indexOf(f.id) != -1;
    }
    
    handleChange(text) {
        this.setState({filterText: text, filtered: this.state.users.filter(f => this.handleFilter(f, text))});
    }
    
    handleClick(action) {
        
        switch (action.type) {
            
            case 'CLEAR':
                this.setState({checked: [], filtered: this.state.users.filter(f => this.handleFilter(f, this.state.filterText, []))});
            break;
            
            case 'SELECTED':
                this.setState({filtered: this.state.users.filter(f => this.state.checked.indexOf(f.id) != -1)});
            break;
            
            default:
                var result = (this.state.checked.indexOf(action.id) == -1)
                    ? [action.id,...this.state.checked]
                    : this.state.checked.filter( f => f != action.id );
                   
                this.setState({checked: result, filtered: this.state.users.filter(f => this.handleFilter(f, this.state.filterText, result))});
        }
    }

    // the ...this.state ( ... = spread operator) is responsible to pass all states as properties for each child
    // (for more information, check the react's one-way data flow)

    render() {
        return(
            <div>
                <Search handleClick={this.handleClick} handleChange={this.handleChange.bind(this)} {...this.state}/>
                <Cards handleClick={this.handleClick} {...this.state} />
            </div>
        );
    }
}