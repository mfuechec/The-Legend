import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import IngredientsList from './IngredientsList';

const DrinksListing = (props) => {
    const drink = props.drink;
    return (
        <View style={styles.listingContainer}>
            <View style={styles.imageContainer}><Image style={styles.image} source={{uri: drink.image}}></Image></View>
            <View style={styles.nameContainer}><Text style={styles.name}>{drink.name}</Text></View>
            <View style={styles.descContainer}><IngredientsList ingredients={drink.ingredients} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    listingContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '10.4%',
        backgroundColor: '#333333'
    },
    imageContainer: {
        width: '20%',
        height: '98%',
        marginTop: '1%',
        marginBottom: '1%',
        marginLeft: '2.5%',
        marginRight: '5%'
    },
    image: {
        height: '85%',
        width: '100%'
    },
    nameContainer: {
        backgroundColor: 'blue',
        width: '32.5%',
        height: '100%',
        justifyContent: 'center'
    },
    name: {
        alignSelf: 'center',
        fontSize: 35
    },
    descContainer: {
        width: '32.5%',
        height: '100%',
        marginLeft: '5%',
        marginRight: '2.5%',
        backgroundColor: 'blue'
    }
})

export default DrinksListing;