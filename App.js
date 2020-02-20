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
      },
      foods: [{
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      },
      {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
      }],
      food: {
        name: 'Carrot Cake',
        type: 'Dessert',
        instructions: 'For the carrot cake, preheat the oven to 160C/325F/Gas 3. Grease and line a 26cm/10in springform cake tin. Mix all of the ingredients for the carrot cake, except the carrots and walnuts, together in a bowl until well combined. Stir in the carrots and walnuts. Spoon the mixture into the cake tin and bake for 1 hour 15 minutes, or until a skewer inserted into the middle comes out clean. Remove the cake from the oven and set aside to cool for 10 minutes, then carefully remove the cake from the tin and set aside to cool completely on a cooling rack. Meanwhile, for the icing, beat the cream cheese, caster sugar and butter together in a bowl until fluffy. Spread the icing over the top of the cake with a palette knife.',
        image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg',
        ingredients: ["Vegetable Oil", "Plain Flour", "Bicarbonate Of Soda", "Sugar", "Eggs", "Salt", "Cinnamon", "Carrots", "Walnuts", "Cream Cheese", "Caster Sugar", "Butter", null, null, null, null, null, null, null, null],
        measurements: ["450ml", "400g", "2 tsp", "550ml", "5", "½ tsp", "2 tsp", "500g grated", "150g", "200g", "150g", "100g ", null, null, null, null, null, null, null, null]
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
          render={(props) => <NewFood {...props} foods={this.state.foods} food={this.state.food}/>}/>
        <Route
          path='/NewDrinks'
          render={(props) => <NewDrinks {...props} drinks={this.state.drinks} drink={this.state.drink}/>}/>
      </NativeRouter>
    )
  }
}