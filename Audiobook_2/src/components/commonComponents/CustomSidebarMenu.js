import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Sidemenu } from '../../styles';
import { RouteName } from '../../routes';
import { ConfirmationAlert, VectorIcons } from '../../components';
import { Colors, SF } from '../../utils';
import { useTranslation } from "react-i18next";

const CustomSidebarMenu = (props) => {
  const { t } = useTranslation();
  const { navigation } = props;
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.LOGIN_SCREEN);
  }
  const Onpressfunction = (e) => {
    navigation.toggleDrawer();
    navigation.navigate(e)
  };
  return (
    <ScrollView>
      <View style={Sidemenu.customslidebarmenu}>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HOME_TAB)
        }>
          <VectorIcons
            icon="AntDesign"
            size={SF(19)}
            name="home"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Home_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PREMIUM_TAB)
        }>
          <VectorIcons
            size={SF(19)}
            icon="Entypo"
            name="price-tag"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Premium_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.MY_DAIRY_TAB)
        }>
          <VectorIcons
            size={SF(19)}
            icon="AntDesign"
            name="search1"
            color={Colors.theme_background}
          />
          <Text style={Sidemenu.hometextstyle}>{t("Search_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.LIBRARY_TAB)
        }>
          <VectorIcons icon="MaterialIcons"
            name="library-books" style={Sidemenu.logoimage} color={Colors.theme_background} size={SF(20)} />
          <Text style={Sidemenu.hometextstyle}>{t("Libarary_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.PROFILE_TAB)
        }>
          <VectorIcons size={SF(19)} icon="FontAwesome"
            name="user-circle" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Profile_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.HELP_SCREEN)
        }>
          <VectorIcons size={SF(19)} icon="Entypo" name="help" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Help_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.SETTING_SCREEN)
        }>
          <VectorIcons icon="AntDesign" size={19} name="setting" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Setting_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.FAQ_SCREEN)
        }>
          <VectorIcons icon="FontAwesome5" size={SF(19)} name="hands-helping" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("FAQ_Text")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.REVIEWS_SCREEN)
        }>
          <VectorIcons icon="Entypo" size={SF(19)} name="star" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Reviews_Screen")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Sidemenu.flexrowset} onPress={
          () => Onpressfunction(RouteName.NOTIFICTION_SCREEN)
        }>
          <VectorIcons icon="Ionicons" size={SF(19)} name="notifications" style={Sidemenu.logoimage} color={Colors.theme_background} />
          <Text style={Sidemenu.hometextstyle}>{t("Notification_Text")}</Text>
        </TouchableOpacity>
        <View style={Sidemenu.settingandlogout}>
          <TouchableOpacity style={Sidemenu.flexrowset} onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
          }}>
            <VectorIcons icon="Feather" name="log-out" color={Colors.theme_background} size={SF(23)} />
            <Text style={Sidemenu.hometextstyle}>{t("Log_Out")}</Text>
          </TouchableOpacity>
        </View>
        <ConfirmationAlert
          message={alertMessage}
          modalVisible={alertVisible}
          setModalVisible={setAlertVisible}
          onPressCancel={() => setAlertVisible(!alertVisible)}
          onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
          cancelButtonText={t("Cancel_Button")}
          buttonText={t("Ok")}
        />
      </View>
    </ScrollView>
  );
};
export default CustomSidebarMenu;

