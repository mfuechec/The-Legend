import React from 'react';

const DrinksList = (props) => {
    return (
        props.drinks.map( (drink) => <DrinkListing drink={drink} />)
    )
}

export default DrinksList;