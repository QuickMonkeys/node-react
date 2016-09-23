import React from 'react';

// In this example, we are using the es6 object destructuring.
// A react stateless component always receive the props parameter, but we can destructure to expose the properties.

// A function is used to show/hide the check mark to illustrate how style works in react.
// As you can see, we use an object to represent a key/value pair of the style attribute ( ex.: { display: none })

// Another ways could be: 
// className={checked.indexOf(t.id) == -1 ? 'classToHide' : 'classToShow'
// className={getClass(t.id)}
// An arrow function is used to call the handleClick, passing the parameters based on the current context.

const Card = ({handleClick, user, checked}) => {
    
    const getCheckVisibility = u => { return { display: checked.indexOf(u) == -1 ? 'none' : 'block' } };
    
    const getCardClass = u => u.gender == 'M' ? 'card male' : 'card female';
    
    return <div className="col-md-4" onClick={() => handleClick({type:'PICKED', id:user.id})}>
                <div className={getCardClass(user)}>
                    <div className="photo"> 
                        <img src={user.photo} />
                    </div>
                    <div className="name"> 
                        {`${user.last_name}, ${user.first_name}`}
                    </div>
                    <img className="check" src="./img/check.svg" style={getCheckVisibility(user.id)} />
                    <hr />
                    <div className="email">
                        {user.email} 
                    </div>
                </div>
            </div>
};

export default Card;