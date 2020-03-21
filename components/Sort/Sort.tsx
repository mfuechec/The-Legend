import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
            onBackdropPress={props.closeModal}
            animationIn='slideInRight'
            animationOut='slideOutRight'
        >
            <View style={styles.sortContainer}>
                <View style={styles.sortNav}>
                    <SortNav closeModal={props.closeModal} />
                </View>
                <View style={styles.searchByName}>
                    <SearchByName />
                </View>
                <View style={styles.searchByCategory}>
                    <SearchByCategory />
                </View>
                <View style={styles.searchByArea}>
                    <SearchByArea />
                </View>
                <View style={styles.searchByIngredients}>
                    <SearchByIngredients />
                </View>
                <View style={styles.latestMeals}>
                    <LatestMeals />
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