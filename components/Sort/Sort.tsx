import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import SortNav from './SortNav';
import SearchByName from './SearchByName';
import SearchByCategory from './SearchByCategory';
import SearchByArea from './SearchByArea';
import SearchByIngredients from './SearchByIngredients';
import LatestMeals from './LatestMeals';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const Sort = (props) => {
    return (
        <Modal
            style={styles.modal}
            isVisible={props.isModalVisible}
            onBackdropPress={props.manageModal.closeModal}
            animationIn='slideInRight'
            animationOut='slideOutRight'
        >
            <View style={styles.sortContainer}>
                <View style={styles.sortNav}>
                    <SortNav manageAPICalls={props.manageAPICalls} manageModal={props.manageModal} />
                </View>
                <View style={styles.searchByName}>
                    <SearchByName manageAPICalls={props.manageAPICalls} whatIsSelected={props.whatIsSelected} />
                </View>
                <View style={styles.searchByCategory}>
                    <SearchByCategory whatIsSelected={props.whatIsSelected} manageAPICalls={props.manageAPICalls} />
                </View>
                <View style={styles.searchByArea}>
                    <SearchByArea whatIsSelected={props.whatIsSelected} manageAPICalls={props.manageAPICalls} />
                </View>
                <View style={styles.searchByIngredients}>
                    <SearchByIngredients manageAPICalls={props.manageAPICalls} whatIsSelected={props.whatIsSelected} />
                </View>
            </View>
            <View style={styles.latestContainer}>
                <View style={styles.latestMeals}>
                    <LatestMeals manageAPICalls={props.manageAPICalls} whatIsSelected={props.whatIsSelected} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        marginTop: hp('15%'),
        marginLeft: wp('50%'),
        backgroundColor: 'white'
    },
    sortContainer: {
        height: '100%',
        width: '100%'
    },
    sortNav: {
        height: '15%'
    },
    searchByName: {
        height: '17.5%',
        backgroundColor: 'white',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    searchByCategory: {
        height: '15%',
        backgroundColor: 'white',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    searchByArea: {
        height: '15%',
        backgroundColor: 'white',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    searchByIngredients: {
        height: '15%',
        backgroundColor: 'white',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    latestMeals: {
        height: '15%',
        backgroundColor: 'white',
        marginBottom: '10%',
        marginLeft: '10%',
        marginRight: '10%'
    }
})

export default Sort;