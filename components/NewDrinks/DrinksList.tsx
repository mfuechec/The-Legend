import React from 'react';
import DrinkListing from './DrinkListing';

const DrinksList = (props) => {
    const list = props.drinks;
    return (
        list.map( (drink, i) => <DrinkListing key={i} drink={drink} />)
    )
}

export default DrinksList;