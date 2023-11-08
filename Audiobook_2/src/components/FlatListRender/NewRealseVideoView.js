import React, { useMemo } from 'react';
import { TouchableOpacity, Image, View,Text } from 'react-native';
import { HomeStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { Fonts, SH, SW } from '../../utils';
import { useTranslation } from "react-i18next";

const NewRealseVideoView = (props) => {
  const { item, onPress, margin } = props;
  const {t} = useTranslation();
  var viewmargin = 0;
  if(margin == 45){
    viewmargin = 35;
  }
  if(margin == SH(26)){
    item.Title = ''
    item.Artist = ''
  }
  if(margin == SH(10)){
    item.Artist = item.left+ " "+t('min_left');
  }
  
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  if (item.Title.length > 20) {
    item.Title = item.Title.substring(0, 15) + '...';
  }


  return (
    <TouchableOpacity style={{
      marginRight: SH(viewmargin),
      marginBottom: SH(25),

    }} onPress={() => onPress()} >
      <View>
        <Image source={{uri:item.uri}} style={{
              height: SW(200),
              width: SW(130),
              borderRadius: SH(6),
              marginRight: SH(margin),
              resizeMode: 'cover' ,
        }} />
        <Text style={{
              fontFamily: Fonts.Montserrat_Medium,
              fontSize: SH(11),
              marginTop: SH(10),
              color: Colors.white_text_color,
        }} numberOfLines={1}>{item.Title}</Text>
        <Text style={{
              fontFamily: Fonts.Montserrat_Regular,
              fontSize: SH(9),
              marginTop: SH(4),
              color: Colors.white_text_color,
              opacity: 0.7,
        }}>{item.Artist}</Text>
        
        {item.DigitText != null ? <Text style={{
            fontSize: SH(10),
            marginTop: SH(3),
            color: "#99B2DD",
            opacity: 0.7,
          }}>{item.DigitText} ₼</Text>
        :
          <View></View>
        }

      </View>
    </TouchableOpacity>
  );
}
export default NewRealseVideoView;