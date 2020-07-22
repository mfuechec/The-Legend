import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {

  let trendingDummyData = [
    {
      name: `Austin Capitol Building`,
      location: {latitude: 30.274399, longitude: -97.740492},
      images: [`../../assets/dummy/austinCapitol.jpg`],
      averageRating: 3
    },
    {
      name:  `Barton Springs`,
      location: {latitude: 30.259110, longitude: -97.752220},
      images: [`../../assets/dummy/barton1.jpeg`, `../../assets/dummy/barton1.jpeg`, `../../assets/dummy/barton3.jpeg`],
      averageRating: 4.5
    },
    {
      name: `Sixth Street`,
      location: {latitude: 30.266746, longitude: -97.738058},
      images: [`../../assets/dummy/sixth.jpeg`],
      averageRating: 1.2
    },
    {
      name: `Pearland`,
      location: {latitude: , longitude: },
      images: [`../../assets/dummy/pearland1.jpeg`, `../../assets/dummy/pearland2.jpeg`, `../../assets/dummy/pearland3.jpeg`, `../../assets/dummy/pearland4.jpeg`],
      averageRating: .6
    },
    {
      name: `Pearland`,
      location: {latitude: , longitude: },
      images: [`../../assets/dummy/pearland1.jpeg`, `../../assets/dummy/pearland2.jpeg`, `../../assets/dummy/pearland3.jpeg`, `../../assets/dummy/pearland4.jpeg`],
      averageRating: .6
    },
    {
      name: `Pearland`,
      location: {latitude: , longitude: },
      images: [`../../assets/dummy/pearland1.jpeg`, `../../assets/dummy/pearland2.jpeg`, `../../assets/dummy/pearland3.jpeg`, `../../assets/dummy/pearland4.jpeg`],
      averageRating: .6
    }
  ]

  let [loggedIn, setLoggedIn] = useState(false);
  let [trending, setTrending] = useState(trendingDummyData);
  let [userLocation, setUserLocation] = useState();

  useEffect(()=>{
    findUserLocation();
  }, [])

  function findUserLocation() {
    // Check for GPS permissions
    // Ask permission if needed

    // Find users coordinates from phone
    // Or
    // Get user to input their location

    // Put those coordinates into state

    setUserLocation({latitude: 30.213148, longitude: -97.812519})
  }

  const login = ({username, password}) => {

  }

  const signup = ({username, password}) => {

  }

  return (
    <NativeRouter>

      <Route
        exact path='/'
        render={() => <LandingPage trending={trending} loggedIn={loggedIn} setLoggedIn={setLoggedIn} login={login} signup={signup}/>} />

    </NativeRouter>
  )

}

export default App;