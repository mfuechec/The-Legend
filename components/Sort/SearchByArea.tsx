import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const SearchByArea = (props) => {
    let selection = [];
    if (props.whatIsSelected === 'food') {
        selection = [
            {
                value: "American"
            },
            {
                value: "British"
            },
            {
                value: "Canadian"
            },
            {
                value: "Chinese"
            },
            {
                value: "Dutch"
            },
            {
                value: "Egyptian"
            },
            {
                value: "French"
            },
            {
                value: "Greek"
            },
            {
                value: "Indian"
            },
            {
                value: "Irish"
            },
            {
                value: "Italian"
            },
            {
                value: "Jamaican"
            },
            {
                value: "Japanese"
            },
            {
                value: "Kenyan"
            },
            {
                value: "Malaysian"
            },
            {
                value: "Mexican"
            },
            {
                value: "Moroccan"
            },
            {
                value: "Russian"
            },
            {
                value: "Spanish"
            },
            {
                value: "Thai"
            },
            {
                value: "Tunisian"
            },
            {
                value: "Turkish"
            },
            {
                value: "Unknown"
            },
            {
                value: "Vietnamese"
            }
        ];
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Search for recipes by origin.</Text>
                <Dropdown
                    onChangeText={(value) => { props.manageAPICalls.searchByArea(value) }}
                    style={styles.dropdown}
                    label='Select origin'
                    data={selection}
                />
            </View>
        )
    }
    if (props.whatIsSelected === 'drinks') {
        selection = [
            {
                value: 'Alcoholic'
            },
            {
                value: 'Non alcoholic'
            },
            {
                value: 'Optional alcohol'
            }
        ];
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Search for recipes by alcohol content.</Text>
                <Dropdown
                    onChangeText={(value) => { props.manageAPICalls.searchByArea(value) }}
                    style={styles.dropdown}
                    label='Select alcohol content'
                    data={selection}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})

export default SearchByArea;