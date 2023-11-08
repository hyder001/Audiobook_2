import React,{useMemo} from 'react';
import { Text, TouchableOpacity, Image,View } from 'react-native';
import { HomeStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { Spacing,Lottie } from '../../components';
import { SH } from '../../utils';
import images from '../../index';
import { useTheme } from '@react-navigation/native';

const ListeningScheduleView = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const { item,onPress } = props;
  
  
  return (
    <View style={HomeStyle.PaddingRight}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image source={{uri:item.phuri}} style={HomeStyle.ImageStylesListingTwo} />
        <View style={HomeStyle.PostionAboluteView}>
          <Image source={{uri:item.phuri}} style={HomeStyle.ImagePostionAbsolute} />
        </View>
        <View style={HomeStyle.PostionAboluteViewLottie}>
          <Lottie source={images.Play_Icon_One} Lottiewidthstyle={HomeStyle.ImagePostionAbsolute} />
        </View>
        <View style={HomeStyle.FlexRowDirection}>
          <View style={HomeStyle.LinerViewLine} />
          <View style={HomeStyle.LinerViewLineGray} />
        </View>
        <Spacing space={SH(4)} />
        <Text style={HomeStyle.EpisodeText}>{t(item.Title)}</Text>
      </TouchableOpacity>
    </View>
  );
}
export default ListeningScheduleView;