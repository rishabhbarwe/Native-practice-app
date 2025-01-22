import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationAction } from '@react-navigation/native'
const backgroundImage = require('../assets/crystal.jpeg')
const profileImage = require('../assets/profile.png')
const CustomDrawer = (props : any) => {
  
  async function handlelogout(){
      try{
        
        await AsyncStorage.removeItem('userdata');
        // setTimeout(()=>{
        //   navigation.navigate('');
        // },2000)


        props.navigation.navigate('Login');
       

      }
      catch(e){
        console.error('Error during logout : ',e)
      }
  }

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}
        contentContainerStyle={styles.drawerScrollContainer}>

        <View style={styles.bgcimage}>
          <View style={styles.details}>
            <Image source={profileImage} style={styles.image}></Image>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10, color: "black" }}>abcd efg</Text>

          </View>
        </View>



        <View style={styles.drawerItemListContainer}>
          <DrawerItemList {...props} />
        </View>
        <View>
          <View style={styles.ruler} />
          <TouchableOpacity style={styles.button} onPress={handlelogout}>
            <Text style={styles.text}>LogOut</Text>
          </TouchableOpacity>
        </View>

      </DrawerContentScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
      backgroundColor : '#ccd5ae',
      width : 120,
      padding : 5,
      borderRadius : 10,
      marginLeft : 100
      
  },
  ruler: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginTop: 275,
    marginBottom : 8,
  }, 
  text: { 
    fontSize: 22,
     letterSpacing: 2, 
     color: '#118ab2',
     fontWeight : 'bold',
     textAlign : 'center'
    }, 
    
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: '#c8b6ff'
  },
  drawerScrollContainer: {
    padding: 0,
    margin: 0,

  },
  drawerItemListContainer: {

  },
  bgcimage: {
    padding: 70,

    marginBottom: 0,
  },
  image: {
    width: 50,
    height: 50,

  },
  details: {
    flexDirection: 'row',
    marginLeft: -55,
    marginTop: -50,

  }
})

export default CustomDrawer