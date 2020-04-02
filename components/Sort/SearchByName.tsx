import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchByName = (props) => {
    return (
        <View>
            <Text>{props.whatIsSelected}</Text>
        </View>
    )
}

export default SearchByName;