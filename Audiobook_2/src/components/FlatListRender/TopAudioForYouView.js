import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import { HomeStyles } from '../../styles';
import { SF, } from '../../utils';
import { VectorIcons, ReadMore } from '../../components';
import { useTranslation } from "react-i18next";
import {  useTheme } from '@react-navigation/native';
import images from '../../images/index';

const TopAudioForYouView = (props) => {
  const { item } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

  return (
    <TouchableOpacity style={HomeStyle.TopAudioForYouMinView}>
      <View style={HomeStyle.FlexRowImageView}>
        <View style={HomeStyle.WidthImageView}>
          <Image source={{uri:item.Image}} style={HomeStyle.ImageStylesListing} />
        </View>
        <View style={HomeStyle.TextViewWidth}>
          <View style={HomeStyle.FlexRowStyleDigit}>
            <View style={HomeStyle.TextWidthSixcty}>
              <Text  numberOfLines={1} style={HomeStyle.TextColorWhite}>{t(item.Text)}</Text>
            </View>
            <View style={HomeStyle.RatingTextStyle}>
              <Text style={HomeStyle.TextColorWhiteRating}>{item.DigitText}  ₼</Text>
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
          }}>
             <Image source={images.PersonLogo} style={{
                width: SF(10),
                height: SF(10),
             }} />
              <Text style={HomeStyle.TextLightGray}>{t(item.Text_Three)}</Text>
          </View>
          <ReadMore
            numberOfLines={2}
            children={
              <Text style={HomeStyle.TextColorWhites}>{t(item.TextTwo)}</Text>
            }
          >
          </ReadMore>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default TopAudioForYouView;