import React, {Component} from 'react';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';
import NewFood from './components/NewFood/NewFood';
import NewDrinks from './components/NewDrinks/NewDrinks';
import NavBar from './components/NavBar/NavBar';

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  findRecipes() {
    // Find the 10-15 most popular recipes
  }
  
  render() {
    return (
      <NativeRouter>
        <Route exact path='/' findRecipes={this.findRecipes} component={LandingPage} />
        <Route path='/NewFood' component={NewFood} />
        <Route path='/NewDrinks' component={NewDrinks} />
      </NativeRouter>
    )
  }
}