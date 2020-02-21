import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Ingredient = (props) => {
    if (props.ingredient === null) {
        return (
            <Text style={styles.ingredient}> </Text>
        )
    } else {
        return (
            <Text style={styles.ingredient}>{props.ingredient}</Text>
        )
    }
}

const styles = StyleSheet.create({
    ingredient: {
        marginLeft: '5%',
        fontSize: 15,
        color: 'white'
    }
})

export default Ingredient;