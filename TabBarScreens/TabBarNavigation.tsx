import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../DrawerScreens/Profile';
import Settings from '../DrawerScreens/Settings';
import AboutUs from '../DrawerScreens/AboutUs';
import { DrawerParamList } from '../DrawerScreens/DrawerNavigations';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Posts from './Posts';

export type TabParamList = {
  Home: { name: string };
  Profile: { name: string };
  Setting: { name: string };
  About: { name: string };
  posts : {name : string};
};


const Tab = createBottomTabNavigator<TabParamList>();

type TabBarNavigationTypes = DrawerScreenProps<DrawerParamList, "Tabs">

const TabBarNavigation: React.FC<TabBarNavigationTypes> = ({ route }) => {

  const user = route.params.name;

  return (
    <Tab.Navigator screenOptions={{ headerShown: false ,tabBarStyle : { height: 60 ,backgroundColor : "#000000",paddingTop : 0,borderTopWidth : 1,borderTopColor : '#FFFFFF'},tabBarIconStyle : {marginBottom : 1}}}>
      <Tab.Screen name="Home" component={HomeScreen} initialParams={{ name: user }}
        options={{
          tabBarIcon: (focus) => (
            <Ionicons name="home" size={30} color={focus.focused ? '#c8b6ff' : '#ffffff'}/>
          ),
          tabBarLabelStyle: { fontSize: 18, fontWeight: '500' },
          
          tabBarActiveTintColor: '#99d98c',
          
        }}></Tab.Screen>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: (focus) => (
          <Ionicons name="person-circle-outline" size={30} color={focus.focused ? '#c8b6ff' : '#ffffff'}/>
        ), tabBarLabelStyle: { fontSize: 18, fontWeight: '500' },
       
        tabBarActiveTintColor: '#99d98c',
      }}></Tab.Screen>
       <Tab.Screen name="posts" component={Posts} initialParams={{ name: user }} options={{
        tabBarIcon : (focus) => <Ionicons name="duplicate" size={32} color={focus.focused ? '#c8b6ff' : '#ffffff'}></Ionicons>,
        tabBarLabelStyle: { fontSize: 18, fontWeight: '500' },
       
        tabBarActiveTintColor: '#99d98c',
       }}></Tab.Screen>
      <Tab.Screen name="Setting" component={Settings} initialParams={{ name: user }} options={{
        tabBarIcon: (focus) => (
          <Ionicons name="settings" size={30} color={focus.focused ? '#c8b6ff' : '#ffffff'}/>
        ),
        tabBarLabelStyle: { fontSize: 18, fontWeight: '500' },
        tabBarActiveTintColor: '#99d98c',
      }}></Tab.Screen>
      <Tab.Screen name="About" component={AboutUs} initialParams={{ name: user }} options={{
        tabBarIcon: (focus) => (
          <Ionicons name="ellipsis-vertical-circle-outline" size={30} color={focus.focused ? '#c8b6ff' : '#ffffff'}/>
        ), tabBarActiveTintColor: '#99d98c',
        tabBarLabelStyle: { fontSize: 18, fontWeight: '500' },
       
      }}></Tab.Screen>
     

    </Tab.Navigator>
  )
}

export default TabBarNavigation