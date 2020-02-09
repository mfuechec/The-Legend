import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import NavBar from '../NavBar/NavBar';
import DrinksList from './DrinksList';

const NewDrinks = (props) => {
    return (
        <View style={styles.container}>
            <NavBar />
            <View style={styles.mainDisplay}>
                <View style={styles.filterContainer}></View>
                <View style={styles.recipesContainer}>
                    <ScrollView style={styles.drinkListScroll}>
                        <DrinksList drinks={props.drinks} drink={props.drink} />
                    </ScrollView>
                </View>
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
        backgroundColor: '#eeeeee',
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

export default NewDrinks;