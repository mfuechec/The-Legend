import React from 'react';
import FoodListing from './FoodListing';

const FoodsList = (props) => {
    const list = props.foods;
    return (
        list.map( (food, i) => <FoodListing key={i} food={food} />)
    )
}

export default FoodsList;