import { View, Text, FlatList, StyleSheet, ActivityIndicator, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import TabBarNavigation from '../TabBarScreens/TabBarNavigation'
import ProfileCards from '../Components/ProfileCards';
import Header from '../Components/Header';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import GetgalleryData from '../Components/API/GalleryGet';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../Components/Store/store';
import Video from 'react-native-video';

const image = require('../assets/userProfile.png')
const userDetails = [
  {
    id: 1,
    name: "Shubham Dwivedi",
    email: "shubham.dwivedi@example.com",
    phone: "+91-9876543210",
    address: "123, Green Street, Lucknow, India",
    profilePicture: image
  },
  {
    id: 2,
    name: "Aarav Gupta",
    email: "aarav.gupta@example.com",
    phone: "+91-8765432109",
    address: "45, Rose Villa, Jaipur, India",
    profilePicture: image
  },
  {
    id: 3,
    name: "Meera Iyer",
    email: "meera.iyer@example.com",
    phone: "+91-7654321098",
    address: "78, Lotus Residency, Bangalore, India",
    profilePicture: image
  },
  {
    id: 4,
    name: "Kabir Sharma",
    email: "kabir.sharma@example.com",
    phone: "+91-6543210987",
    address: "12, Oakwood Lane, Mumbai, India",
    profilePicture: image
  },
  {
    id: 5,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    phone: "+91-5432109876",
    address: "56, Green Acres, Pune, India",
    profilePicture: image
  },
  {
    id: 6,
    name: "Rohan Malhotra",
    email: "rohan.malhotra@example.com",
    phone: "+91-4321098765",
    address: "89, Sunset Boulevard, Delhi, India",
    profilePicture: image
  },
  {
    id: 7,
    name: "Sneha Kulkarni",
    email: "sneha.kulkarni@example.com",
    phone: "+91-3210987654",
    address: "34, Maple Street, Chennai, India",
    profilePicture: image
  },
  {
    id: 8,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    phone: "+91-2109876543",
    address: "77, Elm Street, Hyderabad, India",
    profilePicture: image
  },
  {
    id: 9,
    name: "Ananya Rao",
    email: "ananya.rao@example.com",
    phone: "+91-1098765432",
    address: "65, Willow Road, Kolkata, India",
    profilePicture: image
  },
  {
    id: 10,
    name: "Ishaan Chatterjee",
    email: "ishaan.chatterjee@example.com",
    phone: "+91-0987654321",
    address: "90, Coral Drive, Ahmedabad, India",
    profilePicture: image
  }
];

type RenderGalleryDataType = {
  data: {
    extension_type: string;
    file_url: string[]; // Array of file URLs
    id: string;
    album_id: string;
    title: string;
  };
}


const Profile = () => {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetgalleryData())
  }, []);

  const { galleryData, loading, error } = useSelector((state) => state.gallery);

  // useEffect(() => {
  //   console.log(data)
  //  }, [data])
  console.log("Data in profile : ", galleryData);


  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size='large' color="#555" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  //console.log("Image url : ", galleryData.data[0].file_url);

  const RenderGalleryData: React.FC<RenderGalleryDataType> = ({ data }) => {
    

    
      return (
        <View>
          {data.file_url.map((item) => (
            <>
              {item.substring(item.lastIndexOf('.') + 1) === 'jpg' || item.substring(item.lastIndexOf('.') + 1) === 'png' ?
                <View style={styles.imageCard}>

                  <Image source={{ uri: item }} style={styles.image} />
                  <View style={styles.textBox}>
                    <Text style={styles.text}>{data.id}</Text>
                    <Text style={styles.text}>{data.album_id}</Text>
                    <Text style={styles.text}>{data.title}</Text>
                    {/* <Text style={styles.text}>{data.extension_type}</Text> */}
                    <Text style={styles.text}>{item.substring(item.lastIndexOf('.')+1)}</Text>
                  </View>
                </View> 
                
                :

                <View style={styles.imageCard}>

                  <Video
                    source={{ uri: item }}
                    controls={true}
                    resizeMode='contain'
                    style={styles.video} />
                    <View style={styles.textBox}>
                    <Text style={styles.text}>{data.id}</Text>
                    <Text style={styles.text}>{data.album_id}</Text>
                    <Text style={styles.text}>{data.title}</Text>
                    <Text style={styles.text}>{item.substring(item.lastIndexOf('.')+1)}</Text>
                    
                  </View>



                </View>

              }
            </>
          ))}

        </View>

      )

    


  }



  return (
    <View style={styles.screen}>
      <FlatList
        data={galleryData.data}
        renderItem={({ item }) => <RenderGalleryData data={item} />}
        keyExtractor={(item) => item.id.toString()}
       //numColumns={2} // Set numColumns to 2 to create two columns
        //columnWrapperStyle={styles.columns}
        
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    
    backgroundColor: '#c8b6ff',
    padding : 10,
    
  },
  imageCard: {
    backgroundColor: '#2489D1FF',
    marginTop: 20,
   
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: '#fff',
    elevation: 10,
    shadowOpacity: 0.5,
    alignItems: 'center',
    marginBottom: 10,
    width: "100%",
    height : 300
   
    
  },
  
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    
    
  },
  textBox: {
    flexDirection: 'row',
    marginTop : 5,
    justifyContent : 'space-around',
    width : "100%",
    
    
  },
  video: {
    width: "90%",
    height: "80%",
    margin: 10,
    borderRadius: 10,
    borderWidth : 2,
    borderColor : "#fff",
  },
  image: {
    borderWidth : 2,
    borderColor : "#fff",
    width: "90%", 
    height: "80%",
    marginTop : 10,
    borderRadius: 5,
  },
  loadingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c8b6ff',
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  columns : {
       justifyContent: 'space-evenly'
  }
  
});

export default Profile;