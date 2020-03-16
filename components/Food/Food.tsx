import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Link } from 'react-router-native';

const Food = (props) => {
    var food = props.food;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: food.image }}></Image>
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
            <View style={styles.buttonContainer}>
                <Link style={styles.homeButton} to='/FoodDirections'>
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
        alignItems: 'center',
        backgroundColor: '#FF8966'
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
        marginTop: '1%',
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

export default Food;