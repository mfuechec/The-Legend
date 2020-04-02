import React, { useState, useEffect } from 'react';
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
import Sort from './components/Sort/Sort';

const App = (props) => {

  // Instantiates empty state objects for food and drink recipes
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [food, setFood] = useState({});
  const [drink, setDrink] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [whatIsSelected, setWhatIsSelected] = useState('food');
  const [searchText, setSearchText] = useState('');

  // Call the function that will find 10 random recipes from both APIs
  // This function runs only once on component mount
  useEffect(() => {
    manageAPICalls.findRandomRecipes()
  }, [])

  // This function that makes API calls to grab our 10 food and 10 drink recipes
  // This function then sends the responses on to separate functions to format for state
  const manageAPICalls = {
    findRandomRecipes: () => {
      axios.get(APIKeys.food + 'randomselection.php')
        .then((response) => {
          sortAPIResponse.sortFoodRecipes(response.data.meals)
        })
        .catch((error) => {
          console.log(error)
        })
      axios.get(APIKeys.drink + 'randomselection.php')
        .then((response) => {
          sortAPIResponse.sortDrinkRecipes(response.data.drinks)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    searchByName: (searchText) => {
      if (whatIsSelected === 'food') {
        axios.get(APIKeys.food + 'search.php?s=' + searchText)
          .then((response) => {
            sortAPIResponse.sortFoodRecipes(response);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error)
          })
      }
      if (whatIsSelected === 'drinks') {
        axios.get(APIKeys.drink + 'search.php?s=' + searchText)
          .then((response) => {
            sortAPIResponse.sortDrinkRecipes(response);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    searchByIngredient: (ingredient) => {
      if (whatIsSelected === 'food') {
        axios.get(APIKeys.food + 'filter.php?i=' + ingredient)
          .then((response) => {
            sortAPIResponse.sortFoodRecipesByIngredient(response.data.meals);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error)
          })
      }
      if (whatIsSelected === 'drinks') {
        axios.get(APIKeys.drink + 'filter.php?i=' + ingredient)
          .then((response) => {
            sortAPIResponse.sortDrinkRecipesByIngredient(response.data.drinks);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    searchByCategory: (category) => {
      if (whatIsSelected === 'food') {
        axios.get(APIKeys.food + 'filter.php?c=' + category)
          .then((response) => {
            sortAPIResponse.sortFoodRecipesByCategory(response);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error)
          })
      }
      if (whatIsSelected === 'drinks') {
        axios.get(APIKeys.drink + 'filter.php?c=' + category)
          .then((response) => {
            sortAPIResponse.sortDrinkRecipesByCategory(response);
            manageModal.closeModal();
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }

  // This function formats the response from the food API call and puts it into state
  const sortAPIResponse = {
    sortFoodRecipes: (datum) => {
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
    },
    sortDrinkRecipes: (datum) => {
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
    },
    sortFoodRecipesByIngredient: (datum) => {
      let newDatum = [];

      Promise.all([
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[0].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[1].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[2].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[3].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[4].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[5].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[6].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[7].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[8].idMeal),
        axios.get(APIKeys.food + 'lookup.php?i=' + datum[9].idMeal),
      ])
        .then(([one, two, three, four, five, six, seven, eight, nine, ten]) => {
          newDatum.push(one.data.meals[0]);
          newDatum.push(two.data.meals[0]);
          newDatum.push(three.data.meals[0]);
          newDatum.push(four.data.meals[0]);
          newDatum.push(five.data.meals[0]);
          newDatum.push(six.data.meals[0]);
          newDatum.push(seven.data.meals[0]);
          newDatum.push(eight.data.meals[0]);
          newDatum.push(nine.data.meals[0]);
          newDatum.push(ten.data.meals[0]);
          sortAPIResponse.sortFoodRecipes(newDatum);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    sortDrinkRecipesByIngredient: (datum) => {
      let newDatum = [];

      Promise.all([
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[0].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[1].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[2].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[3].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[4].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[5].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[6].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[7].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[8].idDrink),
        axios.get(APIKeys.drink + 'lookup.php?i=' + datum[9].idDrink),
      ])
        .then(([one, two, three, four, five, six, seven, eight, nine, ten]) => {
          newDatum.push(one.data.drinks[0]);
          newDatum.push(two.data.drinks[0]);
          newDatum.push(three.data.drinks[0]);
          newDatum.push(four.data.drinks[0]);
          newDatum.push(five.data.drinks[0]);
          newDatum.push(six.data.drinks[0]);
          newDatum.push(seven.data.drinks[0]);
          newDatum.push(eight.data.drinks[0]);
          newDatum.push(nine.data.drinks[0]);
          newDatum.push(ten.data.drinks[0]);
          sortAPIResponse.sortDrinkRecipes(newDatum);
        })
        .catch((error) => {
          console.log(error);
        })
    },
    sortFoodRecipesByCategory: (datum) => {
      console.log(datum)
    },
    sortDrinkRecipesByCategory: (datum) => {
      console.log(datum)
    }
  }

  // This object contains functions for interacting with the sort form modal
  const manageModal = {
    openModal: () => { setIsModalVisible(true) },
    closeModal: () => { setIsModalVisible(false) },
    searchFoods: () => { setWhatIsSelected('food') },
    searchDrinks: () => { setWhatIsSelected('drinks') }
  }

  return (
    <NativeRouter>
      <Sort setSearchText={setSearchText} whatIsSelected={whatIsSelected} isModalVisible={isModalVisible} manageAPICalls={manageAPICalls} manageModal={manageModal} />
      <Route
        exact path='/'
        render={() => <LandingPage />} />

      <Route
        path='/NewFood'
        render={() =>
          <View>
            <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
            <NewFood foods={foods} setFood={setFood} />
          </View>} />

      <Route
        path='/NewDrinks'
        render={() =>
          <View>
            <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
            <NewDrinks drinks={drinks} setDrink={setDrink} />
          </View>} />

      <Route
        path='/Food'
        render={() =>
          <View>
            <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
            <Food food={food} />
          </View>} />

      <Route
        path='/Drink'
        render={() =>
          <View>
            <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
            <Drink drink={drink} />
          </View>} />

      <Route
        path='/DrinkDirections'
        render={() =>
          <View>
            <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
            <DrinkDirections drink={drink} />
          </View>} />

      <Route
        path='/FoodDirections'
        render={() =>
          <View>
            <NavBar findRandomRecipes={manageAPICalls.findRandomRecipes} openModal={manageModal.openModal} />
            <FoodDirections food={food} />
          </View>} />

    </NativeRouter>
  )

}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  sortModalContainer: {
    height: '50%',
    width: '50%'
  }
})

export default App;