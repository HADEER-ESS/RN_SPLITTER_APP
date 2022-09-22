import React, {useContext, useEffect, useRef, useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLORS , {windowWidth} from '../../constants';
import { AppContext } from '../../Redux/Provider';
import CustomTip from '../CustomTip/CustomTip';

export default function ButtonCompGroup({percentages }) {
  const {tip , setTip , countTipsFun , people , bill , ClickedId , setClickedId} = useContext(AppContext)
  const changeButton = (percentage , id) => {   
    setClickedId(id) 
    const num = percentage.split('%');
    if (bill !== 0 && people !== 0 && tip !== 0) {
      setTip(num[0])
      countTipsFun()
    }
  };
  const handleActivate = () => {
    setTip(null)
    setClickedId(null)

  }
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
      {percentages.map((element, index) => {
        return (
          <TouchableOpacity
            key={index}
            onLongPress={()=>handleActivate()}
            onPressIn={()=>changeButton(element , index)}
            keyboard
            //onPress={() => changeButton(element , index)}
            style={index === ClickedId ? styles.activeButtonStyle : styles.ButtonStyle}>
            <Text
              style={{
                color: COLORS.WhiteColor,
                fontSize: 23,
                fontWeight: '700',
              }}>
              {element}
            </Text>
          </TouchableOpacity>
        );
      })}

        <CustomTip disable={ClickedId}/> 
    </View>
  );
}
const styles = StyleSheet.create({
  ButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth/2.7,
    height: 51,
    backgroundColor: COLORS.PrimaryColor,
    borderRadius: 9,
    marginBottom: 17,
  },
  activeButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth/2.7,
    height: 51,
    backgroundColor: COLORS.SecondtryColor,
    borderRadius: 9,
    marginBottom: 17,
  },
});
