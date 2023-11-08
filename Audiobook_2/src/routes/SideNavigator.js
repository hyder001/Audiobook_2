import React, { useState, useEffect } from 'react';
import RouteName from './RouteName';
import { CustomSidebarMenu, AppHeader } from '../components';
import { Colors } from '../utils';
import { DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { TabNavigator } from '../routes';
import {
  SettingsScreen, HelpScreen, FAQScreen, ReviewsScreen, NotificationScreen, PaymentScreen, PaymentSuccessFully,
} from '../screens';
import { Style } from '../styles';

const SideNavigator = (props) => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const HeaderArray = {
    headerShown: false,
    headerTintColor: Colors.theme_background,
    headerShadowVisible: false,
    headerStyle: Style.headerStyle,
    headerTitleStyle: Style.headerTitleStyle,
    headerTintColor: Colors.white_text_color
  };

  const { detailsStore } = useSelector(state => state.DataReducer) || { detailsStore };
  const { t } = useTranslation();
  const { colorrdata } = useSelector(state => state.commonReducer) || {};
  const MyTheme = {
    ...DefaultTheme,
    Colors: Colors
  };
  const [colorValue, setColorValue] = useState(MyTheme)
  useEffect(() => {
    if (Colors.length != 0 && colorrdata != "") {
      Colors.theme_background_second = colorrdata;
      console.log(Colors.theme_background_second = colorrdata, '=======>')

      const MyThemeNew = {
        ...DefaultTheme,
        Colors: Colors
      };
      setColorValue(MyThemeNew)
    }

  }, [colorrdata, Colors])
  return (
    <Drawer.Navigator theme={colorValue} drawerContent={(props) => <CustomSidebarMenu {...props} />} screenOptions={{
      headerShown: false,
      swipeEdgeWidth: 0,
      drawerStyle: {
        backgroundColor: Colors.white_text_color,
      }
    }}
    >
      <Stack.Screen name={RouteName.HOME_SCREEN} component={TabNavigator} />
      <Drawer.Screen
        name={RouteName.HELP_SCREEN} component={HelpScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader  {...props} headerTitle={t("Help_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.NOTIFICTION_SCREEN} component={NotificationScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader  {...props} headerTitle={t("Notification_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.REVIEWS_SCREEN} component={ReviewsScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader  {...props} headerTitle={t("Reviews_Screen")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.SETTING_SCREEN} component={SettingsScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader  {...props} headerTitle={t("Setting_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.PAYMENT_SCREEN} component={PaymentScreen}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader  {...props} headerTitle={t("Setting_Text")} />,
        }}
      />
      <Drawer.Screen
        name={RouteName.PAYMENT_SUCCESSFULLY} component={PaymentSuccessFully}
        options={{
          ...HeaderArray,
          headerTitle: (props) => <AppHeader  {...props} headerTitle={'Payment Successful'} />,
        }}
      />
    </Drawer.Navigator>
  );
}
export default SideNavigator;