import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrinkDirections = props => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
})

export default DrinkDirections;