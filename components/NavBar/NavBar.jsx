import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { Link } from 'react-router-native';

const NavBar = (props) => {
    return (
        <View style={styles.NavBar} >
            <Link to='/'>
                <Text style={styles.homeButton}>
                    Home
                </Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBar: {
        width: '100%',
        height: '5%',
        backgroundColor: '#333333',
        display: 'flex',
        justifyContent: 'center'
    },
    homeButton: {
        marginLeft: '3%',
        backgroundColor: 'white',
        width: '2%'
    }
})

export default NavBar;