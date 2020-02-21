import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const NavBar = () => {
    return (
        <View style={styles.NavBar} >
            <View style={styles.upperBorder}></View>
            <View>
                <Link style={styles.homeButton} to='/'>
                    <Text style={styles.text}>
                        Home
                    </Text>
                </Link>
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
        marginLeft: '3%',
        backgroundColor: 'white',
        width: '6%',
        height: '74%',
        borderRadius: 50,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    text: {
        textAlign: 'center'
    }
})

export default NavBar;