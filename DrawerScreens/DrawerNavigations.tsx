import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screens/HomeScreen";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../Screens/Mainroute";
import UserDetails from "./Profile";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import CustomDrawer from "./CustomDrawer";
import Profile from "./Profile";
import Settings from "./Settings";
import AboutUs from "./AboutUs";
import Ionicons from 'react-native-vector-icons/Ionicons';



const home = require('../assets/hut.png')

import { DrawerScreenProps } from "@react-navigation/drawer";
import { Button, Image } from "react-native";
import TabBarNavigation from "../TabBarScreens/TabBarNavigation";

export type DrawerParamList = {
  Tabs: { name: string };
  Profile: { name: string };
  Setting: { name: string };
  About: { name: string };
};

const Drawer = createDrawerNavigator<DrawerParamList>();

type DrawerNavigationsTypes = NativeStackScreenProps<RootStackParamList, "Drawer">



const DrawerNavigations: React.FC<DrawerNavigationsTypes> = ({ route }) => {
  const user = route.params.name;
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false,drawerType:'slide'}}
      drawerContent={(props) => <CustomDrawer {...props} />} >
      <Drawer.Screen name="Tabs"
        component={TabBarNavigation} initialParams={{ name: user }}
        options={{drawerIcon: (focus) => (
          <Ionicons name="home-outline" size={30} color={focus.focused ? '#118ab2' : 'black'} />
        ),drawerActiveBackgroundColor: '#e4c1f9', drawerLabelStyle: { fontSize: 20, letterSpacing: 2, color: '#000000' },drawerItemStyle:{marginBottom:10,padding:5},drawerLabel : "Home"}} />
      <Drawer.Screen name="Profile"
        component={Profile} initialParams={{ name: user }}
        options={{ drawerIcon: (focus) => (
          <Ionicons name="person-circle-outline" size={30} color={focus.focused ? '#118ab2' : 'black'}/>
        ),drawerActiveBackgroundColor: '#e4c1f9', drawerLabelStyle: { fontSize: 20, letterSpacing: 2, color: '#000000' },drawerItemStyle:{marginBottom:10,padding:5},headerShown : true }} />
      <Drawer.Screen name="Setting"
        component={Settings} initialParams={{ name: user }}
        options={{ drawerIcon: (focus) => (
          <Ionicons name="build-outline" size={30} color={focus.focused ? '#118ab2' : 'black'} />
        ),drawerActiveBackgroundColor: '#e4c1f9', drawerLabelStyle: { fontSize: 20, letterSpacing: 2, color: '#000000' },drawerItemStyle:{marginBottom:10,padding:5},headerShown : true }} />
      <Drawer.Screen name="About"
        component={AboutUs} initialParams={{ name: user }}
        options={{ drawerIcon: (focus) => (
          <Ionicons name="ellipsis-vertical-circle-outline" size={30} color={focus.focused ? '#118ab2' : 'black'} />
        ),drawerActiveBackgroundColor: '#e4c1f9', drawerLabelStyle: { fontSize: 20, letterSpacing: 2, color: '#000000' },drawerItemStyle:{marginBottom:10,padding:5},headerShown : true }} />
   
    </Drawer.Navigator>
  );
};

export default DrawerNavigations;
