import React from 'react';
import { Text } from 'react-native';

const DrinksListing = (props) => {
    const drink = props.drink;
    return (
        <Text>{drink.name}</Text>
    )
}

export default DrinksListing;