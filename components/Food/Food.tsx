import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Food = (props) => {
    var food = props.food;
    return (
        <Text style={styles.text}>{food.name}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        height: 100
    }
})

export default Food;