import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';

const Food = (props) => {
    var food = props.food;
    return (
        <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/Herbs.jpg')} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: food.image }}></Image>
            </View>
            <View style={styles.recipeContainer}>
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
                    <Link style={styles.directionsButton} to='/FoodDirections'>
                        <Text style={styles.text}>
                            Directions
                        </Text>
                    </Link>
                    <Link style={styles.directionsButton} to='/NewFood'>
                        <Text style={styles.text}>
                            Back
                        </Text>
                    </Link>
                </View>

            </View>
        </ImageBackground>
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
        width: '75%',
        marginTop: '2.5%'
    },
    image: {
        height: '100%',
        borderRadius: 300
    },
    recipeContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',

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
    directionsButton: {
        backgroundColor: '#eeeeee',
        width: '25%',
        height: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: '1%',
        marginRight: '1%'
    },
    text: {
        textAlign: 'center'
    },
    buttonContainer: {
        width: '80%',
        alignItems: 'center',
        height: '10%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'center'
    }
})

export default Food;