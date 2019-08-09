import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { ListItem } from "react-native-elements";

class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        usersList: [],
        isLoading: false
    };
  }
// key=XT1P-VS5A-9YQL-UY35&
  componentDidMount() {
    this.setState({isLoading: true})
    fetch('https://randomuser.me/api/?results=20')
      .then(res => res.json())
      .then(res => {
        this.setState({
          usersList: res.results,
          isLoading: false
        })
      })
    .catch(err => {
        console.log(err)
        this.setState({isLoading:false})
        alert(err.message);
    });
  }

  _viewUser(userId) {
    console.log(userId)
    this.props.navigation.navigate('viewUser', {id: userId.value})
  }

  _renderItems = ({item}) => (
    <ListItem
        leftAvatar={{ rounded: true, source: { uri: item.picture.thumbnail } }}
        title={`${item.name.first} ${item.name.last}`}
        subtitle={item.email}
        // rightIcon={{ name: 'arrow-dropright'}}
        onPress={this._viewUser(item.id)}
    />
  );

  _keyExtractor = (item, index) => item.email;
    
  render() {
    if(this.isLoading) {
      return <ActivityIndicator size="large" color="red" />
    }
    return (
      <FlatList
        data={this.state.usersList}
        renderItem={this._renderItems}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
export default UserList;
// AppRegistry.registerComponent('UserList', () => UserList);