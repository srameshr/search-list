import React, { Component } from 'react';

// Pure non-class component
const Card = (props) => {
    const { title, subtitle, items = [], info } = props;

    // The client defintely knows the HTML being set, hence using dangerouslySetInnerHTML as the html
    // injection probability is 0

    const highlight = (string) => {
        const re = new RegExp(props.highlight, "i");
        return string.replace(re, `<span class="highlight">${props.highlight}</span>`);
    }

    const itemsInArray = items.filter(item => new RegExp(props.highlight, 'ig').test(item)).join(', ');

    return (
        <div className="card-wrapper">
            <h4 className="card-title">{title}</h4>
            
            <i className="card-subtitle" dangerouslySetInnerHTML={{__html: highlight(subtitle)}}></i>
            { itemsInArray && props.highlight ? (
                <ul className="card-items-wrapper">
                    <li className="card-items">{itemsInArray} found in items</li>
                </ul>
                ) : null
            }
            <p className="card-info" dangerouslySetInnerHTML={{__html: highlight(info)}}></p>
        </div>
    )
};

export default Card;