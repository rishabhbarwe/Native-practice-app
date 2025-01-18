import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const backgroundImage = require('../assets/crystal.jpeg')
const profileImage = require('../assets/profile.png')
const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}
        contentContainerStyle={styles.drawerScrollContainer}>
       
          <View style={styles.bgcimage}>
          <View style={styles.details}>
            <Image source={profileImage} style={styles.image}></Image>
            <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10, color: "black" }}>abcd efg</Text>
            <Text></Text>
          </View>
          </View>


        
        <View style={styles.drawerItemListContainer}>
          <DrawerItemList {...props} />
        </View>

      </DrawerContentScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
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