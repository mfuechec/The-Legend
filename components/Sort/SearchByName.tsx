import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SearchByName = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Search for recipes by name.</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Search by Name'
                onChangeText={text => props.setSearchText(text)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => props.manageAPICalls.searchByName(props.searchText)}>
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

export default SearchByName;