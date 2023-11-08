import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList,Image, Dimensions } from 'react-native';
import { PreMimumStyle } from '../../../styles';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { Button, Spacing, CommonFlatlist, VectorIcons } from '../../../components';
import { Table, Row, Rows } from 'react-native-table-component';
import { PreMimumImageData, packagPriceData, Colors, SF, SH,SW } from '../../../utils';
import images from '../../../images';
import Carousel from 'react-native-snap-carousel';



const Premium = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
 
  const tableHead = ["Xüsusiyyət", t("subTitle_1"), t("subTitle_2")];

  const tableData = [
    [t("TableData_1"), <VectorIcons icon="AntDesign" name='check' size={SF(20)} color={Colors.white_text_color} />, <VectorIcons icon="AntDesign" name='check' size={SF(20)} color={Colors.white_text_color} />,],

    [t("TableData_2"), <VectorIcons icon="AntDesign" name='close' size={SF(20)} color={Colors.white_text_color} />, <VectorIcons icon="AntDesign" name='check' size={SF(20)} color={Colors.white_text_color} />],

    [t("TableData_3"), <VectorIcons icon="AntDesign" name='close' size={SF(20)} color={Colors.white_text_color} />, <VectorIcons icon="AntDesign" name='close' size={SF(20)} color={Colors.white_text_color} />,],

    [t("TableData_4"), "1", "2"],

    [t("TableData_5"), t("HD720"), t("FullHD")],
    [t("TableData_6"), t("Stereo_Label"), t("Dolby_Label")],

  ];
  const widthArr = [190, 80, 80]

  const [packageSelect, setPackageSelect] = useState(1);


  const PacagePriceFlateFun = (item, index) => {
    return (
      <TouchableOpacity style={packageSelect == (item.packageSlecectNum) ? PreMimumStyle.PackagePriceBoxActive : PreMimumStyle.PackagePriceBox} onPress={() => setPackageSelect(item.packageSlecectNum)}>
        <Text style={packageSelect == (item.packageSlecectNum) ? PreMimumStyle.PackageTitleActive : PreMimumStyle.PackageTitle}>{t(item.packageTitle)}</Text>
        <View style={PreMimumStyle.PackageBox}>
          <Text style={PreMimumStyle.PackagePriceStyle}>{t(item.packagePrice)}</Text>
          <Text style={PreMimumStyle.PackagevalidateStyle}>{t(item.packagevalidate)}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={PreMimumStyle.MinViewbgColor}>
        <View>
          <View style={PreMimumStyle.ModalViewBox}>
            <ScrollView contentContainerStyle={PreMimumStyle.ScrollViewStyle}>
              <View style={PreMimumStyle.ModalView}>
                <Image source={images.App_logo} style={{
                  height: SH(200),
                  width: SW(300),
                  resizeMode: 'contain',
                  alignSelf: 'center',
                }} />
                <Text style={PreMimumStyle.SubScribeHeadingTextStyle}>{t("SubScribe_Head_Label")}</Text>
                <Spacing space={SH(20)} />
                <Table borderStyle={{
                      borderWidth: SW(2),
                      borderColor: Colors.gray_text_color
                }} style={{
                  alignSelf: 'center',
                }}>
                  <Row data={tableHead} style={PreMimumStyle.head} widthArr={widthArr} textStyle={PreMimumStyle.HeadingText} />
                  <Rows data={tableData} widthArr={widthArr} textStyle={PreMimumStyle.TableDataStyle} />
                </Table>
                <Spacing space={SH(35)} />
                <Carousel
                  data={PreMimumImageData}
                  renderItem={({ item, index }) => <CommonFlatlist item={item} index={index} />}
                  sliderWidth={SW(375)}
                  itemWidth={SW(140)}
                  loop={true}
                  autoplay={true}
                  autoplayDelay={100}
                />
                <Spacing space={SH(20)} />
                <FlatList
                  data={packagPriceData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => PacagePriceFlateFun(item, index)}
                  keyExtractor={item => item.id}
                  contentContainerStyle={PreMimumStyle.BestSportFlatFunStyle}
                />
                <Spacing space={SH(90)} />
              </View>
              <Spacing />
            </ScrollView>
          </View>
        </View>
      <View style={PreMimumStyle.ContinueBtnBox}>
        <Button onPress={() => navigation.navigate(RouteName.PAYMENT_SCREEN,{index: packageSelect})} title={t("Continue_Width_Label")} />
      </View>
    </View >
  );
};
export default Premium;
