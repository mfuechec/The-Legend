import React, {useRef} from 'react';
import { View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

const SplashScreen = (props) => {

    let screenHeight = Math.round(Dimensions.get('window').height);
    let imageSize = useRef(new Animated.Value(200)).current;
    let marginTop = useRef(new Animated.Value(screenHeight/2 - 100)).current;

    if (props.isLoaded) {
        resizeIcon();
        moveIcon();
    }

    resizeIcon = () => {
        Animated.timing(
            imageSize,
            {
                toValue: 60,
                duration: 1000,
            }
        ).start();
    }

    moveIcon = () => {
        Animated.timing(
            marginTop,
            {
                toValue: 25,
                duration: 2000,
            }
        ).start();
    }

    return (
        <Animated.View style={styles.splashScreen}>
            <Animated.Image style={{marginTop: marginTop, width: imageSize, height: imageSize}} source={require('../../assets/icon.png')} />
        </Animated.View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    splashScreen: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    }
})