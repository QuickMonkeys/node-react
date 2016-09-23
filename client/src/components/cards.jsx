import React from 'react';

import Card from './card.jsx';

// In this example, we are using the es6 object destructuring.
// The react stateless component always receive the props parameter, but we can destructure to expose the properties.

const Cards = ({handleClick, filtered, checked}) => {
    
    const nothing = () => <div className="nothing">Well... Nothing to show here based on your search.</div>;

    return  <div className="row">
                { 
                    filtered.length != 0 
                        ? filtered.map( u => <Card key={u.id}  user={u} handleClick={handleClick} checked={checked} /> ) 
                        : nothing()
                }
            </div>;
};

export default Cards;