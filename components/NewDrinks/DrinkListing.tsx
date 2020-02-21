import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import IngredientsList from './IngredientsList';

const DrinksListing = (props) => {
    const drink = props.drink;
    return (
        <TouchableHighlight onPress={()=>{console.log('hi')}} style={styles.listingContainer}>
            <View style={styles.listingContainerView}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: drink.image}}></Image>
                </View>
                <View style={styles.nameContainer}>
                    <View style={{height: '100%'}}>
                        <Text style={styles.name}>{drink.name}</Text>
                        <IngredientsList ingredients={drink.ingredients} />
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listingContainer: {
        height: 300,
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
        width: '30%',
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
        width: '27.5%',
        height: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    name: {
        alignSelf: 'center',
        fontSize: 35,
        color: 'white'
    },
    descContainer: {
        width: '27.5%',
        height: '100%',
        marginLeft: '5%',
        marginRight: '2.5%',
        backgroundColor: 'blue'
    }
})

export default DrinksListing;