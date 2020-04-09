import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';

const Drink = (props) => {
    var drink = props.drink;
    return (
        <ImageBackground source={require('/Users/mfuechec/Desktop/RecipeBook/assets/woodBackground.jpg')} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: drink.image }}></Image>
            </View>
            <View style={styles.recipeInfo}>
                <Text style={styles.name}>{drink.name}</Text>
                <View style={styles.ingredientsContainer}>
                    <View style={styles.measurementsLeft}>
                        <Text style={styles.text}>{drink.measurements[0]}</Text>
                        <Text style={styles.text}>{drink.measurements[1]}</Text>
                        <Text style={styles.text}>{drink.measurements[2]}</Text>
                        <Text style={styles.text}>{drink.measurements[3]}</Text>
                        <Text style={styles.text}>{drink.measurements[4]}</Text>
                    </View>
                    <View style={styles.ingredientsLeft}>
                        <Text style={styles.text}>{drink.ingredients[0]}</Text>
                        <Text style={styles.text}>{drink.ingredients[1]}</Text>
                        <Text style={styles.text}>{drink.ingredients[2]}</Text>
                        <Text style={styles.text}>{drink.ingredients[3]}</Text>
                        <Text style={styles.text}>{drink.ingredients[4]}</Text>
                    </View>
                    <View style={styles.measurementsRight}>
                        <Text style={styles.text}>{drink.measurements[5]}</Text>
                        <Text style={styles.text}>{drink.measurements[6]}</Text>
                        <Text style={styles.text}>{drink.measurements[7]}</Text>
                        <Text style={styles.text}>{drink.measurements[8]}</Text>
                        <Text style={styles.text}>{drink.measurements[9]}</Text>
                    </View>
                    <View style={styles.ingredientsRight}>
                        <Text style={styles.text}>{drink.ingredients[5]}</Text>
                        <Text style={styles.text}>{drink.ingredients[6]}</Text>
                        <Text style={styles.text}>{drink.ingredients[7]}</Text>
                        <Text style={styles.text}>{drink.ingredients[8]}</Text>
                        <Text style={styles.text}>{drink.ingredients[9]}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.instructionContainer}>
                <Text style={styles.instructionsText}>{drink.instructions}</Text>
                <Link style={styles.backButton} to='/NewDrinks'>
                    <Text style={styles.backButtonText}>
                        Back
                    </Text>
                </Link>
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
        marginTop: '5%',
        alignItems: 'center'
    },
    name: {
        fontSize: 35,
        color: 'white'
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
    instructionContainer: {
        width: '50%',
        alignItems: 'center',
        height: '10%'
    },
    text: {
        color: 'white'
    },
    instructionsText: {
        color: 'white',
        marginBottom: '5%'
    },
    backButton: {
        backgroundColor: '#eeeeee',
        width: '50%',
        height: '50%',
        borderRadius: 30,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1,
        marginLeft: '1%',
        marginRight: '1%'
    },
    backButtonText: {
        alignSelf: 'center'
    }
})

export default Drink;