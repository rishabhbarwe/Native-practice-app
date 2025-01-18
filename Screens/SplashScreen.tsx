import { View, Text, Image, StyleSheet } from 'react-native';
import React,{useEffect} from 'react';
import { RootStackParamList } from './Mainroute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const image = require('../assets/instagram.png');


type SplashScreenType = NativeStackScreenProps<RootStackParamList, "Splash">

const SplashScreen:React.FC<SplashScreenType> = ({navigation}) => {
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate("Register")
    },1000)
  },[]);
  return (
    <View style={{flex : 1,alignItems: 'center',justifyContent: 'center',backgroundColor:"#a2d2ff"}}> 
         <Image source = {image} style={styles.image}></Image>
   </View>
  )
};

const styles = StyleSheet.create({
    image : {
        width : 100,
        height : 100
    }
})

export default SplashScreen