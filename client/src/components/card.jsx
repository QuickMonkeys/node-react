import React from 'react';

// In this example, we are using the es6 object destructuring.
// The react stateless component always receive the props parameter, but we can destructure to expose the properties.

// In this example, a function is used to show/hide the check mark to illustrate how style works in react.
// As you can see, we use an object to represent a key/value pair of the style attribute ({ display: none})

// Another ways could be: 
//  className={checked.indexOf(t.id) == -1 ? 'classToHide' : 'classToShow'
//  className={getClass(t.id)}

const Card = ({filtered, handleClick, checked}) => {
    
    const getStyle = (t) => { return { display: checked.indexOf(t) == -1 ? 'none' : 'block' } };
    
    const nothing = () => <div className="nothing">Well... Nothing to show here based on your search.</div>;
    
    const result = filtered.map( t => (
        <div className="col-md-4" key={t.id} onClick={() => handleClick({type:'PICKED', id:t.id})}>
            <div className={t.gender == 'M' ? 'card male' : 'card female'}>
                <div className="photo"> 
                    <img src={t.photo} />
                </div>
                <div className="name"> 
                    {`${t.last_name}, ${t.first_name}`}
                </div>
                <img className="check" src="./img/check.svg" style={getStyle(t.id)} />
                <hr />
                <div className="email">
                    {t.email} 
                </div>
            </div>
        </div>));
        
    return <div className="row">{result.length != 0 ? result : nothing()}</div>;
};

export default Card;