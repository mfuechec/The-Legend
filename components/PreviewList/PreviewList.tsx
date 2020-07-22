import React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Preview from './Preview.tsx';
import Title from './Title.tsx';
import Login from '../Login/Login.tsx';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

const PreviewList = ({pointsOfInterest, maxHeight, title}) => {
    return (
        <View style={[styles.pointsOfInterest, {maxHeight: maxHeight}]}>
            <Title title={title} />
            <ScrollView>
                {pointsOfInterest.map((PoI, i) => {return(<Preview PoI={PoI} key={i}/>)})}
            </ScrollView>
            <Text style={styles.joinText}>Join The Legend</Text>
            <Login />
        </View>
    )
}

const styles = StyleSheet.create({
    pointsOfInterest: {
        flex: 1,
        width: width,
        alignItems: 'center',
        transform: [{translateY: height/25}]
    },
    title: {
        fontSize: height/25
    },
    joinText: {
        fontSize: height/40,
        transform: [{translateY: height/25}]
    }
})

export default PreviewList;