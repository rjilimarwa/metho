import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import About from './Components/About'
import Search from './Components/Search'
import List from './Components/List'
import style from './Style'

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <View>
        <NavigationContainer>
        <Tab.Navigator  tabBarOptions={{
        labelStyle: { fontSize: 20 },
        tabStyle: { width: 100 },
        tabBarIcons: true,
        pressColor:"#008000",
        tabBarPosition:'bottom',
        paddingHorizontal:10,
        activeTintColor: '#fff',
         space:"between",
        style: { backgroundColor: '#a2273C',borderTopWidth:1,borderColor:"#3f101c" },
        indicatorStyle:{height:2,backgroundColor: '#FFF'}
    }
}>
        <Tab.Screen syle={{marginLeft:50}}  name="About" component={About}  />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="List" component={List} />
        </Tab.Navigator>
        </NavigationContainer>
        </View>
    );
}