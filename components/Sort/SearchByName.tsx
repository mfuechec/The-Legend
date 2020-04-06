import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const SearchByName = (props) => {
    const [searchText, setSearchText] = useState('');
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleText}>Search by name.</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Search by name'
                onChangeText={text => setSearchText(text)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={() => props.manageAPICalls.searchByName(searchText)}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        marginTop: '5%',
        marginBottom: '5%',
        fontSize: hp('1.6%')
    },
    textInput: {
        height: '20%',
        borderColor: 'gray',
        borderWidth: 1,
        width: '75%'
    },
    inputContainer: {
        alignItems: 'center'
    },
    submitButton: {
        borderWidth: 1,
        borderRadius: 25,
        marginTop: '10%',
        width: 'auto',
        height: 'auto'
    },
    buttonText: {
        fontSize: hp('1.6%')
    }
})

export default SearchByName;