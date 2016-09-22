import React from 'react';

const Card = ({filtered, handleClick, checked}) => {
    
    const getStyle = (t) => { return { display: checked.indexOf(t) == -1 ? 'none' : 'block' } };
    const nothing = () => <div className="nothing">Well... Nothing to show here.</div>;
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