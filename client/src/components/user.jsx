import React from 'react';

import Card from './card.jsx';
import Search from './search.jsx';

export default class User extends React.Component {

    
    constructor() {
        super();
        // In the constructor we initiate the state of the component.
        this.state = {users: [], filtered: [], checked: [], filterText: ''};
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
        this.setState({users: this.props.data, filtered: this.props.data});
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
        return name.toUpperCase().indexOf(text.toUpperCase()) >=0 ;
    }
    
    // The following functions are passed to the child components, making it possible for the state in the parent be updated by a child
    
    handleFilter(f, text, checked = this.state.checked){
        return this.hasString(f.first_name, text) || this.hasString(f.last_name, text) || checked.indexOf(f.id) != -1;
    }
    
    handleChange(text) {
        this.setState({filterText: text, filtered: this.state.users.filter(f => this.handleFilter(f, text))});
    }
    
    handleClick(action) {
        var result = action.type === 'CLEAR'  ? [] : (this.state.checked.indexOf(action.id) == -1)
            ? [action.id,...this.state.checked]
            : this.state.checked.filter( f => f != action.id );
           
        this.setState({checked: result, filtered: this.state.users.filter(f => this.handleFilter(f, this.state.filterText, result))});
    }

    // the ... operator is responsible to pass all states as properties for each child

    render() {
        return(
            <div>
                <Search handleClick={this.handleClick.bind(this)} handleChange={this.handleChange.bind(this)} {...this.state}/>
                <Card handleClick={this.handleClick.bind(this)} {...this.state} />
            </div>
        );
    }
}