import React from "react"
import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, DrawerLayoutAndroid, FlatList, TouchableOpacity, TouchableWithoutFeedback, Button } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

const image1 = require('../assets/image5.jpeg')
const image2 = require('../assets/image3.jpeg')
const image3 = require('../assets/image2.jpeg')
const image4 = require('../assets/image4.jpeg')
const image5 = require('../assets/image1.jpeg')
const image6 = require('../assets/image6.jpeg')
const image7 = require('../assets/image7.jpeg')
const like = require('../assets/heart.png')
const dislike = require('../assets/like.png')
const comment = require('../assets/chat-bubble.png')
const random = require('../assets/random.jpeg')
const home = require('../assets/hut.png')
const search = require('../assets/search.png')
const add = require('../assets/add.png')
const addPost = require('../assets/video-call.png')
const instagram = require('../assets/instagram.png')


import { DrawerScreenProps } from "@react-navigation/drawer";


type DrawerParamList = {
    Home: { name: string };
};

type HomeScreenProps = DrawerScreenProps<DrawerParamList, "Home">;

const backgroundimage = { uri: 'https://marketplace.canva.com/EAGIenJ__Xk/1/0/1131w/canva-brown-watercolor-floral-aesthetic-background-document-a4-svsYZ2xRFIs.jpg' }

const dataList = [
    {
        id: 1,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image1
    },
    {
        id: 2,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image2
    },
    {
        id: 3,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image3
    },
    {
        id: 4,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image4
    },
    {
        id: 5,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image5
    },
    {
        id: 6,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image6
    },
    {
        id: 7,
        name: "abcd",
        thought: "abcdefghijklmnopqrstuvwxyz",
        photo: image7
    },

]
type cardProps = {
    data: typeof dataList[0];
}

export const drawerOpen = ({ navigation }: any) => {
    navigation.openDrawer();
}


const Card: React.FC<cardProps> = ({ data }) => {
    const [liked, setLiked] = useState(false);


    function handleLike() {
        if (liked) {
            setLiked(false)
        } else {
            setLiked(true)
        }
    }
    return (
        <View style={styles.card}>

            <Image source={data.photo} style={styles.pp}></Image>
            <Text style={styles.description}>{data.name}</Text>
            <Text style={styles.subdescription}>"{data.thought}"</Text>
            <Image source={data.photo} style={styles.image}></Image>


            <View style={styles.bottomBar}>
                <TouchableOpacity onPress={handleLike}>
                    <Image source={liked ? like : dislike} style={styles.like}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={comment} style={styles.comment}></Image>
                </TouchableOpacity>
            </View>

        </View>
    )
}



const HomeScreen: React.FC<HomeScreenProps> = ({ route, navigation }) => {

    const name = route.params.name;
    const newName = name.split(' ')[0];

    const [storedImage, setStoredimage] = useState(false);
    const [photo, setPhoto] = useState(random);
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


    return (

        <View style={styles.screen}>
            <View style={styles.navigationBar}>
                <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                <Image source={storedImage ? { uri: photo } : random}
                    style={{
                        width: 60, height: 60,
                        borderRadius: 50, alignSelf: 'center',
                        marginTop: 0, borderWidth : 2, borderColor : '#999'
                    }}></Image>
                </TouchableWithoutFeedback>
                <Text style={styles.barText}>Home Screen</Text>
            </View>





            <FlatList
                data={dataList}
                renderItem={({ item }) => <Card data={item} />}
                contentContainerStyle={styles.listContainer}
            />




        </View>

    )
}

const styles = StyleSheet.create({

    screen: {
        backgroundColor: '#000000'
    },
    card: {
        margin: 5,
        backgroundColor: "#c8b6ff",
        padding: 10,
        borderWidth: 4,
        borderRadius: 10,
        borderColor: 'transparent',
        marginTop: 20,
        marginBottom: 30,
        alignItems: 'center',
        shadowOffset: {
            height: 20,
            width: 10
        },
        shadowColor: '#cdb4db',
        elevation: 5,
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },
    pp: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderRadius: 50,
        borderColor: '#540b0e',
        marginLeft: -320,
    },
    image: {
        margin: 20,
        alignItems: 'center',
        width: 350,
        height: 250,


    },
    like: {
        width: 35,
        height: 35,
        marginLeft: 20,
    },
    comment: {
        width: 32,
        height: 32,
        marginLeft: 10,
    },
    description: {
        fontSize: 22,
        fontWeight: '700',
        color: '#000000',
        marginLeft: -190,
        marginTop: -55,
    },
    subdescription: {
        fontSize: 18,
        color: '#000000',
    },
    bottomBar: {
        marginLeft: -300,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start'

    },
    listContainer: {
        paddingBottom: 20,
    },
    profile: {
        width: 40,
        height: 40,
        marginRight: 10,

    },
    barText: {
        color: '#c8b6ff',
        fontSize: 22,
        marginLeft : 60,
        fontWeight: 'bold'
    },
    navigationBar: {
        display: 'flex',
        flexDirection: 'row',
        height: 80,
        padding: 10,
        alignItems : 'center',
        
        paddingTop: 15,
        backgroundColor: '#000000',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },





})


export default HomeScreen