import React, {Component} from 'react';
import {Text, Image, Alert, TextInput, View, Button} from 'react-native';

class Mobil extends Component {
  render() {
    return (
      <View>
        <Button
          style={{color:'white', margin:5}}
          onPress={()=> 
            Alert.alert(this.props.name)
          }
          title={this.props.name} 
          >
      </Button>
      </View>
    );
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      name:'Ferrari',
      jenis:'Roda 4',
    }
  }

  render() {
    return (
      <View style={{flex:1, margin: 20}}>
        {/* this is props <Mobil name="Ferrari"/>
        <Mobil name="Buggati"/>
        <Mobil name="Audi"/>
        <Mobil name="Lamborgini"/> */}
        <View style={{flex:1, margin:20}}>
          <Image style={{width:'100%', height:150, margin:5}} source={{uri:'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'}}/>
        </View>

        <View
          backgroundColor='dodgerblue'
          style={{flex:1, margin:5}}>
          <TextInput
            placeholderTextColor='white'
            selectionColor='white'
            placeholder="Masukkan Nama Mobil"
            onChangeText={
              (text) => {this.setState({name:text}),color='white'}
            }
          />
          <Text style={{color:'white', margin:5}}>Jenis Mobil {this.state.name}</Text>  
        </View>

        <View
          backgroundColor='fuchsia'
          style={{flex:1, margin:5}}>
          <TextInput
            placeholderTextColor='white'
            placeholder="Masukkan Jenis Mobil"
            onChangeText={(text) => {this.setState({jenis:text})}}
          />
          <Text style={{color:'white', margin:5}}>Jenis Mobil {this.state.jenis}</Text>  
        </View>

        <View
          backgroundColor='gold'
          style={{flex:1, margin:5}}>
          <Mobil name="Ferrari" />
          <Mobil name="Audi"/>
          <Mobil name="Lamborgini"/>
          <Mobil name="Chevrolet"/>
          <Mobil name="Buggati"/>
        </View>
        
      </View>
    );
  }
}

export default App