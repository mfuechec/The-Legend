import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';

let height = Dimensions.get('window').height;

let Title = ({title}) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: height/25
    }
})

export default Title;