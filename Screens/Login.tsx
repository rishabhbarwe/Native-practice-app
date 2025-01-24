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
    Modal,
    Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Mainroute';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from './CustomAlert';
import LoadingComponent from '../Components/LoadingComponent';

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

const random = require('../assets/random.jpeg')

const Login: React.FC<LoginType> = ({ navigation, route }) => {
    //const { username, password, name } = route.params;

    //console.log(`\nUsername : ${username} \nPassword : ${password} \nName : ${name}`)

    const [loginusername, setUsername] = useState('');
    const [loginpassword, setPassword] = useState('');
    const [modalVisible, setmodalVisible] = useState(false);
    const [message, setMessage] = useState("");


    const [showloading, setShowloading] = useState(false);




    const loading = () => {
        setShowloading(true);
    }

    const unloading = () => {
        setShowloading(false);
    }


    const showAlert = () => {
        setmodalVisible(!modalVisible)
    }

    const closeAlert = () => {
        setmodalVisible(!modalVisible)
    }

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



                            setMessage("")
                            loading();
                            setTimeout(() => {
                                setShowloading(false);
                            }, 1000)

                            setTimeout(() => {
                                navigation.navigate('Drawer', { name: storedUsername });
                            }, 1000)

                            setTimeout(() => {
                                setUsername('');
                                setPassword('');
                            }, 1000)


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

    function handleForgetPass() {
        navigation.navigate("Forget")
    }
    return (
        <View style={styles.body}>
            <CustomAlert visible={modalVisible} message={message} onClose={closeAlert} />
            {showloading && <LoadingComponent visible={showloading} onClose={unloading} message={message} />}
            <ImageBackground source={image} resizeMode="cover" style={{ height: 780 }}>
                <Text>
                    {/* Hello {route.params.name} your password is {route.params.password}  */}
                </Text>
                <View style={styles.upper}>
                    <Text style={styles.header}>Login</Text>
                    <Text style={styles.subheader}>Please login to continue...</Text>
                </View>
                <Image source={storedImage ? { uri: photo } : random}
                    style={{
                        width: 100, height: 100,
                        borderRadius: 50, alignSelf: 'center',
                        marginTop: 10, borderWidth: 4, borderColor: '#999'
                    }}></Image>
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
        marginTop: 10,
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
        letterSpacing: 1,
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
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    forgetpass: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#780000',
        textAlign: 'center',
        marginLeft: 15,
        marginTop: 20,
        textDecorationLine: 'underline'
    }
});
export default Login;
