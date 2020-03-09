import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';

import store from './src/components/redux/store';
import HomeScreen from './src/components/screen/Home/HomeScreen';
import BookScreen from './src/components/screen/Book/BookScreen';
import BookDetailScreen from './src/components/screen/Book/BookDetail';
import ProfileScreen from './src/components/screen/Profile/ProfileScreen';
import AboutScreen from './src/components/screen/About/AboutScreen';
import BookAddScreen from './src/components/screen/Book/BookAdd';
import BookEditScreen from './src/components/screen/Book/BookEdit';
import AboutDetailScreen from './src/components/screen/About/AboutDetailScreen';

const tabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen
  }
)

const homeNavigator = createStackNavigator(
  {
    Home: tabNavigator,
    Book: BookScreen,
    AddBook: BookAddScreen,
    DetailBook: BookDetailScreen,
    EditBook: BookEditScreen,
    AboutDetail: AboutDetailScreen,
  }
)

const AppNavigator = createSwitchNavigator(
  {
      Home: homeNavigator,
      Profile: ProfileScreen
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