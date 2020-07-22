import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

let StarRating = ({rating}) => {
    return (
        <View>
            <Text>{rating}</Text>
        </View>
    )
}

export default StarRating;