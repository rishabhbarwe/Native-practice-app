import AsyncStorage from "@react-native-async-storage/async-storage";

import { setSignUpData } from "../Slices/AuthenticationSlice";

const random = require('../assets/random.jpeg')

const storeTokenForSignUp = async (userdata: { name: string; username: string; password: string; email: string; image : string }, dispatch: any) => {
    try {

        //console.log(userdata);

        dispatch(setSignUpData(userdata));

        
        await AsyncStorage.setItem('userdata', JSON.stringify(userdata));

        AsyncStorage.getItem('userdata')
          .then((storedData) => {
            console.log(storedData)
          })
            
        
    }
    catch (e) {
        console.error(e);
    }
}

export default storeTokenForSignUp