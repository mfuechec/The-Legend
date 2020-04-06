import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Ingredient = (props) => {
    return (
        <Text style={styles.ingredient}>{props.ingredient}</Text>
    )
}

const styles = StyleSheet.create({
    ingredient: {
        marginLeft: '5%',
        color: 'white'
    }
})

export default Ingredient;