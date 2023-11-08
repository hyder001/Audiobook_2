import React,{useMemo} from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { HomeStyles } from '../../styles';
import { SH } from '../../utils';
import { Spacing, } from '../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const HistoryView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

  return (
    <TouchableOpacity onPress={() => onPress()} style={HomeStyle.LibrrayView}>
      <View style={HomeStyle.FlexRowImageView}>
        <View style={HomeStyle.WidthImageView}>
          <Image source={item.Image} style={HomeStyle.ImageStylesListing} />
          <View style={HomeStyle.FlexRowDirection}>
            <View style={HomeStyle.LinerViewLineT} />
            <View style={HomeStyle.LinerViewLineGrayT} />
          </View>
        </View>
        <View style={HomeStyle.TextViewWidth}>
          <View style={HomeStyle.FlexRowStyleDigit}>
            <View>
              <Text style={HomeStyle.TextColorWhite}>{t(item.Text)}</Text>
            </View>
          </View>
          <Spacing space={SH(5)} />
          <View style={HomeStyle.FlexRowIconText}>
            <View>
              <Text style={HomeStyle.TextLightLibrary}>{t(item.TextTwo)}</Text>
            </View>
          </View>
          <Spacing space={SH(10)} />
          <View style={HomeStyle.FlexRowIconText}>
            <View>
              <Text style={HomeStyle.TextLightLibraryTwo}>{t(item.Complate_Text)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default HistoryView;