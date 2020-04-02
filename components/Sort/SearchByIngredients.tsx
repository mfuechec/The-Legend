import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchByIngredients = (props) => {
    return (
        <View>
            <Text>{props.whatIsSelected}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default SearchByIngredients;