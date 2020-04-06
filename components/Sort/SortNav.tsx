import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Link } from 'react-router-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

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
                        <Text style={styles.text}>Foods</Text>
                    </Link>
                </TouchableHighlight>
                <TouchableHighlight style={styles.searchDrinksButton}>
                    <Link onPress={props.manageModal.searchDrinks} to='/NewDrinks'>
                        <Text style={styles.text}>Drinks</Text>
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
        flexDirection: 'row',
        justifyContent: 'center'
    },
    homeButton: {
        marginRight: wp('5%'),
        backgroundColor: 'white',
        width: 'auto',
        minWidth: wp('7.5%'),
        height: '50%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    searchFoodsButton: {
        marginRight: wp('5%'),
        backgroundColor: 'white',
        width: 'auto',
        minWidth: wp('7.5%'),
        height: '50%',
        borderRadius: 25,
        justifyContent: 'center',
        borderColor: 'red',
        borderWidth: 1
    },
    searchDrinksButton: {
        backgroundColor: 'white',
        width: 'auto',
        minWidth: wp('7.5%'),
        height: '50%',
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