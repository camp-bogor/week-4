import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';

import store from './src/components/redux/store';
import HomeScreen from './src/components/screen/Home/HomeScreen';
import BookScreen from './src/components/screen/Book/BookScreen';
import ProfileScreen from './src/components/screen/Profile/ProfileScreen';
import AboutScreen from './src/components/screen/About/AboutScreen';
import AddBookScreen from './src/components/screen/Book/BookAdd';

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Book: BookScreen,
        Profile: ProfileScreen,
        About: AboutScreen,
        AddBook: AddBookScreen
    },
    {
        initialRouteName: 'Home'
    }
);

const AppContainer =  createAppContainer(AppNavigator);

function App(){
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App;