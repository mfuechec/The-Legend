import React, {useState} from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import SplashScreen from '../SplashScreen/SplashScreen.tsx';
import UserLogin from './UserLogin/UserLogin.tsx';
import HomePage from './HomePage/HomePage.tsx';

const LandingPage = ({isLoggedIn, loggedIn, setLoggedIn, login, signup, pointsOfInterest}) => {

    let [isLoaded, setIsLoaded] = useState(false);
    let [isAnimationFinished, setIsAnimationFinished] = useState(false);

    setTimeout(() => {
        setIsLoaded(true)
        setTimeout(() => {
            setIsAnimationFinished(true);
        }, 2000)
    }, 100);

    if (isAnimationFinished) {
        if (isLoggedIn) {
            return (
                <HomePage pointsOfInterest={pointsOfInterest} />
            )
        } else {
            return (
                <UserLogin pointsOfInterest={pointsOfInterest} />
            )
        }
    } else {
        return (
            <SplashScreen isLoaded={isLoaded} />
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