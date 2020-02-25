import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FoodDirections = props => {
    var instructionList = props.food.instructions.split('.');
    return (
        <View style={styles.container}>
            <Text>Step 1: {instructionList[0]}</Text>
            <Text>Step 2: {instructionList[1]}</Text>
            <Text>Step 3: {instructionList[2]}</Text>
            <Text>Step 4: {instructionList[3]}</Text>
            <Text>Step 5: {instructionList[4]}</Text>
            <Text>Step 6: {instructionList[5]}</Text>
            <Text>Step 7: {instructionList[6]}</Text>
            <Text>Step 8: {instructionList[7]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default FoodDirections;