import React, {Component} from 'react';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';
import NewFood from './components/NewFood/NewFood';
import NewDrinks from './components/NewDrinks/NewDrinks';
import APIKeys from './passwords.config';
import axios from 'axios';

export default class App extends Component {
	public state: any;
	public setState: any;

  constructor() {
    super()
    this.state = {
      drinks: [],
      drink: {},
      foods: [],
      food: {}
    }
    this.findRecipes = this.findRecipes.bind(this);
    this.sortFoodRecipes = this.sortFoodRecipes.bind(this);
    this.sortDrinkRecipes = this.sortDrinkRecipes.bind(this);
  }

  findRecipes(selection) {
    if (selection === 'food') {
      axios.get(APIKeys.food + 'randomselection.php')
      .then((response) => {
        this.sortFoodRecipes(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
    if (selection === 'drink') {
      axios.get(APIKeys.drink + 'randomselection.php')
      .then((response) => {
        this.sortDrinkRecipes(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  sortFoodRecipes(datum) {
    datum = datum.data.meals;
    if (this.state.foods.length === 0) {
      var recipes = [];
      for (var i = 0; i < datum.length; i++) {
        var recipe = {
          name: '',
          type: '',
          instructions: '',
          image: '',
          ingredients: [],
          measurements: []
        };
        var data = datum[i]
        recipe.name = data.strMeal;
        recipe.type = data.strCategory;
        recipe.instructions = data.strInstructions;
        recipe.image = data.strMealThumb;
        recipe.ingredients = [
          data.strIngredient1,
          data.strIngredient2,
          data.strIngredient3,
          data.strIngredient4,
          data.strIngredient5,
          data.strIngredient6,
          data.strIngredient7,
          data.strIngredient8,
          data.strIngredient9,
          data.strIngredient10,
          data.strIngredient11,
          data.strIngredient12,
          data.strIngredient13,
          data.strIngredient14,
          data.strIngredient15,
          data.strIngredient16,
          data.strIngredient17,
          data.strIngredient18,
          data.strIngredient19,
          data.strIngredient20,
        ]
        recipe.measurements = [
          data.strMeasure1,
          data.strMeasure2,
          data.strMeasure3,
          data.strMeasure4,
          data.strMeasure5,
          data.strMeasure6,
          data.strMeasure7,
          data.strMeasure8,
          data.strMeasure9,
          data.strMeasure10,
          data.strMeasure11,
          data.strMeasure12,
          data.strMeasure13,
          data.strMeasure14,
          data.strMeasure15,
          data.strMeasure16,
          data.strMeasure17,
          data.strMeasure18,
          data.strMeasure19,
          data.strMeasure20,
        ]
        recipes.push(recipe)
      }
      this.setState({
        foods: recipes
      })
    }
  }

  sortDrinkRecipes(datum) {
    datum = datum.data.drinks;
    if (this.state.drinks.length === 0) {
      var recipes = [];
      for (var i = 0; i < datum.length; i++) {
        var recipe = {
          name: '',
          type: '',
          instructions: '',
          image: '',
          ingredients: [],
          measurements: []
        };
        var data = datum[i]
        recipe.name = data.strDrink;
        recipe.type = data.strCategory;
        recipe.instructions = data.strInstructions;
        recipe.image = data.strDrinkThumb;
        recipe.ingredients = [
          data.strIngredient1,
          data.strIngredient2,
          data.strIngredient3,
          data.strIngredient4,
          data.strIngredient5,
          data.strIngredient6,
          data.strIngredient7,
          data.strIngredient8,
          data.strIngredient9,
          data.strIngredient10,
          data.strIngredient11,
          data.strIngredient12,
          data.strIngredient13,
          data.strIngredient14,
          data.strIngredient15,
          data.strIngredient16,
          data.strIngredient17,
          data.strIngredient18,
          data.strIngredient19,
          data.strIngredient20,
        ]
        recipe.measurements = [
          data.strMeasure1,
          data.strMeasure2,
          data.strMeasure3,
          data.strMeasure4,
          data.strMeasure5,
          data.strMeasure6,
          data.strMeasure7,
          data.strMeasure8,
          data.strMeasure9,
          data.strMeasure10,
          data.strMeasure11,
          data.strMeasure12,
          data.strMeasure13,
          data.strMeasure14,
          data.strMeasure15,
          data.strMeasure16,
          data.strMeasure17,
          data.strMeasure18,
          data.strMeasure19,
          data.strMeasure20,
        ]
        recipes.push(recipe)
      }
      this.setState({
        drinks: recipes
      })
    }
  }
  
  render() {
    return (
      <NativeRouter>
        <Route
          exact path='/'
          render={(props) => <LandingPage {...props} findRecipes={this.findRecipes}/>} />
        <Route
          path='/NewFood'
          render={(props) => <NewFood {...props} foods={this.state.foods} food={this.state.food}/>}/>
        <Route
          path='/NewDrinks'
          render={(props) => <NewDrinks {...props} drinks={this.state.drinks} drink={this.state.drink}/>}/>
      </NativeRouter>
    )
  }
}