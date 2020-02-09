import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import NavBar from '../NavBar/NavBar';
import DrinksList from './DrinksList';

const NewDrinks = (props) => {
    return (
        <View style={styles.container}>
            <NavBar />
            <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/barBackground.jpeg')} style={styles.background}>
                <View style={styles.mainDisplay}>
                    <ScrollView style={styles.recipesContainer}>
                        <DrinksList drinks={props.drinks} drink={props.drink} />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    background: {
        width: '100%',
        height: '100%'
    },
    mainDisplay: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row'
    },
    filterContainer: {
        width: '20%',
        height: '75%',
        backgroundColor: 'yellow',
        marginLeft: '7%',
        marginTop: '10%'
    },
    recipesContainer: {
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '5%'
    }
})

export default NewDrinks;