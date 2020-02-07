import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavBar from '../NavBar/NavBar';

const NewFood = () => {
    return (
        <View style={styles.container}>
            <NavBar />
            <View style={styles.mainDisplay}>
                <View style={styles.filterContainer}></View>
                <View style={styles.recipesContainer}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    mainDisplay: {
        width: '100%',
        height: '95%',
        backgroundColor: 'tomato',
        display: 'flex',
        flexDirection: 'row'
    },
    filterContainer: {
        width: '30%',
        height: '75%',
        backgroundColor: 'yellow',
        marginLeft: '7%',
        marginTop: '10%'
    },
    recipesContainer: {
        width: '55%',
        height: '90%',
        backgroundColor: 'white',
        marginLeft: '5%',
        marginTop: '5%'
    }
})

export default NewFood;