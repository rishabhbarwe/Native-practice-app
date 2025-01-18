import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
const userlike = require('../assets/thumbLike.png')
const dislike = require('../assets/thumbDislike.png')
const add = require('../assets/add.png')
const right = require('../assets/correct.png')
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from './Slices/Likeslice';
import { addUser, deleteUser } from './Slices/Usersslice';

const ProfileCards = ({ data }) => {

    const dispatch = useDispatch()

    const [liked, setLike] = useState(false);
    const [added, setAdded] = useState(false);

    function handleLike() {

        if (!liked) {
            dispatch(addLike(null))
        }
        else {

            dispatch(removeLike(null))
        }
        setLike(!liked)
    }

      function handleAdd() {
        
        if (!added) {
            dispatch(addUser(data))
        }else {
            
            dispatch(deleteUser(data))
        }
        
        setAdded(!added)
    }



    
    return (

        <View style={styles.card}>

            <Image source={data.profilePicture} style={styles.pp}></Image>
            <View style={styles.outer}>
                <Text style={styles.text}>Name : {data.name}</Text>
                <Text style={styles.text}>Email : {data.email}</Text>
                <Text style={styles.text}>Phone : {data.phone}</Text>
                <Text style={styles.text}>Address : {data.address}</Text>
                <View style={styles.ruler} />
                <View style={styles.bottomImages}>
                    <TouchableOpacity onPress={handleLike}>
                        <Image source={liked ? userlike : dislike} style={styles.liked}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAdd}>
                        <Image source={added ? right : add} style={styles.liked}></Image>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        
        padding: 15,
        margin: 10,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: '#efebce',
        flexDirection: 'row',
        borderBottomWidth : 4,
        borderBottomColor : '#000000',
        shadowOffset : {width : 0,height : 4},
        shadowOpacity : 0.3,
        shadowColor : '#000',
        textShadowRadius : 50,

    },
    outer: {
        flex: 1,


    },
    text: {
        fontSize: 18,
       
        color: '#555',
        marginBottom : 1,

    },
    pp: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: '#555',
        borderRadius: 10,
        marginRight: 20
    },
    liked: {
        marginTop: 10,
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    bottomImages: {

        width: 'auto',
        flexDirection: 'row',
        marginLeft: -120,
        marginTop: -40,


    },
    ruler: {
        width: '100%',
        height: 2,
        backgroundColor: '#000',
        marginTop : 10
    }
})

export default ProfileCards