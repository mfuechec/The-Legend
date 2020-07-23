import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';
let austinCapitol = require('./assets/dummy/austinCapitol.jpg');
let barton1 = require('./assets/dummy/barton1.jpeg');
let barton2 = require('./assets/dummy/barton2.jpeg');
let barton3 = require('./assets/dummy/barton3.jpeg');
let pearland1 = require('./assets/dummy/pearland1.jpeg');
let pearland2 = require('./assets/dummy/pearland2.jpeg');
let pearland3 = require('./assets/dummy/pearland3.jpeg');
let pearland4 = require('./assets/dummy/pearland4.jpeg');
let sixth = require('./assets/dummy/sixth.jpeg');

import * as Location from "expo-location";

const App = () => {


  async function setUsersCurrentLocation() {
      let { status } = await Location.getPermissionsAsync();
      if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
  }

  let DummyData = [
    {
      name: `Austin Capitol Building`,
      location: {latitude: 30.274399, longitude: -97.740492},
      images: [austinCapitol],
      averageRating: 3
    },
    {
      name:  `Barton Springs`,
      location: {latitude: 30.259110, longitude: -97.752220},
      images: [barton1, barton2, barton3],
      averageRating: 4.5
    },
    {
      name: `Sixth Street`,
      location: {latitude: 30.266746, longitude: -97.738058},
      images: [sixth],
      averageRating: 1.2
    }
  ]

  const [loggedIn, setLoggedIn] = useState(false);
  const [pointsOfInterest, setPointsOfInterest] = useState(DummyData);
  const [userLocation, setUserLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);


    useEffect(()=>{
    findUserLocation();
  }, [])

  function findUserLocation() {
    // Check for GPS permissions
    // Ask permission if needed
    setUsersCurrentLocation();
      // Find users coordinates from phone
    // Or
    // Get user to input their location
  }

  const login = ({username, password}) => {

  }

  const signup = ({username, password}) => {

  }

  return (
    <NativeRouter>

      <Route
        exact path='/'
        render={() => <LandingPage pointsOfInterest={pointsOfInterest} loggedIn={loggedIn} setLoggedIn={setLoggedIn} login={login} signup={signup}/>} />

    </NativeRouter>
  )

}

export default App;