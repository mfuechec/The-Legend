import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NavBar from '../NavBar/NavBar';

const NewFood = () => {
    return (
        <View style={styles.container}>
            <NavBar />
            <Text>Food</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
})

export default NewFood;