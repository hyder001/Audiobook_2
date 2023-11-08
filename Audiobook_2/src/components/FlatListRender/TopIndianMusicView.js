import React, { useMemo } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { HomeStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';

const TopIndianMusicView = (props) => {
  const { item, onPress } = props;
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  return (
    <TouchableOpacity onPress={() => onPress()} style={HomeStyle.TopMusicMinView}>
      <View>
        <Image source={item.Image} style={HomeStyle.ImageStylesListingTop} />
        <View style={HomeStyle.DigitViewStyle}>
          <Text style={HomeStyle.DigitStyle}>{item.Text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default TopIndianMusicView;