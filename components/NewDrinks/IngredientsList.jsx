import React from 'react';
import Ingredient from './Ingredient';

const IngredientsList = (props) => {
    var ingredients = [];
    for (var i = 0; i < props.ingredients.length; i++) {
        if(props.ingredients[i] !== null) {
            ingredients.push(props.ingredients[i])
        }
    }
    return (
        ingredients.map( (ingredient, i) => <Ingredient key={i} ingredient={ingredient} />)
    )
}

export default IngredientsList;