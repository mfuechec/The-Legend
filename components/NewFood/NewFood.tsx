import React from 'react';
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import NavBar from '../NavBar/NavBar';
import FoodsList from './FoodsList';

const NewFoods = (props) => {
    return (
        <View style={styles.container}>
            <NavBar />
            <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/barBackground.jpeg')} style={styles.background}>
                    <ScrollView style={styles.recipesContainer}>
                        <FoodsList setFood={props.setFood} foods={props.foods} />
                    </ScrollView>
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
    recipesContainer: {
        marginLeft: '5%',
        marginTop: '5%',
        marginRight: '5%'
    }
})

export default NewFoods;