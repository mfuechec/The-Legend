import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const SearchByCategory = (props) => {
    let selection = [];
    if (props.whatIsSelected === 'food') {
        selection = [];
    }
    if (props.whatIsSelected === 'drinks') {
        selection = [];
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.text}>Search for recipes by category.</Text>
            <Dropdown
                onChangeText={(value) => { props.manageAPICalls.searchByCategory(value) }}
                style={styles.dropdown}
                label='Select category'
                data={selection}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchByCategory;