import { useState } from "react";
import React from "react";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "./Mainroute";
import { useDispatch } from "react-redux";
import storeTokenForSignUp from "../Components/Store/AsyncStorage";
import CustomAlert from "./CustomAlert";
import LoadingComponent from "../Components/LoadingComponent";
import { Alert, ScrollView, SafeAreaView, View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native"
import CameraPermissions from '../Components/Permissions';

const image = { uri: 'https://marketplace.canva.com/EAGIenJ__Xk/1/0/1131w/canva-brown-watercolor-floral-aesthetic-background-document-a4-svsYZ2xRFIs.jpg' }

const hide = require('../assets/hide.png');

const show = require('../assets/view.png');

const photo = require('../assets/image.png');

const random = require('../assets/random.jpeg')



type signupType = NativeStackScreenProps<RootStackParamList, 'Register'>;
const SignUp: React.FC<signupType> = ({ navigation }) => {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [check, checkPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showloading, setShowloading] = useState(false);
  const [message, setMessage] = useState('')


  const dispatch = useDispatch();


  const [alertVisible, setalertVisible] = useState(false);




  const showAlert = () => {
    setalertVisible(true);
  }

  const hideAlert = () => {
    setalertVisible(false);
  }

  const loading = () => {
    setShowloading(true);
  }

  const unloading = () => {
    setShowloading(false);
  }

  function handlePass() {

    if ((password.length > 6) && (password.includes('@'))) {
      checkPass("Strong password");

    }
    else if (password.length < 6) {
      checkPass("Weak password");
      
    } else {
      checkPass("Medium password")
    }
  }


  const [profileuri, setProfileuri] = useState("");

  async function handleImage() {
    const uri = await CameraPermissions();
    if (uri) {
      setProfileuri(uri);
      console.log('Image URI:', uri);
      setMessage("Profile image uploaded...")
      showAlert();
    } else {
      console.log('No image selected.');
    }

  }




  function handleSubmit() {

    if (!name.trim()) {
      //Alert.alert("Name is required...")
      setMessage("Name is required...")
      showAlert();
    }
    else if (!username.trim()) {
      //Alert.alert("Username is required...")
      setMessage("Username is required...")
      showAlert()
    }
    else if (!password.trim()) {
      //Alert.alert("Password is required...")
      setMessage("Password is required...")
      showAlert()
    }
    else if (!email.trim()) {
      //Alert.alert("Email is required...")
      setMessage("Email is required...")
      showAlert()
    }
    else if(!profileuri){
      setMessage("Profile image is required...")
      showAlert()
    }
    else {
      // Alert.alert(`${name} your data is submitted successfully.`)




      const formData = {
        name: name,
        username: username,
        password: password,
        email: email,
        image: profileuri,
      }

      console.log("Formdata : ", formData);



      storeTokenForSignUp(formData, dispatch);


      // setMessage("Registration done successfully...")
      // showAlert()
      // setTimeout(()=>{
      //   hideAlert()
      // },1500)
      setMessage("Registration done successfully...")
      loading();
      
      setTimeout(()=>{
        setShowloading(false);
      },1000)

      setTimeout(() => {
        navigation.navigate("Login", {
          username: username,
          password: password,
          name: name,
        });
      }, 1000)

      setTimeout(() => {
        setName('')
        setUsername('')
        setPassword('')
        setEmail('')
        checkPass('')
      }, 1000)

    }

    // console.log("Name : ", name)
    // console.log("Username : ", username)
    // console.log("Password : ", password)
    // console.log("Email : ", email)

  }

  function handlepassImage() {
    setShowPassword(!showPassword)

  }
  function handleLogin() {
    navigation.navigate("Login", { username, password, name })
  }
  return (
    <>
      {showloading && <LoadingComponent visible={showloading} onClose={unloading} message={message} />}
      <ScrollView>
        <View style={styles.body}>
          <CustomAlert visible={alertVisible} message={message} onClose={hideAlert} />
          <ImageBackground source={image} style={styles.background} resizeMode="cover" >



            <View style={styles.upper}>
              <Text style={styles.header}>Register Page</Text>

              <Text style={styles.subheader}>Please register to continue...</Text>
            </View>
            <View style={{

              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              
              width : '100%',
             

              
            }}>
              

              <TouchableOpacity onPress={() => handleImage()}>
                <Image source={photo} style={{ width: 60, height: 60, 
                  alignSelf: 'center', tintColor: '#588157',
                  borderWidth : 4,
                  borderColor : '#888999',
                  borderRadius : 20,
                  backgroundColor : '#fff'
                   }}></Image>

              </TouchableOpacity>
              <Text style={{
                fontSize: 17,
                fontWeight: '700',
                marginBottom: 5,
                color: "#003049",
                marginLeft: 0
              }}>Upload profile</Text>

            </View>

            <View style={styles.middle}>
              <Text style={styles.text}>Full Name</Text>

              <TouchableWithoutFeedback >
                <TextInput

                  value={name}
                  style={styles.input}
                  placeholder="enter full name"
                  onChangeText={setName}>
                </TextInput>
              </TouchableWithoutFeedback>


              <Text style={styles.text}>Username</Text>

              <TouchableWithoutFeedback>
                <TextInput

                  value={username}
                  style={styles.input}
                  placeholder="enter username"
                  onChangeText={setUsername}>
                </TextInput>
              </TouchableWithoutFeedback>


              <Text style={styles.text}>Password</Text>

              <TouchableWithoutFeedback>
                <TextInput
                  keyboardType="default"
                  secureTextEntry={!showPassword}
                  value={password}
                  style={styles.input}
                  placeholder="enter password"
                  onChangeText={(text) => {
                    setPassword(text);
                    handlePass();
                  }}>
                </TextInput>
              </TouchableWithoutFeedback>

              {/* <Text style={styles.under}>Password : {password}</Text> */}

              <Text style={[styles.check,
              check === "Strong password" && styles.strong,
              check === "Weak password" && styles.weak,
              check === "Medium password" && styles.medium]}>

                {check}</Text>

              <Text style={[styles.text, { marginLeft: -230 }]}>Email</Text>


              <TouchableWithoutFeedback>
                <TextInput

                  value={email}
                  style={styles.input}
                  placeholder="enter email"
                  onChangeText={setEmail}>
                </TextInput>
              </TouchableWithoutFeedback>

              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.button}>Submit</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
              <Text style={styles.subheader}>Already have an account?
                <TouchableWithoutFeedback onPress={handleLogin}>
                  <Text style={styles.login}> Login</Text>
                </TouchableWithoutFeedback></Text>
            </View>

            <TouchableOpacity onPress={handlepassImage}>
              <Image source={showPassword ? show : hide} style={styles.image} ></Image>
            </TouchableOpacity>

          </ImageBackground>
        </View>
      </ScrollView>
    </>

  )
}

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#f8f9fa',
    //paddingBottom: 20,
  },

  upper: {
    marginBottom: 10,
    marginTop: 40,
    alignItems: 'center'
  },

  under: {
    fontWeight: '800',
    fontSize: 16,
    position: 'absolute',
    top: 320,
    left: 50

  },

  check: {
    fontSize: 16,
    fontWeight: '800',
    position: 'absolute',
    top: 310,
    left: 210,

  },

  middle: {
    marginBottom: 10,
    marginTop: 5,
    alignItems: 'center'

  },

  bottom: {
    alignItems: 'center',
    marginTop: 10,

  },

  header: {
    fontSize: 28,
    color: "#003049",
    fontWeight: '700',
    letterSpacing: 0.5,
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
    color: '#333',
    width: 300,
    borderBottomWidth: 4,
    borderRadius: 10,
    borderColor: "#003049",
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 25,
    paddingLeft: 10,


  },

  background: {
    height: 780

  },
  button: {
    fontSize: 22,
    backgroundColor: '#003049',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    color: 'white',
    fontWeight: '500'
  },
  image: {
    width: 22,
    height: 22,
    position: 'absolute',
    left: 315,
    top: -265,

  },
  login: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    color: "#003049",
    fontWeight: 'bold'
  },

  strong: {
    color: 'green'
  },

  weak: {
    color: 'red'
  },

  medium: {
    color: 'orange'
  }

})
export default SignUp
