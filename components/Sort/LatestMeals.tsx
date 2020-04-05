import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LatestMeals = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Search for latest recipes.</Text>
            <TouchableOpacity style={styles.submitButton} onPress={() => props.manageAPICalls.searchForLatest()}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '75%'
    },
    inputContainer: {
        alignItems: 'center'
    }
})

export default LatestMeals;