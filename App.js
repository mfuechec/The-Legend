import React, {Component} from 'react';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';
import NewFood from './components/NewFood/NewFood';
import NewDrinks from './components/NewDrinks/NewDrinks';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      drinks: [{
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      },
      {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      }],
      drink: {
        name: "Gin Toddy",
        glass: "Old-fashioned glass",
        instructions: "Mix powdered sugar and water in an old-fashioned glass. Add gin and one ice cube. Stir, add the twist of lemon peel, and serve.",
        image: "https://www.thecocktaildb.com/images/media/drink/l9gi5h1504820724.jpg",
        ingredients: ["Gin", "Water", "Powdered sugar", "Lemon peel", null, null, null, null, null, null, null, null, null, null, null],
        measurements: ["2 oz ", "2 tsp ", "1/2 tsp ", "1 twist of ", null, null, null, null, null, null, null, null, null, null, null]
      }
    }
    this.findRecipes = this.findRecipes.bind(this);
  }

  findRecipes() {
    console.log('howdy')
  }
  
  render() {
    return (
      <NativeRouter>
        <Route
          exact path='/'
          render={(props) => <LandingPage {...props} findRecipes={this.findRecipes}/>} />
        <Route
          path='/NewFood'
          component={NewFood} />
        <Route
          path='/NewDrinks'
          render={(props) => <NewDrinks {...props} drinks={this.state.drinks} drink={this.state.drink}/>}/>
      </NativeRouter>
    )
  }
}