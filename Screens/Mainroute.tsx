import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Header } from "react-native/Libraries/NewAppScreen";
import { Text, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import SplashScreen from "./SplashScreen";
import DrawerNavigations from "../DrawerScreens/DrawerNavigations";
import ForgetPasswordScreen from "./ForgetPasswordScreen";
import LoginwithOTP from "./LoginwithOTP";
import HomeScreen from "./HomeScreen";


const Stack = createNativeStackNavigator<RootStackParamList>()


const profilePic = require('./assets/profile.png')



export type RootStackParamList = {
    "Splash":undefined;
    "Register": undefined; // No parameters
    "Login": { username: string; password: string; name: string }; // Parameters expected
    "Drawer" : {name : string};
    "Forget" : any;
    "Otplogin" : any;
    'Home' : any
  
};
const Mainroute: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen}></Stack.Screen>
                <Stack.Screen name="Register" component={SignUp} />
                <Stack.Screen name="Login" component={Login}></Stack.Screen>
                <Stack.Screen name="Forget" component={ForgetPasswordScreen}></Stack.Screen>
                <Stack.Screen name="Otplogin" component={LoginwithOTP}></Stack.Screen>
               <Stack.Screen name="Drawer" component={DrawerNavigations} />
               <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
               
            </Stack.Navigator>
        </NavigationContainer>

    );
};


export default Mainroute