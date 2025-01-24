import { View, Text, Image, FlatList, StyleSheet, ActivityIndicator,TouchableWithoutFeedback } from 'react-native';
import React, { useEffect } from 'react';
import getData from '../Components/API/RandomApi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../Components/Store/store';

const profilePic = require('../assets/profile.png');



const Posts = ({navigation} : any) => {
  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);




  const { data, loading, error } = useSelector((state) => state.random);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // Check if data and data.urls are available
  //const imageUrl = data?.urls?.regular;


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
      // <View style={styles.loadingContainer}>
      //   <Text style={styles.loadingText}>Loading...</Text>
      //   <ActivityIndicator size='large' color="#000000" />
      // </View>
    );
  }

  return (
    <>
    <View style={styles.navigationBar}>
                <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                    <Image source={profilePic} style={styles.profile}></Image>
                </TouchableWithoutFeedback>
                <Text style={styles.barText}>Home Screen</Text>
            </View>
    <View style={styles.container}>
      


      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item?.urls?.regular }} style={styles.images}></Image>

          </View>
        )}
        horizontal={false}
        //numColumns={3}

        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContainer}
        showsHorizontalScrollIndicator={false}

      ></FlatList>
    </View>

    </>
  );

};

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: 0, // Space between items
    // borderRadius: 12, // Rounded corners for items
    // overflow: 'hidden', // Make sure the images respect the rounded corners
    // backgroundColor: '#fff', // White background behind each item
    shadowColor: '#555', // Adding shadow to images
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 0

  },
  flatListContainer: {
    paddingHorizontal: 0,
  },
  images: {
    width: 350,
    height: 500,
    borderWidth: 8,
    borderColor: '#fff',
    borderRadius: 10,

    margin: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 50,
    elevation: 10

  },

  container: {
    marginTop: 0,
    backgroundColor: '#c8b6ff',
    padding: 10,

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
  image: {
    margin: 20,
    alignItems: 'center',
    width: 350,
    height: 250,


},

profile: {
    width: 40,
    height: 40,
    marginRight: 10,

},
barText: {
    color: '#c8b6ff',
    fontSize: 22,
    marginLeft: 5,
    fontWeight : 'bold'
},
navigationBar: {
    display: 'flex',
    flexDirection: 'row',
    width : '100%',
    height: 70,
    padding: 15,
    
    paddingTop: 15,
    backgroundColor : '#000000',
    borderBottomWidth : 2,
    borderBottomColor : '#ffffff'
},

})

export default Posts;
