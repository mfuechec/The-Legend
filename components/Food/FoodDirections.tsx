import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FoodDirections = props => {
    var instructionList = props.food.instructions.split('.');
    let instructions = [];
    instructionList.map((item, i) => {
        if (item.length !== 0) {
            instructionList[i] = item.trim();
            instructions.push(<Text style={styles.step}>Step {i + 1}: {instructionList[i]}</Text>);
        }
    })
    return (
        <View style={styles.container}>
            {instructions}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'grey'
    },
    step: {
        marginTop: '5%',
        fontSize: 25
    }
})

export default FoodDirections;