import React ,{Component} from 'react';
import {View,Text,StyleSheet,ActivityIndicator,Image,Button} from 'react-native';
import style from '../Style'


export default class About extends React.Component {
    static navigationOptions ={
        tabBarIcon:()=>{
            return <Image source={require('./icons/user.jpg')} style={{width:20,height:20}} />
        }
    };
    search(){
      this.props.navigation.navigate('Search')
     }
    render(){
        return(
         <View style={style.view}>
            <Text style={style.title}>A propos  de  Application</Text>
           <Text>about pageeee  dfsdfsdfsdmwl</Text>
           <Button color={style.color}  onPress={()=>this.search()} title="Rechercher une ville" />
        </View>
        );
    }
}

