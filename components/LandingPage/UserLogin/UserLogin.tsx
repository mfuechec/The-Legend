import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import PreviewList from '../../PreviewList/PreviewList.tsx';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

let UserLogin = ({pointsOfInterest}) => {
    return (
        <View style={styles.userLogin}>
            <Image style={styles.image} source={require('../../../assets/splash.png')}/>
            <PreviewList pointsOfInterest={pointsOfInterest} maxHeight={'44%'} title={'Trending'} />
        </View>
    )
}

export default UserLogin;

const styles = StyleSheet.create({
    userLogin: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        marginTop: 25,
    }
})