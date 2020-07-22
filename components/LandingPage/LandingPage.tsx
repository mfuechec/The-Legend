import React, {useState} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import SplashScreen from '../SplashScreen/SplashScreen.tsx';
import Trending from '../Trending/Trending.tsx';
import Login from '../Login/Login.tsx';

const LandingPage = (props) => {

    let [isLoaded, setIsLoaded] = useState(false);
    let [isAnimationFinished, setIsAnimationFinished] = useState(false);

    setTimeout(() => {
        setIsLoaded(true)
        setTimeout(() => {
            setIsAnimationFinished(true);
        }, 2000)
    }, 100);

    if (isAnimationFinished) {
        if (props.isLoggedIn) {

        } else {
            return (
                <View style={styles.landingPage}>
                    <Image style={styles.image} source={require('../../assets/splash.png')} />
                    <View style={styles.trending}>
                        <Text style={styles.trendingText}>Trending</Text>
                        <Trending />
                    </View>
                    <Text style={styles.joinText}>Join The Legend</Text>
                    <Login setLoggedIn={props.setLoggedIn} login={props.login} signup={props.signup}/>
                </View>
            )
        }
    } else {
        return (
            <View style={styles.landingPage}>
                <SplashScreen isLoaded={isLoaded} />
            </View>
        )
    }
}

export default LandingPage;

const styles = StyleSheet.create({
    landingPage: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
        marginTop: 25
    },
    trending: {
        width: '80%',
        height: '40%',
        backgroundColor: '#333333',
        marginTop: '5%'
    },
    trendingText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 35
    },
    joinText: {
        textAlign: 'center',
        fontSize: 35,
        marginTop: '5%'
    }
})