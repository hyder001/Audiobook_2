import React, { useMemo } from 'react';
import { Image,TouchableOpacity, View } from 'react-native';
import { HomeStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';

function CommonFlatlist(props) {
    const { item, onPress } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    return (
        <TouchableOpacity style={HomeStyle.CommonFlatlistBox} onPress={() => onPress()}>
            <View style={HomeStyle.ImageBoxCommonStyleBox}>
               <Image source={item.bannerImg} style={HomeStyle.ImageStyle} />
            </View>
        </TouchableOpacity>
    )
}
export default CommonFlatlist;