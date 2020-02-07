import React, {Component} from 'react';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';
import NewFood from './components/NewFood/NewFood';
import NewDrinks from './components/NewDrinks/NewDrinks';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Route exact path='/' component={LandingPage} />
        <Route path='/NewFood' component={NewFood} />
        <Route path='/NewDrinks' component={NewDrinks} />
      </NativeRouter>
    )
  }
}