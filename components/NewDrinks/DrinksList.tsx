import React from 'react';
import DrinkListing from './DrinkListing';

const DrinksList = (props) => {
    const list = props.drinks;
    return (
        list.map((drink, i) => <DrinkListing manageAPICalls={props.manageAPICalls} key={i} setDrink={props.setDrink} drink={drink} />)
    )
}

export default DrinksList;