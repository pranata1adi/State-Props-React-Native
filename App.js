import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Mobil extends Component {
  render() {
    return (
      <View style={{margin:5}}>
        <Text>Mobilku {this.props.name}</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <View style={{flex:1, margin: 20}}>
        <Mobil name="Ferrari"/>
        <Mobil name="Buggati"/>
        <Mobil name="Audi"/>
        <Mobil name="Lamborgini"/>
      </View>
    );
  }
}

export default App