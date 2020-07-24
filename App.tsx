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

  const [loggedIn, setLoggedIn] = useState(false);
  const [pointsOfInterest, setPointsOfInterest] = useState();
  const [userLocation, setUserLocation] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(()=>{
    // findUserLocation();
    findTrending();
  }, [])

  function findUserLocation() {
    // Check for GPS permissions
    // Ask permission if needed
    setUsersCurrentLocation();
      // Find users coordinates from phone
    // Or
    // Get user to input their location
  }

  function findTrending() {
    let result = []
    fetch('http://node-express-env.eba-vkmcpazb.us-east-2.elasticbeanstalk.com/trending')
    .then(response => response.json())
    .then(data => {
      data.map(datum => result.push(datum[0]));
      setPointsOfInterest(result);
    }
    );
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