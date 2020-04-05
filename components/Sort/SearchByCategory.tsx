import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

const SearchByCategory = (props) => {
    let selection = [];
    if (props.whatIsSelected === 'food') {
        selection = [
            {
                value: 'Beef'
            },
            {
                value: 'Breakfast'
            },
            {
                value: 'Chicken'
            },
            {
                value: 'Dessert'
            },
            {
                value: 'Goat'
            },
            {
                value: 'Lamb'
            },
            {
                value: 'Miscellaneous'
            },
            {
                value: 'Pasta'
            },
            {
                value: 'Pork'
            },
            {
                value: 'Seafood'
            },
            {
                value: 'Side'
            },
            {
                value: 'Starter'
            },
            {
                value: 'Vegan'
            },
            {
                value: 'Vegetarian'
            }
        ];
    }
    if (props.whatIsSelected === 'drinks') {
        selection = [
            {
                value: 'Ordinary Drink'
            },
            {
                value: 'Cocktail'
            },
            {
                value: 'Milk / Float / Shake'
            },
            {
                value: 'Other/Unknown'
            },
            {
                value: 'Cocoa'
            },
            {
                value: 'Shot'
            },
            {
                value: 'Coffee / Tea'
            },
            {
                value: 'Homemade Liqueur'
            },
            {
                value: 'Punch / Party Drink'
            },
            {
                value: 'Beer'
            },
            {
                value: 'Soft Drink / Soda'
            }
        ];
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