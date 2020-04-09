import React from 'react';
import { StyleSheet, ScrollView, ImageBackground } from 'react-native';
import FoodsList from './FoodsList';

const NewFoods = (props) => {
    return (
        <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/woodBackground.jpg')} style={styles.background}>
            <ScrollView style={styles.recipesContainer}>
                <FoodsList setFood={props.setFood} foods={props.foods} />
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

export default NewFoods;