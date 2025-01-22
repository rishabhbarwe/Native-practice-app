import {
    View,
    Text,
    Touchable,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    ImageBackground,
    Alert,
    Modal
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Mainroute';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from './CustomAlert';

type LoginType = NativeStackScreenProps<RootStackParamList, 'Login'>;

// const authenticateUser = async()=>{
//       const storedData = await AsyncStorage.getItem('userdata');

//       //console.log(storedData)
//       if(storedData === null){
//         return false;
//       }else{
//         return storedData;
//       }

// }

const image = {
    uri: 'https://marketplace.canva.com/EAGIenJ__Xk/1/0/1131w/canva-brown-watercolor-floral-aesthetic-background-document-a4-svsYZ2xRFIs.jpg',
};


const Login: React.FC<LoginType> = ({ navigation, route }) => {
    //const { username, password, name } = route.params;

    //console.log(`\nUsername : ${username} \nPassword : ${password} \nName : ${name}`)

    const [loginusername, setUsername] = useState('');
    const [loginpassword, setPassword] = useState('');
    const [modalVisible, setmodalVisible] = useState(false);
    const [message, setMessage] = useState("")

    const showAlert = ()=>{
        setmodalVisible(!modalVisible)
    }

    const closeAlert = ()=>{
        setmodalVisible(!modalVisible)
    }


    function handleLogin() {
        const loginData = {
            username: loginusername,
            password: loginpassword,
        };

        AsyncStorage.getItem('userdata')
            .then(storedData => {
                if (storedData) {
                    try {
                        const { username: storedUsername, password: storedPassword } =
                            JSON.parse(storedData);

                        if (
                            loginData.username === storedUsername &&
                            loginData.password === storedPassword
                        ) {
                            setUsername('');
                            setPassword('');
                            navigation.navigate('Drawer', { name: storedUsername });
                        } else if (loginData.username !== storedUsername) {
                            setMessage('Username is incorrect...');
                            showAlert();
                            setUsername('');
                        } else {
                            setMessage('Password is incorrect...')
                            showAlert();;
                            setPassword('');
                        }
                    } catch (error) {
                        Alert.alert(
                            'Error parsing stored data',
                            'The stored user data is corrupted.',
                        );
                    }
                } else {
                    setMessage('No user data found. Please sign up first.');
                    showAlert();
                }
            })
            .catch(error => {
                Alert.alert('Error retrieving data', error.message);
            });
    }
    function handleRegister() {
        navigation.navigate('Register');
    }

    function handleForgetPass(){
        navigation.navigate("Forget")
    }
    return (
        <View style={styles.body}>
            <CustomAlert visible={modalVisible} message={message} onClose={closeAlert} />
            <ImageBackground source={image} resizeMode="cover" style={{ height: 780 }}>
                <Text>
                    {/* Hello {route.params.name} your password is {route.params.password}  */}
                </Text>
                <View style={styles.upper}>
                    <Text style={styles.header}>Login</Text>
                    <Text style={styles.subheader}>Please login to continue...</Text>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.text}>Username</Text>
                    <TextInput
                        value={loginusername}
                        style={styles.input}
                        placeholder="enter username"
                        onChangeText={setUsername}></TextInput>

                    <Text style={styles.text}>Password</Text>
                    <TextInput
                        value={loginpassword}
                        style={styles.input}
                        placeholder="enter password"
                        onChangeText={setPassword}></TextInput>

                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.button}>Login</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.bottom}>
                    <Text style={styles.subheader}>
                        Don't have an account?
                        <TouchableWithoutFeedback onPress={handleRegister}>
                            <Text style={styles.register}> Register</Text>
                        </TouchableWithoutFeedback>
                    </Text>
                </View>
                <TouchableOpacity onPress={handleForgetPass}>
                    <Text style={styles.forgetpass}>Forget username or password!</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress = {HandleDone}>
                <Text>Done</Text>
            </TouchableOpacity> */}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#9f86c0',
        height: 1000,
    },

    upper: {
        alignItems: 'center',
        marginTop: 50,
    },
    middle: {
        alignItems: 'center',
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
        
        color: '#003049',
        fontWeight: 'bold',
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
        color: '#003049',
        fontWeight: '700',
        letterSpacing : 1,
    },

    subheader: {
        fontSize: 18,
        color: '#2a2a2a',
        marginLeft: 20,
    },
    text: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 5,
        color: '#003049',
        marginLeft: -190,
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
        fontWeight : 'bold',
        letterSpacing : 0.5,
    },
    forgetpass : {
        fontSize : 18,
        fontWeight : 'bold',
        color : '#780000',
        textAlign : 'center',
        marginLeft : 15,
        marginTop : 20,
        textDecorationLine : 'underline'
    }
});
export default Login;
