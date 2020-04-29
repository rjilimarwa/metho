import React ,{Component} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,TextInput,Image,Button,ListView} from 'react-native';
import { StackNavigator } from '@react-navigation/native';
import style from '../Style'
import axios  from 'axios'
import WeatherRow from './weather/Row'
export default class Search extends React.Component {
    static navigationOptions =({navigation}) =>{
     return{
        title: `Metho/${navigation.state.params.city}`

        }
    };
constructor(props){
    super(props)
    this.state = {
        city: 'this.props.navigation.state.params.city',
        report: null
    }
    setTimeout(()=>
    { this.fetchWeather()},1000
    )
   
}
fetchWeather(){
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=94c6cf0868fa5cb930a5e2d71baf0dbf`)
        .then((response) =>{this.setState({report: response.data})})
};

    render(){
      if(this.state.report === null){
          return(
              <ActivityIndicator color={style.color} size="large"/>
      )
      } else {
          const ds= new ListView.DataSource({rowHasChanged:(r1:r2) => r1 !== r2})

          return(
              <ListView
              dataSource={ds.cloneWithRows(this.state.report.list)}
               renderRow={(row,j,k) => <WeatherRow day={row} index={parseInt(k,10)}/>}
              />
      )
      }

    }
}
