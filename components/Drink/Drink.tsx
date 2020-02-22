import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Drink = (props) => {
    var drink = props.drink;
    return (
        <Text style={styles.text}>{drink.name}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        height: 100
    }
})

export default Drink;