import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationAction } from '@react-navigation/native'
import LoadingComponent from '../Components/LoadingComponent';
const backgroundImage = require('../assets/crystal.jpeg')
const random = require('../assets/random.jpeg')




const CustomDrawer = (props: any) => {

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const [storedImage, setStoredimage] = useState(false);
  const [photo, setPhoto] = useState(random);

  const [showloading, setShowloading] = useState(false);
  const [message, setMessage] = useState('')



  const loading = () => {
    setShowloading(true);
  }

  const unloading = () => {
    setShowloading(false);
  }



  const getImage = () => {
    AsyncStorage.getItem('userdata')
      .then((storedData) => {
        if (storedData) {
          try {
            const data = JSON.parse(storedData);
            const image = data.image;
            if (image) {
              setPhoto(image);
              setStoredimage(true);
            }
          }
          catch (e) {
            console.log('Error while getting photo : ', e);
          }
        }
      })
  }
  useEffect(() => {
    getImage();
  }, []);

  async function handlelogout() {
    try {

      await AsyncStorage.removeItem('userdata');
      // setTimeout(()=>{
      //   navigation.navigate('');
      // },2000)

      setMessage("Logging out")
      loading();
      setTimeout(()=>{
        setShowloading(false);
      },1000)

      setTimeout(()=>{
        props.navigation.navigate('Login');
      },1000)


    }
    catch (e) {
      console.error('Error during logout : ', e)
    }
  }

  async function getUser() {
    try {
      const data = await AsyncStorage.getItem('userdata');
      const jsonData = await JSON.parse(data);
      setUser(jsonData.name)
      setEmail(jsonData.email)
    }
    catch (e) {
      console.error("Error while getting name : ", e);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <View style={styles.container}>
       {showloading && <LoadingComponent visible={showloading} onClose={unloading} message={message} />}
      <DrawerContentScrollView {...props}
        contentContainerStyle={styles.drawerScrollContainer}>

        <View style={styles.bgcimage}>
          <View style={styles.details}>
            <Image source={storedImage ? { uri: photo } : random}
              style={{
                width: 100, height: 100,
                borderRadius: 50,
                marginTop: 0, borderWidth: 2, borderColor: '#fff'
              }}></Image>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 5, color: "black" }}>{user}</Text>
          </View>
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: -70, marginLeft: 55, color: "#5a189a" }}>{email}</Text>
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
    backgroundColor: '#ccd5ae',
    width: 120,
    padding: 5,
    borderRadius: 10,
    marginLeft: 0

  },
  ruler: {
    width: '100%',
    height: 2,
    backgroundColor: '#000',
    marginTop: 450,
    marginBottom: 10,
  },
  text: {
    fontSize: 22,
    letterSpacing: 2,
    color: '#118ab2',
    fontWeight: 'bold',
    textAlign: 'center'
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
    width: '100%',
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