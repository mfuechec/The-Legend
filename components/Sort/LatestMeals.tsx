import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const LatestMeals = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.submitButton} onPress={() => props.manageAPICalls.searchForLatest()}>
                <Text>Latest Recipes!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: '5%',
        marginBottom: '5%',
        fontSize: 20
    },
    textInput: {
        height: '20%',
        borderColor: 'gray',
        borderWidth: 1,
        width: '75%'
    },
    inputContainer: {
        alignItems: 'center',
        height: '100%'
    },
    submitButton: {
        borderWidth: 1,
        borderRadius: 25,
        width: '35%',
        height: '150%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LatestMeals;