import React ,{Component} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,TextInput,Image,Button} from 'react-native';
import style from '../Style'
import List from './List'
export default  class Search extends React.Component {

    constructor(props) {
      super(props)
       this.state ={
          city: 'Montpellier'
       }
      }
      setCity(city){
       this.setState({city})
      }
      submit(){
           this.props.navigation.navigate('List')
        }
    render(){
        return(
            <View>
        <TextInput style={style.input}
         onChangeText={(text)=>this.setCity(text)}
          value={this.state.city}
         />
        <Button  color={style.color} onPress={()=> this.submit()}  title="Rechercher" />
            </View>
    );
    }
}

