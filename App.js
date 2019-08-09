import React from 'react';
import { Text, View, AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import UserList from './components/user-list';
import ViewUser from './components/view-user';
import { Header } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: UserList,
  viewUser: ViewUser,
},{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(AppNavigator);

// AppRegistry.registerComponent('UserList', () => App);