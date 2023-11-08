import React,{useMemo} from "react";
import { Text, View, Image, TouchableOpacity, } from "react-native";
import { SearchTabs } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const GenersDataView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SearchTab = useMemo(() => SearchTabs(Colors), [Colors]);
  return (
    <TouchableOpacity onPress={() => onPress()} style={SearchTab.ImageViewStyles}>
      <Image source={item.images} style={SearchTab.ImageStyles} />
      <View style={SearchTab.TextViewStyle}>
        <Text style={SearchTab.TextImageUp}>{t(item.Text)}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default GenersDataView;