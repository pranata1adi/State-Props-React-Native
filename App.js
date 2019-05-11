import React, {Component} from 'react';
import {Text ,TextInput, View} from 'react-native';



// class Mobil extends Component {
//   render() {
//     return (
//       <View style={{margin:5}}>

//         {/* this is props <Text>Mobilku {this.props.name}</Text> */}
//       </View>
//     );
//   }
// }

class App extends Component {
  constructor(){
    super()
    this.state = {
      name:'',

    }
  }

  render() {
    return (
      <View style={{flex:1, margin: 20}}>
        {/* this is props <Mobil name="Ferrari"/>
        <Mobil name="Buggati"/>
        <Mobil name="Audi"/>
        <Mobil name="Lamborgini"/> */}
        <TextInput
          onChangeText={(text) => {this.setState({nama:text})}}
        />
        <Text>Jenis Mobil {this.state.nama}</Text>
      </View>
    );
  }
}

export default App