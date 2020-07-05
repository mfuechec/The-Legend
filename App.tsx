import React, {useState} from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {

  let [loggedIn, setLoggedIn] = useState(false);

  const login = ({username, password}) => {

  }

  const signup = ({username, password}) => {

  }
  return (
    <NativeRouter>

      <Route
        exact path='/'
        render={() => <LandingPage loggedIn={loggedIn} setLoggedIn login={login} signup={signup}/>} />

    </NativeRouter>
  )

}

export default App;