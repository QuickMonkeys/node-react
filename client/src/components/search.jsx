import React from 'react';

// The react stateless component always receive the props parameter, 
// that contains all properties and functions passed by parent object that contains all properties and functions that are passed by the parent object
// the Clear all link uses a ternary operator to show / hide based on at least one selection
// the same happens with the selected info.

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
                <span style={{display: props.checked.length != 0 ? 'inline' :'none'}}>
                <a href="javascript:void(0)" onClick={() => props.handleClick({type:'CLEAR'})} >Clear all selected</a>
                &nbsp;|&nbsp;
                <a href="javascript:void(0)" onClick={() => props.handleClick({type:'SELECTED'})} >Show only selected</a>
                </span>
            </div>
            <hr />
        </div>
        
export default Search;