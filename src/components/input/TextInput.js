import React, { Component } from 'react';

const TextInput = (props) => {

    return (
        <React.Fragment>
           { props.leftIcon ? <span className="input-left-icon-wrapper">{props.leftIcon}</span> : null }
            <input
                style={
                    props.leftIcon ? { paddingLeft: '30px' } : {}
                }
                type="text"
                onKeyDown={props.onKeyDown}
                placeholder={props.placeholder}
                onChange={props.handleOnChange}
            />
        </React.Fragment>
    )
}

export default TextInput;