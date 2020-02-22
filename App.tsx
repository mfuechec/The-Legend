import React, {useState, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { NativeRouter, Route } from "react-router-native";
import LandingPage from './components/LandingPage/LandingPage';
import NewFood from './components/NewFood/NewFood';
import NewDrinks from './components/NewDrinks/NewDrinks';
import Food from './components/Food/Food';
import Drink from './components/Drink/Drink';
import APIKeys from './passwords.config';
import axios from 'axios';
import DrinkDirections from './components/Drink/DrinkDirections';
import FoodDirections from './components/Food/FoodDirections';
import NavBar from './components/NavBar/NavBar';

const App = props => {

  // Instantiates empty state objects for food and drink recipes
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [food, setFood] = useState({});
  const [drink, setDrink] = useState({});

  // Call the function that will find 10 random recipes from both APIs
  // This function runs only once on component mount
  useEffect(() =>{
    findRecipes()
  }, [])

  // This function that makes API calls to grab our 10 food and 10 drink recipes
  // This function then sends the responses on to separate functions to format for state
  const findRecipes = () => {
    axios.get(APIKeys.food + 'randomselection.php')
    .then((response) => {
      sortFoodRecipes(response)
    })
    .catch((error) => {
      console.log(error)
    })
    axios.get(APIKeys.drink + 'randomselection.php')
    .then((response) => {
      sortDrinkRecipes(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  // This function formats the response from the food API call and puts it into state
  const sortFoodRecipes = (datum) => {
    datum = datum.data.meals;
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
    setFoods(recipes);
  }

  // This function formats the response from the food API call and puts it into state
  const sortDrinkRecipes = (datum) => {
    datum = datum.data.drinks;
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
    setDrinks(recipes);
  }
  
  return (
    <NativeRouter>
      <Route
        exact path='/'
        render={() => <LandingPage/>}/>
      <Route
        path='/NewFood'
        render={() => 
        <View>
          <NavBar findRecipes={findRecipes}/>
          <NewFood foods={foods} setFood={setFood}/>
        </View>}/>
      <Route
        path='/NewDrinks'
        render={() =>
          <View>
            <NavBar findRecipes={findRecipes}/>
            <NewDrinks drinks={drinks} setDrink={setDrink}/>
          </View>}/>
      <Route
        path='/Food'
        render={() =>
          <View>
            <NavBar findRecipes={findRecipes} />
            <Food food={food}/>
          </View>}/>
      <Route
        path='/Drink'
        render={() =>
          <View>
            <NavBar findRecipes={findRecipes}/>
            <Drink drink={drink}/>
          </View>}/>
      <Route
        path='/DrinkDirections'
        render={() =>
          <View>
            <NavBar findRecipes={findRecipes}/>
            <DrinkDirections drink={drink}/>
          </View>}/>
      <Route
        path='/FoodDirections'
        render={() =>
          <View>
            <NavBar findRecipes={findRecipes}/>
            <FoodDirections food={food}/>
          </View>}/>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})

export default App;