import React, { useMemo } from "react";
import { Text, View, Image, TouchableOpacity, Alert, } from "react-native";
import { MusicDetailsStyle, } from '../../styles';
import { SH, SF, } from '../../utils';
import { Spacing, VectorIcons, } from '../../components';
import images from "../../index";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const DownLoadDataView = (props) => {
  const { item, index ,Premium} = props;
  const { onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const MusicDetailsStyles = useMemo(() => MusicDetailsStyle(Colors), [Colors]);

  return (
    <View style={MusicDetailsStyles.FlexRowTextWithIcon} >
      <View style={MusicDetailsStyles.IconViewWidth}>
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
          {
          Premium === true ?
          <View></View> :
          
          <VectorIcons icon="AntDesign" name="lock1" size={SF(17)} color={Colors.red_color} />
          }
        </View>
      </View>
      <View style={MusicDetailsStyles.TextViewWidth}>
        <Text style={MusicDetailsStyles.HellowTextStyle}>{t(item.Text)}</Text>
        <Spacing space={SH(5)} />
        <View style={MusicDetailsStyles.FlexIconTexts}>
          <VectorIcons icon="AntDesign" name="clockcircleo" size={SF(17)} color={Colors.paregraph_teaxt_read_more} />
          <Text style={MusicDetailsStyles.SecondTextStyle}>{t(item.Min)+" "+t("min")} </Text>
        </View>
        <Spacing space={SH(5)} />
        <View style={MusicDetailsStyles.FlexRowGoldCView}>
          <TouchableOpacity onPress={() => onPress()}>
          <Text style={MusicDetailsStyles.GoldTextStyle}>{Premium ===true ? "":t("get_sub")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default DownLoadDataView;