import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';

const LandingPage = () => {
    return (
        <View style={styles.optionsContainer}>
            <Link style={styles.foodContainer} to='/NewFood'>
                <ImageBackground style={styles.foodImage} source={require('/Users/mfuechec/Desktop/RecipeBook/assets/foodBackground.jpg')}>
                </ImageBackground>
            </Link>
            <Link style={styles.drinksContainer} to='NewDrinks'>
                <ImageBackground style={styles.drinksImage} source={require('/Users/mfuechec/Desktop/RecipeBook/assets/drinksBackground.jpg')}>
                </ImageBackground>
            </Link>
        </View>
    )
}

export default LandingPage;

const styles = StyleSheet.create({
    optionsContainer: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    foodContainer: {
        width: '100%',
        flex: .5,
        justifyContent: 'center'
    },
    foodImage: {
        width: '100%',
        height: '100%'
    },
    drinksContainer: {
        width: '100%',
        flex: .5,
        justifyContent: 'center'
    },
    drinksImage: {
        width: '100%',
        height: '100%'
    }
})