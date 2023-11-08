import React, { useMemo } from "react";
import { Text, TouchableOpacity, } from "react-native";
import { SearchTabs } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const TopSearchView = (props) => {
  const { item, onPress } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SearchTab = useMemo(() => SearchTabs(Colors), [Colors]);
  return (
    <TouchableOpacity onPress={() => onPress()} style={SearchTab.TextView}>
      <Text style={SearchTab.HellowTextStyle}>{t(item.Text)}</Text>
    </TouchableOpacity>
  );
}
export default TopSearchView;