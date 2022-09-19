import {StyleSheet} from 'react-native';
import COLORS from '../../constants';

export default styles = StyleSheet.create({
  pageStyle: {
    backgroundColor: COLORS.BackGroundColor,
  },
  LogoStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  MainHomeStyle: {
    backgroundColor: COLORS.WhiteColor,
    paddingHorizontal: 40,
    borderTopLeftRadius: 23,
    borderTopRightRadius: 23,
    paddingVertical:30
  },
  TextStyle: {
    color: COLORS.TextColor,
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 1,
    fontWeight: '700',
    paddingVertical: 13,
  },
});
