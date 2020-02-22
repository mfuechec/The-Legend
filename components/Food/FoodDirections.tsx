import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FoodDirections = props => {
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

export default FoodDirections;