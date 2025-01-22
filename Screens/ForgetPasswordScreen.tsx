import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert,Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomAlert from './CustomAlert';
import generateOTP from '../Components/generateOTP';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
const back = require('../assets/left-arrow.png')
import { RootStackParamList } from './Mainroute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { string } from 'prop-types';

type ForgetPasswordScreenType = NativeStackScreenProps<RootStackParamList, 'Forget'>
const ForgetPasswordScreen:React.FC<ForgetPasswordScreenType> = ({navigation}) => {
    const otp = String(generateOTP());

    const [email, setEmail] = useState('')
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [toLogin, settoLogin] = useState(false);
    const [savedOTP, setSaved] = useState(false);
    const [getOTP, setGetSaved] = useState(false);
    const [asyncOtp, setasyncOtp] = useState(false);

    const showAlert = () => {
        setVisible(true)
    }

    const hideAlert = () => {
        setVisible(false)
    }

    const saveOTP = async (otp : any)=>{
          try{
            if(!savedOTP){
                console.log("OTP : ",otp)
                await AsyncStorage.setItem('otp',otp);
                setSaved(true)
                
                
            }
          }
          catch(e){
            console.error("Error while saving otp : ",e)
          }
    }
    
    useEffect(()=>{
        saveOTP(otp);
    },[otp])


    const getOtp = async () => {
        if(!getOTP){
            try {
                const storedOtp = await AsyncStorage.getItem('otp');
                setasyncOtp(storedOtp);
                setGetSaved(true);

            } catch (e) {
                console.error('Error retrieving OTP', e);
            }
        }
    }
    useEffect(()=>{
        getOtp();
    },[otp])
    
    function handleLogin(){
         navigation.navigate('Otplogin');
    }



    function handleSubmit() {
        if (!email.trim()) {
            setMessage('email should not be empty.')
            showAlert();
        } else {
            AsyncStorage.getItem('userdata')
                .then(storedata => {
                    if (storedata) {
                        try {
                            const data = JSON.parse(storedata)
                            if (data.email === email) {
                                setMessage(`${asyncOtp} is your OTP for login.`);
                                showAlert();
                                settoLogin(true)

                            }
                            else{
                                setMessage(`Not a valid email.`);
                                showAlert();
                            }
                        }catch(e){
                            Alert.alert('Error parsing stored data','The stored user data is corrupted.');
                        }
                }
                else{
                    setMessage("No user data found.");
                    showAlert()
                }
                })
                .catch((error)=>{
                    Alert.alert('Error retrieving data', error.message)
                })
        }
    }
    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <Image source={back} style={styles.image}></Image>
            </TouchableOpacity>
            
            <CustomAlert visible={visible} message={message} onClose={hideAlert} />
            <View style={styles.box}>
                <Text style={styles.text}>Enter registered email:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        setEmail(text);
                    }}
                ></TextInput>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={styles.button}>Submit</Text>
                </TouchableOpacity>
            </View>
            {toLogin && <TouchableOpacity onPress={handleLogin} style={styles.redirect}>
                <Text style={styles.text}>Click here to redirect to login!</Text>
            </TouchableOpacity> }
            
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
        marginLeft: -65
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
    image : {
      width : 45,
      height : 45,
      marginTop : 10,
      marginLeft : -180,
      
      
        
    },
    redirect : {
        marginTop : 40,
        marginLeft : 60,
        
        
    }
    // ruler : {
    //     width: '100%',
    //     height: 2,
    //     backgroundColor: '#000',
    //     marginTop : 10

    // }
})
export default ForgetPasswordScreen