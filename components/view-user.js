import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    console.log(navigation.getParam('id'), 'this.props.navigation.getParam')
    fetch(`https://randomuser.me/api/?id=${navigation.getParam('id')}`)
    .then(res => res.json())
    .then(user => {
      console.log(user)
      this.setState({user});
    })
    .catch(err => console.log(err))
  }

  render() {
    return(
      <View>
        
      </View>
    )
  }
}
