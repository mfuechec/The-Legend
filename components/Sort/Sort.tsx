import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import SortNav from './SortNav';
import SearchByName from './SearchByName';
import SearchByCategory from './SearchByCategory';
import SearchByArea from './SearchByArea';
import SearchByIngredients from './SearchByIngredients';
import LatestMeals from './LatestMeals';

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
                <View style={styles.latestMeals}>
                    <LatestMeals whatIsSelected={props.whatIsSelected} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        maxHeight: '70%',
        maxWidth: '35%',
        marginTop: '25%',
        marginLeft: '60%',
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
        height: '15%',
        backgroundColor: 'red'
    },
    searchByCategory: {
        height: '15%',
        backgroundColor: 'blue'
    },
    searchByArea: {
        height: '15%',
        backgroundColor: 'orange'
    },
    searchByIngredients: {
        height: '15%',
        backgroundColor: 'pink'
    },
    latestMeals: {
        height: '15%',
        backgroundColor: 'yellow'
    }
})

export default Sort;