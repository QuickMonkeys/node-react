import React from 'react';

const Search = (props) =>
        <div style={{marginTop: '14px'}}>
            <input 
                type="text" 
                placeholder="Search for a user..."
                onChange={(e) => props.handleChange(e.target.value)}
                className="form-control"
            />
            <div>
                <span>
                Total: {props.filtered.length} of {props.users.length} {props.checked.length == 0 ? '' : ` - selected: ${props.checked.length} (they will not be filtered). `}
                </span>
                <a href="javascript:void(0)" onClick={() => props.handleClick({type:'CLEAR'})} style={{display: props.checked.length != 0 ? 'inline' :'none'}}>Clear all selected</a>
            </div>
            <hr />
        </div>
        
export default Search;