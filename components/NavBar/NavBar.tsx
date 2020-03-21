import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
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
                <TouchableHighlight onPress={() => { props.findRandomRecipes() }} style={styles.randomButton}>
                    <Text style={styles.text}>
                        New Recipes
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => { props.openModal() }} style={styles.sortList}>
                    <Text style={styles.text}>
                        Sort
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBar: {
        width: '100%',
        height: '10%',
        backgroundColor: '#2A2B2A',
        display: 'flex'
    },
    upperBorder: {
        height: '15%',
        width: '100%',
        backgroundColor: '#2A2B2A',
        marginBottom: '.5%'
    },
    homeButton: {
        marginLeft: '10%',
        marginRight: '15%',
        backgroundColor: 'white',
        width: '15%',
        height: '74%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    randomButton: {
        marginLeft: '2.5%',
        backgroundColor: 'white',
        width: '15%',
        height: '74%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    sortList: {
        marginLeft: '17.5%',
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