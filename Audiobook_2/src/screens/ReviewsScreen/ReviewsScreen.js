import React, { useState, useMemo } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, } from "react-native";
import { HelpScreenStyles, Style } from '../../styles';
import { Button, ConfirmationAlert, Lottie, Spacing, RatingScreen, Input } from '../../components';
import images from "../../index";
import { RouteName } from "../../routes";
import { SW, SH, Fonts } from "../../utils";
import { useTheme } from '@react-navigation/native';
import { useTranslation } from "react-i18next";

const ReviewsScreen = (props) => {
  const { navigation } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  const [text, onChangeText] = React.useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Reviews_Submit_Successful"),
  }
  const onoknutton = () => {
    navigation.navigate(RouteName.HOME_TAB);
  }
  return (
    <View style={HelpScreenStyle.MinViewScreenTwo}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
          <View style={HelpScreenStyle.KeyBordTopViewStyle}>
            <View style={HelpScreenStyle.MinFlexView}>
              <View style={HelpScreenStyle.MinContentView}>
                <Spacing space={SH(50)} />
                <Text style={HelpScreenStyle.AccountTextTwo}>{t("Please_OnDemand_Service")}</Text>
                <View style={HelpScreenStyle.FlexRowStarSignup}>
                  <RatingScreen
                    type='custom'
                    ratingColor={Colors.theme_background_second}
                    ratingBackgroundColor={Colors.chinese_silver}
                    ratingCount={5}
                    tintColor='#222222'
                    imageSize={SW(30)}
                    startingValue={4.5}
                    isDisabled={false}
                  />
                </View>
                <Text style={HelpScreenStyle.AccountTextSuccessfullyTwo}>{t("Please_OnDemand_Two")}</Text>
                  <Input
                    inputStyle={HelpScreenStyle.PositionStyleInput}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder={t("Reviews_Enter_Your_Commenet")}
                    placeholderTextColor={Colors.white_text_color}
                  />
                <Spacing space={SH(20)} />
                <View style={HelpScreenStyle.AccountButton}>
                  <Button onPress={() => {
                    setAlertVisible(true);
                    setAlertMessage(alertdata.logout);
                  }} title={t("Reviews_Submit")}
                  />
                  <Text style={{
                    color: Colors.white_text_color,
                    fontSize: SW(16),
                    fontFamily: Fonts.Poppins_Regular,
                    alignSelf: 'center',
                    marginTop: SH(20),
                  }} onPress={()=> navigation.goBack()}>{t("Go_back")}</Text>
                </View>
              </View>
            </View>
          </View>
      </ScrollView>
      <ConfirmationAlert
        message={alertMessage}
        modalVisible={alertVisible}
        setModalVisible={setAlertVisible}
        onPress={() => { setAlertVisible(!alertVisible), onoknutton() }}
        buttonminview={HelpScreenStyle.ButtonView}
        iconVisible={true}
        buttonText={t("Ok")}
      />
    </View>
  );
};
export default ReviewsScreen;
