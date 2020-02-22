import React from 'react';
import FoodListing from './FoodListing';

const FoodsList = (props) => {
    const list = props.foods;
    return (
        list.map( (food, i) => <FoodListing setFood={props.setFood} key={i} food={food} />)
    )
}

export default FoodsList;