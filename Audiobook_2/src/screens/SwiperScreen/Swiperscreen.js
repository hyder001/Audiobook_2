import React, { useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SwiperStyle } from '../../styles';
import { Button, Spacing } from '../../components';
import { RouteName } from '../../routes';
import { useDispatch } from 'react-redux';
import { color_picker_set_action } from '../../redux/action/CommonAction';
import { Swiperdata, SH } from '../../utils';
import { useTranslation } from "react-i18next";
import { initializeApp } from 'firebase/app';
import { useTheme } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const App = ({ navigation }) => {
  const dispatch = useDispatch();
  dispatch(color_picker_set_action('#F3EEE4'));
  const firebaseConfig = {
    apiKey: "AIzaSyDAAJcqi2yWOwCDy0CT4XyClzYWBuoFxJY",
    authDomain: "ttest-15deq.firebaseapp.com",
    databaseURL: "https://ttest-15deq-default-rtdb.firebaseio.com",
    projectId: "ttest-15deq",
    storageBucket: "ttest-15deq.appspot.com",
    messagingSenderId: "635903839764",
    appId: "1:635903839764:web:76aef03979e74c3f376101"
  };
  GoogleSignin.configure({
      webClientId: '635903839764-kuf4blhgr2jicbdouee3m0en9aj5cl52.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  const app = initializeApp(firebaseConfig);

  const { t } = useTranslation();
  const { Colors } = useTheme();
  const SwiperStyles = useMemo(() => SwiperStyle(Colors), [Colors]);
  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn){
      navigation.navigate(RouteName.HOME_SCREEN);
    }else{
      
    }
  };
  isSignedIn();
  

  const RenderItem = ({ item }) => {
    return (
      <View style={SwiperStyles.ChangeBgcolor}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={SwiperStyles.ScrollViewStyle}>
          <View>
            <View style={SwiperStyles.AnimationViewStyle}>
              {item.animation}
            </View>
          </View>
        </ScrollView>
        <Text style={SwiperStyles.TitleStyles}>
          {t(item.title)}
        </Text>
        <Text style={SwiperStyles.Textstyle}>
          {t(item.text)}
        </Text>
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <View style={SwiperStyles.ButtonCircle}>
          <Button
            title={t("Get_Started")}
            buttonStyle={SwiperStyles.ButtonStyle}
            onPress={
              () => navigation.navigate(RouteName.SELECT_LANGUAGE)
            }
          />
        </View>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <Spacing space={SH(12)} />
        <Text style={SwiperStyles.NextTextStyle}>{t("Next_Text")}</Text>
      </View>
    );
  };
  const _renderSkipButton = () => {
    return (
      <View style={SwiperStyles.BgButtonView}>
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.SELECT_LANGUAGE)}>
          <Spacing space={SH(12)} />
          <Text style={SwiperStyles.NextTextStyle}>{t("Skip_Text")}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <AppIntroSlider
        data={Swiperdata}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        renderDoneButton={_renderDoneButton}
        showSkipButton={true}
        activeDotStyle={SwiperStyles.ActiveDotStyles}
        dotStyle={SwiperStyles.DotSwiperStyle}
      />
    </>
  );
};
export default App;

