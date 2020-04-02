import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';

const SortNav = (props) => {
    return (
        <View style={styles.NavBar}>
            <View style={styles.sortHeader}></View>
            <View style={styles.sortButtonContainer}>
                <TouchableHighlight style={styles.homeButton} onPress={() => { props.manageModal.closeModal() }}>
                    <Text style={styles.text}>
                        Close
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.searchFoodsButton}>
                    <Link onPress={props.manageModal.searchFoods} to='/NewFood'>
                        <Text style={styles.text}>Search Foods</Text>
                    </Link>
                </TouchableHighlight>
                <TouchableHighlight style={styles.searchDrinksButton}>
                    <Link onPress={props.manageModal.searchDrinks} to='/NewDrinks'>
                        <Text style={styles.text}>Search Drinks</Text>
                    </Link>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    NavBar: {
        height: '100%',
        width: '100%'
    },
    sortHeader: {
        height: '15%'
    },
    sortButtonContainer: {
        height: '85%',
        display: 'flex',
        flexDirection: 'row'
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
    searchFoodsButton: {
        marginLeft: '2.5%',
        marginRight: '15%',
        backgroundColor: 'white',
        width: '15%',
        height: '74%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    searchDrinksButton: {
        marginLeft: '2.5%',
        marginRight: '15%',
        backgroundColor: 'white',
        width: '15%',
        height: '74%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    text: {
        textAlign: 'center'
    }
})

export default SortNav;