import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomAlert from './CustomAlert';
import generateOTP from '../Components/generateOTP';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
const back = require('../assets/left-arrow.png')
import { RootStackParamList } from './Mainroute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Login from './Login';
import TabBarNavigation from '../TabBarScreens/TabBarNavigation';
import { Screen } from 'react-native-screens';


type ForgetPasswordScreenType = NativeStackScreenProps<RootStackParamList, 'Otplogin'>
const LoginwithOTP: React.FC<ForgetPasswordScreenType> = ({ navigation }) => {




    const [userotp, setUserotp] = useState('')
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [otp, setOtp] = useState()

    const showAlert = () => {
        setVisible(true)
    }

    const hideAlert = () => {
        setVisible(false)
    }


    const getOtp = async () => {
        try {
            const storedOtp = await AsyncStorage.getItem('otp');
            //console.log("otp : ",storedOtp);
            setOtp(storedOtp);
        } catch (e) {
            console.error('Error retrieving OTP', e);
        }
    }
    getOtp()
    


    function handleSubmit() {
        if (!userotp.trim()) {
            setMessage('otp should not be empty.')
            showAlert();
        }
        else if (userotp !== otp) {
            setMessage('Invalid otp.')
            showAlert();
        } else {
            setMessage('logging...')
            showAlert();

            setTimeout(() => {
                hideAlert();
            }, 1500)

            setTimeout(() => {
                navigation.navigate('Drawer',{name : 'hello'});


            }, 2000)
        }
    }
    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={back} style={styles.image}></Image>
            </TouchableOpacity>

            <CustomAlert visible={visible} message={message} onClose={hideAlert} />
            <View style={styles.box}>
                <Text style={styles.text}>Enter OTP:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        setUserotp(text);
                    }}
                ></TextInput>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#c8b6ff',
        flex: 1,
        alignItems: 'center'
    },
    box: {
        width: 380,
        alignItems: 'center',
        padding: 50,
        backgroundColor: 'rgba(0,0,0,0.2)',
        marginVertical: 10,
        borderRadius: 20

    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
        color: '#7209b7',
        marginLeft: -180
    },
    input: {
        backgroundColor: '#f7ede2',
        color: '#2a2a2a',
        width: 300,
        borderBottomWidth: 4,
        borderRadius: 10,
        borderColor: '#003049',
        marginBottom: 25,
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    button: {
        fontSize: 22,
        backgroundColor: '#7209b7',
        paddingHorizontal: 21,
        paddingVertical: 8,
        borderRadius: 8,
        color: 'white',
        fontWeight: '500',


    },
    image: {
        width: 45,
        height: 45,
        marginTop: 10,
        marginLeft: -180,



    },
    redirect: {
        marginTop: 40,
        marginLeft: 60,


    }
    // ruler : {
    //     width: '100%',
    //     height: 2,
    //     backgroundColor: '#000',
    //     marginTop : 10

    // }
})
export default LoginwithOTP