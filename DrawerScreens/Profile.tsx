import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import TabBarNavigation from '../TabBarScreens/TabBarNavigation'
import ProfileCards from '../Components/ProfileCards';
import Header from '../Components/Header';



const image = require('../assets/userProfile.png')
const userDetails = [
  {
    id : 1,
    name: "Shubham Dwivedi",
    email: "shubham.dwivedi@example.com",
    phone: "+91-9876543210",
    address: "123, Green Street, Lucknow, India",
    profilePicture: image
  },
  {
    id : 2,
    name: "Aarav Gupta",
    email: "aarav.gupta@example.com",
    phone: "+91-8765432109",
    address: "45, Rose Villa, Jaipur, India",
    profilePicture: image
  },
  {
    id : 3,
    name: "Meera Iyer",
    email: "meera.iyer@example.com",
    phone: "+91-7654321098",
    address: "78, Lotus Residency, Bangalore, India",
    profilePicture: image
  },
  {
    id : 4,
    name: "Kabir Sharma",
    email: "kabir.sharma@example.com",
    phone: "+91-6543210987",
    address: "12, Oakwood Lane, Mumbai, India",
    profilePicture: image
  },
  {
    id : 5,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phone: "+91-5432109876",
    address: "56, Green Acres, Pune, India",
    profilePicture: image
  },
  {
    id : 6,
    name: "Rohan Malhotra",
    email: "rohan.malhotra@example.com",
    phone: "+91-4321098765",
    address: "89, Sunset Boulevard, Delhi, India",
    profilePicture: image
  },
  {
    id : 7,
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@example.com",
    phone: "+91-3210987654",
    address: "34, Maple Street, Chennai, India",
    profilePicture: image
  },
  {
    id : 8,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91-2109876543",
    address: "77, Elm Street, Hyderabad, India",
    profilePicture: image
  },
  {
    id : 9,
    name: "Ananya Rao",
    email: "ananya.rao@example.com",
    phone: "+91-1098765432",
    address: "65, Willow Road, Kolkata, India",
    profilePicture: image
  },
  {
    id : 10,
    name: "Ishaan Chatterjee",
    email: "ishaan.chatterjee@example.com",
    phone: "+91-0987654321",
    address: "90, Coral Drive, Ahmedabad, India",
    profilePicture: image
  }
];


const Profile = () => {
  return (
    <>
      <View style={styles.header}>
        <Header/>
      </View>
      <View style={styles.outer}>
        <FlatList
          data={userDetails}
          renderItem={({ item }) => <ProfileCards data={item}></ProfileCards>}
        />
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: '#c8b6ff'
  },
  header : {
    padding : 15,
    textAlign : 'center',
    backgroundColor : "#000000",
    borderBottomWidth : 2,
    borderBottomColor : '#FFFFFF'
  }
})

export default Profile