import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import DrinksList from './DrinksList';

const NewDrinks = (props) => {
    return (
        <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/barBackground.jpeg')} style={styles.background}>
            <ScrollView style={styles.recipesContainer}>
                <DrinksList setDrink={props.setDrink} drinks={props.drinks} />
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%'
    },
    recipesContainer: {
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '5%'
    }
})

export default NewDrinks;