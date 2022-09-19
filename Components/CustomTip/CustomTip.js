import React, { useContext } from 'react';
import {TextInput, View } from 'react-native';
import COLORS  , {windowWidth}from '../../constants';
import { AppContext } from '../../Redux/Provider';


export default function CustomTip({disable}) {
  const { setTip , tip  , bill , people , countTipsFun} = useContext(AppContext)
  const renderResult = () => {
    if (bill !== 0 && people !== 0 && tip !== 0) {
      countTipsFun();
    }
    console.log("tip..... " , tip)
  }
  return (
      <View>
        {
        disable !== null ?
        <TextInput
        placeholder='Custom'
        value={''}
        editable={false}
        selectTextOnFocus={false}
        placeholderTextColor={COLORS.TextColor}
        style={{width:windowWidth/2.7, height:51, backgroundColor:COLORS.TextInputColor , fontSize:20 , fontWeight:"500" , paddingLeft:13 , borderRadius:9}}
        keyboardType="numeric"
      />:
      <TextInput
      onChangeText={(num)=>setTip(num)}
      onBlur={()=> renderResult()}
      placeholder='Custom'
      value={tip}
      placeholderTextColor={COLORS.TextColor}
      style={{width:windowWidth/2.7, height:51, backgroundColor:COLORS.TextInputColor , fontSize:20 , fontWeight:"500" , paddingLeft:13 , borderRadius:9}}
      keyboardType="numeric"
    />
      }
      </View>
  );
}