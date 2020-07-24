import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import ReadOnlyStarRating from './ReadOnlyStarRating.tsx';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

let Preview = ({PoI}) => {

    function calcDif() {
        // Return the difference in miles between Users location and PoI location.

        return '.3';
    }

    return (
        <View style={styles.preview}>
            <Image style={styles.image} source={(PoI.images[0])}/>
            <Text style={styles.distanceText}>{calcDif()} miles away</Text>
            <View style={styles.ratingContainer}>
                <Text style={styles.nameText}>{PoI.name}</Text>
                <ReadOnlyStarRating rating={PoI.averageRating} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    preview: {
        width: width*.8,
        height: height/10,
        alignItems: 'center',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 15,
        marginTop: height/50
    },
    image: {
        height: width*.8/5,
        width: width*.8/5,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    distanceText: {
        color: 'red',
        fontWeight: 'bold',
        width: width*.8/4
    },
    ratingContainer: {
        width: width*.8/2,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    nameText: {
        
    }
})

export default Preview;