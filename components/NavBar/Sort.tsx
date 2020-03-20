import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';

const Sort = (props) => {
    return (
        <View style={styles.sortModal}>
            <Modal animationType='slide' transparent={false} visible={false}>

            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    sortModal: {
        width: '25%',
        height: '40%'
    }
})

export default Sort;