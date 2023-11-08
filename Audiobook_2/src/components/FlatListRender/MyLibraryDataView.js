import React,{useMemo} from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { HomeStyles } from '../../styles';
import { SH} from '../../utils';
import { Spacing } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const MyLibraryDataView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  return (
    <TouchableOpacity onPress={() => onPress()} style={HomeStyle.WidthDownload}>
    <View>
      <Image source={{uri:item.uri}} style={HomeStyle.LibrrayImagtwo} />
      <View style={HomeStyle.LibraryPoastion}>
        <Image source={{uri: item.uri}} style={HomeStyle.LibrrayImage} />
      </View>
      <View style={HomeStyle.FlexRowDirection}>
        <View style={HomeStyle.LinerViewLine} />
        <View style={HomeStyle.LinerViewLineGray} />
      </View>
      <Spacing space={SH(8)} />
      <Text style={HomeStyle.LongTextStyle}>{t(item.Title)}</Text>
      <Text style={HomeStyle.EpisodeTextDif}>{t(item.Artist)}</Text>
    </View>
  </TouchableOpacity>
  );
}
export default MyLibraryDataView;