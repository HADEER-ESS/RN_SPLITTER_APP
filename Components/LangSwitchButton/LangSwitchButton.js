import React, {useContext, useState} from 'react';
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
  //const {changeLang , setChangeLang} = useContext(AppContext)
  const [changeLang, setChangeLang] = useState(true);
  const handleLanguageChange = async lang => {
    if (!lang) {
      i18n.changeLanguage('en');
      try {
        await AsyncStorage.setItem('language', 'en');
      } catch (err) {
        console.log('error in setting language in storage');
      }
      console.log('change language ', changeLang); //true
    } else {
      i18n.changeLanguage('ar');
      try {
        await AsyncStorage.setItem('language', 'en');
      } catch (err) {
        console.log('error in setting language in storage');
      }
      console.log('change language ', changeLang); //false
    }
  };
  return (
    <View style={{alignItems: 'flex-end'}}>
      <Switch
        activeText="En"
        activeTextStyle={{fontSize: 17, fontWeight: '700', paddingStart: 9}}
        inActiveText="ض"
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
        circleSize={30}
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
