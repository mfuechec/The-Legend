import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const NavBar = (props) => {
    return (
        <View style={styles.NavBar} >
            <View style={styles.upperBorder}></View>
            <View style={styles.buttonContainer}>
                <Link style={styles.homeButton} to='/'>
                    <Text style={styles.text}>
                        Home
                    </Text>
                </Link>
                <View style={styles.randomButton}>
                    <Text onPress={() => {props.findRecipes()}} style={styles.text}>
                        New Recipes
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBar: {
        width: '100%',
        height: '10%',
        backgroundColor: '#333333',
        display: 'flex'
    },
    upperBorder: {
        height: '26%',
        width: '100%',
        backgroundColor: '#333333',
        marginBottom: '.5%'
    },
    homeButton: {
        marginLeft: '15%',
        marginRight: '20%',
        backgroundColor: 'white',
        width: '15%',
        height: '74%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    randomButton: {
        marginLeft: '20%',
        backgroundColor: 'white',
        width: '15%',
        height: '74%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        height: '80%'
    },
    text: {
        textAlign: 'center'
    }
})

export default NavBar;