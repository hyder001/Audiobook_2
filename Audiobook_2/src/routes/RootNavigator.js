import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme, useRoute, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from "react-redux";
import { Colors } from '../utils';
import {Style} from '../styles';


const Stack = createNativeStackNavigator();

import { RouteName, SideNavigator } from '../routes';

import {
  LoginScreen, RegisterScreen, OtpVeryfiveScreen,
  SplashScreen, RegistrationSuccessful,
  Swiperscreen,
  TranslationScreen, ForgotPassword, MusicDetails, MusicPlayScreens,SearchTab, FAQScreen
} from '../screens';
import Premium from '../screens/Home/Tab/Premium';


const RootNavigator = props => {
  const HeaderArray = {
    headerShown: true,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
    headerTitleStyle: Style.headerTitleStyle,
    headerTintColor: Colors.white_text_color
  };
  const HeaderArrayTwo = {
    headerShown: true,
    headerShadowVisible: false,
    headerStyle: Style.headerStyleTwo,
  };
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background_second = colorrdata;
      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }
  }, [colorrdata, Colors])
  return (
    <NavigationContainer theme={colorValue}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.LOGIN_SCREEN} options={{gestureEnabled:false}} component={LoginScreen} />
        <Stack.Screen name={RouteName.MY_DAIRY_TAB} component={SearchTab}/>
        <Stack.Screen name={RouteName.REGISTER_SCREEN} component={RegisterScreen} />
        <Stack.Screen name={RouteName.HOME_SCREEN} options={{gestureEnabled:false}} component={SideNavigator} />
        <Stack.Screen name={RouteName.REGIATRAION_SUCCESSFULL} component={RegistrationSuccessful} />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVeryfiveScreen} />
        <Stack.Screen name={RouteName.SWIPER_SCREEN} component={Swiperscreen} />
        <Stack.Screen name={RouteName.SELECT_LANGUAGE} component={TranslationScreen} />
        <Stack.Screen name={RouteName.FAQ_SCREEN} component={FAQScreen} />
        <Stack.Screen name={RouteName.FORGOT_PASSWORD} component={ForgotPassword} />
        <Stack.Screen name={RouteName.PREMIUM_TAB} component={Premium} />
        <Stack.Screen name={RouteName.MUSIC_DETAILS_SCREEN} options={{ ...HeaderArray,title:'' }} component={MusicDetails} />
        <Stack.Screen name={RouteName.MUSIC_PALAY_SCREEN} options={{
           headerShown: true,title:'' ,...HeaderArrayTwo,
           }} component={MusicPlayScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;