import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

function LandingPage() {
    return (
        <View style={styles.optionsContainer}>
            <ImageBackground style={styles.foodContainer} source={require('/Users/mfuechec/Desktop/RecipeBookNative/RecipeBook/assets/foodBackground.jpg')}>
            </ImageBackground>
            <ImageBackground style={styles.drinksContainer} source={require('/Users/mfuechec/Desktop/RecipeBookNative/RecipeBook/assets/drinksBackground.jpg')}>
            </ImageBackground>
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
    drinksContainer: {
        width: '100%',
        flex: .5,
        justifyContent: 'center'
    }
})