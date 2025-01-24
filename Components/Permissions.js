import { View, Text } from 'react-native'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'
import React, { useEffect, useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';

const openGallery = () => {


  return new Promise((resolve,reject)=>{
    launchImageLibrary({
      mediaType: 'photo',
    }, (response) => {
      if (response.didCancel) {
        reject("User cancelled image picker.");
      } else if (response.errorCode) {
        reject('Error while picking image : ', response.errorMessage);
      } else {
       //console.log('Image selected : ', response.assets[0].uri);
        resolve(response.assets[0].uri);
      }
    });
  })
}

const CameraPermissions = async () => {
  try {
    const permission = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
    console.log(permission);

    if (permission == RESULTS.GRANTED) {
      console.log('Permission is already granted.');
     
      return await openGallery();

    } else {

      const granted = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
      switch (granted) {
        case RESULTS.UNAVAILABLE:
          console.log('This feature is not available on this device.');
          break;
        case RESULTS.BLOCKED:
          console.log('Permission blocked.');
          break;
        case RESULTS.GRANTED:
          console.log('Permission granted.');
          break;
        case RESULTS.DENIED:
          console.log('Permission denied.');
          break;

      }
      if (granted !== RESULTS.GRANTED) {
        console.log("Permission denied to pick images from the gallery.");
        return;
      }
      return await openGallery();
    }
  } catch (e) {
    console.log("Error while opening gallery : ", e);
  }







}


export default CameraPermissions