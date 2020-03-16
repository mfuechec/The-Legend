import React from 'react';
import { Text, StyleSheet, View, ScrollView } from 'react-native';

const FoodDirections = props => {
    var instructionList = props.food.instructions.split('.');
    let instructions = [];
    instructionList.map((item, i) => {
        if (item.length !== 0) {
            instructionList[i] = item.trim();
            instructions.push(<Text style={styles.step}>Step {i + 1}: {instructionList[i]}.</Text>);
        }
    })
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
                {instructions}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    step: {
        marginTop: '5%',
        fontSize: 25
    },
    scrollView: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EEEEEE'
    }
})

export default FoodDirections;