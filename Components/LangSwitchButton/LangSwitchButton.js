import React, {useContext, useEffect, useState} from 'react';
import COLORS from '../../constants/index';
import '../../i18next.js';
import {Switch} from 'react-native-switch';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';

export default function LangSwitchButton() {
  //true means English language
  //false means Arabic language
  const {i18n} = useTranslation();
  const [changeLang, setChangeLang] = useState(true);
  useEffect(()=>{
    const knowLanguage = async() => {
      i18n.changeLanguage(await AsyncStorage.getItem('language'))
    console.log("i18n from switch button " , i18n.language)
    }
    knowLanguage()
  },[])
  const handleLanguageChange = async lang => {
    if (!lang) {
      try {
        await AsyncStorage.setItem('language', 'en');
        i18n.changeLanguage("en")
        console.log("i18n lang " , i18n.language)
      } catch (err) {
        console.log('error in setting language in storage... ' , err);
      }
      console.log('change language ',await AsyncStorage.getItem("langauge")); //true
    } else {
      try {
        await AsyncStorage.setItem('language', 'ar');
        i18n.changeLanguage("ar")
        console.log("i18n lang " , i18n.language)
      } catch (err) {
        console.log('error in setting language in storage... ' , err);
      }
      console.log('change language ',await AsyncStorage.getItem("language")); //false
    }
    //i18n.changeLanguage(AsyncStorage.getItem("language"));
  };
  return (
    <View style={{alignItems: 'flex-end' ,  marginVertical:5}}>
      <Switch
        activeText={i18n.language === "ar" ? "ض" : "en"}
        activeTextStyle={{fontSize: 17, fontWeight: '700', paddingStart: 9}}
        inActiveText={i18n.language === "ar" ? "ض" : "en"}
        inactiveTextStyle={{fontSize: 17, fontWeight: '700', paddingEnd: 9}}
        renderInsideCircle={() => (
          <Ionicons name="language" size={20} color="black" />
        )}
        disabled={false}
        changeValueImmediately={true}
        value={changeLang}
        onValueChange={() => {
          setChangeLang(!changeLang);
          handleLanguageChange(changeLang);
        }}
        circleSize={29}
        backgroundActive={COLORS.SecondtryColor}
        backgroundInactive={COLORS.SecondtryColor}
        switchLeftPx={12}
        switchRightPx={12}
        switchWidthMultiplier={1.8}
        switchBorderRadius={20}
      />
    </View>
  );
}
/*
{
        i18n.language === "ar" ?
        <Switch
        activeText={"ض"}
        activeTextStyle={{fontSize: 17, fontWeight: '700', paddingStart: 9}}
        inActiveText={"en"}
        inactiveTextStyle={{fontSize: 17, fontWeight: '700', paddingEnd: 9}}
        renderInsideCircle={() => (
          <Ionicons name="language" size={20} color="black" />
        )}
        disabled={false}
        changeValueImmediately={true}
        value={changeLang}
        onValueChange={() => {
          setChangeLang(!changeLang);
          handleLanguageChange(changeLang);
        }}
        circleSize={29}
        backgroundActive={COLORS.SecondtryColor}
        backgroundInactive={COLORS.SecondtryColor}
        switchLeftPx={12}
        switchRightPx={12}
        switchWidthMultiplier={1.8}
        switchBorderRadius={20}
      />:
      <Switch
        activeText={"en"}
        activeTextStyle={{fontSize: 17, fontWeight: '700', paddingStart: 9}}
        inActiveText={"ض"}
        inactiveTextStyle={{fontSize: 17, fontWeight: '700', paddingEnd: 9}}
        renderInsideCircle={() => (
          <Ionicons name="language" size={20} color="black" />
        )}
        disabled={false}
        changeValueImmediately={true}
        value={changeLang}
        onValueChange={() => {
          setChangeLang(!changeLang);
          handleLanguageChange(changeLang);
        }}
        circleSize={29}
        backgroundActive={COLORS.SecondtryColor}
        backgroundInactive={COLORS.SecondtryColor}
        switchLeftPx={12}
        switchRightPx={12}
        switchWidthMultiplier={1.8}
        switchBorderRadius={20}
      />
      }
*/