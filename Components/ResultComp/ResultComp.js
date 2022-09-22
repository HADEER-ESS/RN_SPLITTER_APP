import React, {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity, View} from 'react-native';
import COLORS from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../../i18next.js';
import {AppContext} from '../../Redux/Provider';

export default function ResultComp() {
  const {result, totalTip, resetResultFun} = useContext(AppContext);
  const {t , i18n} = useTranslation();
  useEffect(()=>{
      const changeLanguage =async () => {
        const Lang =await AsyncStorage.getItem("language")
      i18n.changeLanguage(Lang)
      console.log("i18n " , i18n.language)
      }
      changeLanguage()
  },[])
  return (
    <View
      style={{
        backgroundColor: COLORS.PrimaryColor,
        padding: 25,
        borderRadius: 9,
      }}>
      {i18n.language === "ar" ? (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent : "flex-end",
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 19, lineHeight: 21, color: COLORS.TextColor , paddingHorizontal:9}}>
              / {t('person')}
            </Text>
            <Text
              style={{
                fontSize: 24,
                lineHeight: 29,
                letterSpacing: 2,
                color: COLORS.WhiteColor,
              }}>
              {t('tipAmount')}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 25,
              color: COLORS.SecondtryColor,
              textAlign:"right",
              fontWeight: 'bold',
            }}>
            $ {isNaN(result) ? 0 : result}
          </Text>
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent : "flex-start",
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 24,
                lineHeight: 29,
                letterSpacing: 2,
                color: COLORS.WhiteColor,
              }}>
              {t('tipAmount')}
            </Text>
            <Text
              style={{fontSize: 19, lineHeight: 24, color: COLORS.TextColor , paddingHorizontal:7}}>
              / {t('person')}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 25,
              color: COLORS.SecondtryColor,
              textAlign:"right",
              fontWeight: 'bold',
            }}>
            $ {isNaN(result) ? 0 : result}
          </Text>
        </View>
      )}
      <Text
        style={{
          fontSize: 24,
          lineHeight: 29,
          letterSpacing: 2,
          color: COLORS.WhiteColor,
          paddingTop: 19,
        }}>
        {t('totalTip')}
      </Text>
      <Text
        style={{
          fontSize: 25,
          color: COLORS.SecondtryColor,
          fontWeight: 'bold',
          textAlign: 'right',
        }}>
        $ {isNaN(totalTip) ? 0 : totalTip}
      </Text>
      <TouchableOpacity
        onPress={() => resetResultFun()}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 50,
          backgroundColor: COLORS.SecondtryColor,
          borderRadius: 7,
          marginTop: 18,
        }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: 'bold',
            color: COLORS.PrimaryColor,
            letterSpacing: 3,
            lineHeight: 26,
          }}>
          {t('reset')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

/*

*/