import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import NavBar from '../NavBar/NavBar';

const Food = (props) => {
    var food = props.food;
    return (
        <View style={styles.container}>
            <NavBar/>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: food.image}}></Image>
            </View>
            <View style={styles.recipeInfo}>
                <Text style={styles.name}>{food.name}</Text>
                <View style={styles.ingredientsContainer}>
                    <View style={styles.measurementsLeft}>
                        <Text>{food.measurements[0]}</Text>
                        <Text>{food.measurements[1]}</Text>
                        <Text>{food.measurements[2]}</Text>
                        <Text>{food.measurements[3]}</Text>
                        <Text>{food.measurements[4]}</Text>
                    </View>
                    <View style={styles.ingredientsLeft}>
                        <Text>{food.ingredients[0]}</Text>
                        <Text>{food.ingredients[1]}</Text>
                        <Text>{food.ingredients[2]}</Text>
                        <Text>{food.ingredients[3]}</Text>
                        <Text>{food.ingredients[4]}</Text>
                    </View>
                    <View style={styles.measurementsRight}>
                        <Text>{food.measurements[5]}</Text>
                        <Text>{food.measurements[6]}</Text>
                        <Text>{food.measurements[7]}</Text>
                        <Text>{food.measurements[8]}</Text>
                        <Text>{food.measurements[9]}</Text>
                    </View>
                    <View style={styles.ingredientsRight}>
                        <Text>{food.ingredients[5]}</Text>
                        <Text>{food.ingredients[6]}</Text>
                        <Text>{food.ingredients[7]}</Text>
                        <Text>{food.ingredients[8]}</Text>
                        <Text>{food.ingredients[9]}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

/*
{
    name: '',
    type: '',
    instructions: '',
    image: '',
    ingredients: [],
    measurements: []
  }
  */

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    imageContainer: {
        height: '50%',
        width: '80%',
        marginTop: '2.5%'
    },
    image: {
        height: '100%'
    },
    recipeInfo: {
        height: '30%',
        width: '80%',
        marginTop: '5%',
        alignItems: 'center'
    },
    name: {
        fontSize: 35
    },
    ingredientsContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2.5%'
    },
    ingredientsLeft: {
        marginRight: '2.5%'
    },
    ingredientsRight: {
    },
    measurementsLeft: {
        marginRight: '1%'
    },
    measurementsRight: {
        marginRight: '1%',
        marginLeft: '2.5%'
    }
})

export default Food;