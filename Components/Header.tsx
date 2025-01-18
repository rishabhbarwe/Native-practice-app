import { View, Text } from 'react-native'
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addLike ,removeLike } from './Slices/Likeslice';

const Header = () => {
  const globalLikeCount = useSelector((state)=> state.like.globalLikeCount)
  // console.log(globalLikeCount)
  return (

    <View>
      <Text style={{fontSize : 22,fontWeight : 'bold',color:'#ffffff',textAlign : 'center'}}>likes : {globalLikeCount}</Text>
    </View>
  )
}

export default Header