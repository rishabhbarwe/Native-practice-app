import { View, Text, Touchable, TouchableOpacity, StyleSheet, TextInput, TouchableWithoutFeedback, ImageBackground, Alert } from "react-native"
import React, { useState } from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./Mainroute";

// type LoginType = {
//     navigation : {
//             navigate : (screen: string, params?: any) => void;
//     };
//     route : {
//            params : {
//                 username : string,
//                 password : string,
//                 name : string
//            }     
//     };
// };

type LoginType = NativeStackScreenProps<RootStackParamList, 'Login'>;

const image = { uri: 'https://marketplace.canva.com/EAGIenJ__Xk/1/0/1131w/canva-brown-watercolor-floral-aesthetic-background-document-a4-svsYZ2xRFIs.jpg' }
const Login: React.FC<LoginType> = ({ navigation, route }) => {

    const { username, password, name } = route.params;

    //console.log(`\nUsername : ${username} \nPassword : ${password} \nName : ${name}`)

    const [loginusername, setUsername] = useState('');
    const [loginpassword, setPassword] = useState('');

    function handleLogin() {
        if ((loginusername != username)) {
            Alert.alert("Username is incorrect...")
            setUsername('')
        }
        else if ((loginpassword != password)) {
            Alert.alert("Password is incorrect...")
            setPassword('')
        }
        else {
            setUsername('')
            setPassword('')
            navigation.navigate("Drawer", { name })
        }
    }
    function handleRegister() {
        navigation.navigate("Register")
    }
    return (
        <View style={styles.body}>
            <ImageBackground source={image} resizeMode="cover" style={{ height: 780 }}>
                <Text>
                    {/* Hello {route.params.name} your password is {route.params.password}  */}
                </Text>
                <View style={styles.upper}>
                    <Text style={styles.header}>
                        Login
                    </Text>
                    <Text style={styles.subheader}>
                        Please login to continue...
                    </Text>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput
                        value={loginusername}
                        style={styles.input}
                        placeholder="enter username"
                        onChangeText={setUsername}>

                    </TextInput>

                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        value={loginpassword}
                        style={styles.input}
                        placeholder="enter password"
                        onChangeText={setPassword}>

                    </TextInput>


                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.bottom}>
                    <Text style={styles.subheader}>Don't have an account?
                        <TouchableWithoutFeedback onPress={handleRegister}>
                            <Text style={styles.register}> Register</Text>
                        </TouchableWithoutFeedback></Text>
                </View>



                {/* <TouchableOpacity onPress = {HandleDone}>
                <Text>Done</Text>
            </TouchableOpacity> */}
            </ImageBackground>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#9f86c0",
        height: 1000
    },

    upper: {
        alignItems: "center",
        marginTop: 50,

    },
    middle: {
        alignItems: "center",
        marginTop: 100,
        fontSize: 22,

    },
    bottom: {
        alignItems: 'center',
        marginTop: 30,

    },
    register: {
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: "#003049",
        fontWeight: '500'
    },
    button: {
        fontSize: 22,
        backgroundColor: '#003049',
        paddingHorizontal: 21,
        paddingVertical: 8,
        borderRadius: 8,
        color: 'white',
        fontWeight: '500',
        marginTop: 20,

    },
    header: {
        fontSize: 28,
        color: "#003049",
        fontWeight: '700'
    },

    subheader: {
        fontSize: 18,
        color: "#2a2a2a",
        marginLeft: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 5,
        color: "#003049",
        marginLeft: -190
    },
    input: {
        backgroundColor: "#f7ede2",
        color: '#2a2a2a',
        width: 300,
        borderBottomWidth: 4,
        borderRadius: 10,
        borderColor: "#003049",
        fontSize: 18,
        marginBottom: 25,
        paddingLeft: 10,
    }

})
export default Login
