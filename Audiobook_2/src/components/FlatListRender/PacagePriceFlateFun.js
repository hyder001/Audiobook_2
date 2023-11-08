import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { PreMimumStyle } from '../../styles';
import { useTranslation } from "react-i18next";

const PacagePriceFlateFun = (props) => {
  const { item } = props;
  const [packageSelect, setPackageSelect] = useState(1);

  const { t } = useTranslation();
  return (
    <TouchableOpacity style={packageSelect == (item.packageSlecectNum) ? PreMimumStyle.PackagePriceBoxActive : PreMimumStyle.PackagePriceBox} onPress={() => setPackageSelect(item.packageSlecectNum)}>
      <Text style={packageSelect == (item.packageSlecectNum) ? PreMimumStyle.PackageTitleActive : PreMimumStyle.PackageTitle}>{t(item.packageTitle)}</Text>
      <View style={PreMimumStyle.PackageBox}>
        <Text style={PreMimumStyle.PackagePriceStyle}>{t(item.packagePrice)}</Text>
        <Text style={PreMimumStyle.PackagevalidateStyle}>/{t(item.packagevalidate)}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default PacagePriceFlateFun;