import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Link } from 'react-router-native';

const Drink = (props) => {
    var drink = props.drink;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: drink.image}}></Image>
            </View>
            <View style={styles.recipeInfo}>
                <Text style={styles.name}>{drink.name}</Text>
                <View style={styles.ingredientsContainer}>
                    <View style={styles.measurementsLeft}>
                        <Text>{drink.measurements[0]}</Text>
                        <Text>{drink.measurements[1]}</Text>
                        <Text>{drink.measurements[2]}</Text>
                        <Text>{drink.measurements[3]}</Text>
                        <Text>{drink.measurements[4]}</Text>
                    </View>
                    <View style={styles.ingredientsLeft}>
                        <Text>{drink.ingredients[0]}</Text>
                        <Text>{drink.ingredients[1]}</Text>
                        <Text>{drink.ingredients[2]}</Text>
                        <Text>{drink.ingredients[3]}</Text>
                        <Text>{drink.ingredients[4]}</Text>
                    </View>
                    <View style={styles.measurementsRight}>
                        <Text>{drink.measurements[5]}</Text>
                        <Text>{drink.measurements[6]}</Text>
                        <Text>{drink.measurements[7]}</Text>
                        <Text>{drink.measurements[8]}</Text>
                        <Text>{drink.measurements[9]}</Text>
                    </View>
                    <View style={styles.ingredientsRight}>
                        <Text>{drink.ingredients[5]}</Text>
                        <Text>{drink.ingredients[6]}</Text>
                        <Text>{drink.ingredients[7]}</Text>
                        <Text>{drink.ingredients[8]}</Text>
                        <Text>{drink.ingredients[9]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Link style={styles.homeButton} to='/DrinkDirections'>
                    <Text style={styles.text}>
                        Directions
                    </Text>
                </Link>
            </View>
        </View>
    )
}

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
        height: '15%',
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
    },
    homeButton: {
        backgroundColor: '#eeeeee',
        width: '20%',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    text: {
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        height: '10%'
    }
})

export default Drink;