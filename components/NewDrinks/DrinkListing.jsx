import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import IngredientsList from './IngredientsList';

const DrinksListing = (props) => {
    const drink = props.drink;
    return (
        <TouchableHighlight onPress={()=>{console.log('hi')}} style={styles.listingContainer}>
            <View style={styles.listingContainerView}>
                <View style={styles.imageContainer}><Image style={styles.image} source={{uri: drink.image}}></Image></View>
                <View style={styles.nameContainer}><Text style={styles.name}>{drink.name}</Text></View>
                <View style={styles.descContainer}><IngredientsList ingredients={drink.ingredients} /></View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listingContainer: {
        height: '20%',
        backgroundColor: '#333333',
        borderWidth: 1,
        marginBottom: '.25%'
    },
    listingContainerView: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    imageContainer: {
        width: '20%',
        height: '100%',
        marginLeft: '2.5%',
        marginRight: '5%',
        justifyContent: 'center'
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