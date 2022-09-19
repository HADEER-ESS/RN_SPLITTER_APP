import React, {useContext} from 'react';
import {TextInput, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS, {windowWidth} from '../../constants';
import {AppContext} from '../../Redux/Provider';

export default function InputComp({iconName}) {
  const {bill, people, tip, setBill, setPeople, countTipsFun} =
    useContext(AppContext);
  const renderResult = () => {
    if (bill !== 0 && people !== 0 && tip !== 0) {
      countTipsFun();
    }
  };

  return (
    <View
      style={{
        backgroundColor: COLORS.TextInputColor,
        borderRadius: 9,
        flexDirection: 'row',
        alignItems: 'center',
        height: 47,
        marginBottom: 25,
      }}>
      <FontAwesome
        name={iconName}
        size={20}
        color={COLORS.TextColor}
        style={{paddingLeft: 17}}
      />
      {iconName === 'dollar' ? (
        <TextInput
          onChangeText={num => setBill(num)}
          onBlur={()=> renderResult()}
          placeholder="0"
          placeholderTextColor={COLORS.TextColor}
          value={bill}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'right',
            fontSize: 25,
            width: windowWidth / 1.5,
            color: COLORS.PrimaryColor,
            fontWeight: '700',
          }}
          keyboardType="numeric"></TextInput>
      ) : (
        <TextInput
          onChangeText={num => setPeople(num)}
          onBlur={()=> renderResult()}
          placeholder="0"
          placeholderTextColor={COLORS.TextColor}
          value={people}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'right',
            fontSize: 25,
            width: windowWidth / 1.5,
            color: COLORS.PrimaryColor,
            fontWeight: '700',
          }}
          keyboardType="numeric"
        />
      )}
    </View>
  );
}
