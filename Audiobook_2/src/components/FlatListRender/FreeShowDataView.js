import React,{useMemo} from 'react';
import { Text, TouchableOpacity, Image, View, } from 'react-native';
import { HomeStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { Spacing } from '../../components';
import { SH } from '../../utils';
import {  useTheme } from '@react-navigation/native';

const FreeShowDataView = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const { item,onPress } = props;
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: "#38343E",
      borderRadius: SH(10),
      marginRight: SH(10),
      marginVertical: SH(4),
      paddingVertical: SH(3),
    }}>
        <Image source={item.Image} style={{
          resizeMode: 'contain',
          height: SH(40),
          width: SH(40),
          marginVertical: SH(10),
          marginLeft: SH(20),
        }} />
        <Text style={{
          fontFamily: 'Montserrat-Medium',
          fontSize: SH(10),
          color: Colors.white_text_color,
          opacity: 0.8,
          marginLeft: SH(17),
          marginRight: SH(13),
        }}>{t(item.Text)}</Text>
    </View>
  );
}
export default FreeShowDataView;