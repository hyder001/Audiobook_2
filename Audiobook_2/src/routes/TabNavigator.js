import React, { useState,useEffect } from 'react';
import { View,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTab, LibararyTab, Premium, Profile, SearchTab, FAQScreen} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { Style } from '../styles';
import { ColorPicker, CustomSidebarMenu, HeaderLeftMenuIcon, VectorIcons } from '../components';
import RouteName from '../routes/RouteName';
import { Colors, SF,SW,SH } from '../utils';
import { useTranslation } from "react-i18next";
import { initializeApp } from "firebase/app";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import images from '../images';
import { tabBarHeight } from 'react-native-bottom-tab/src/AnimatedTabBar/BottomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HeaderArray = {
  headerShown: true,
  headerTintColor: Colors.theme_background,
  headerShadowVisible: false,
  headerStyle: Style.headerStyle,
  headerTitleStyle: Style.headerTitleStyle,
};

function DrawerSidebarScreen(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
      <CustomSidebarMenu {...props} />
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="HomeScsreenTabAll" drawerContent={props => <DrawerSidebarScreen {...props} />}>
      <Drawer.Screen name="HomeScsreenTabAll"
        options={{ headerShown: false }}
        component={HomeScsreenTabAll} />
    </Drawer.Navigator>
  );
}
function Root() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Homese" component={HomeScsreenTabAll}
        options={{
          title: '',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
export default Root;

function HomeTabScreenStack(props) {
  const { t } = useTranslation();
  const [username, setusername] = useState('');
  //silent sign in to google
  GoogleSignin.configure({
    webClientId: '635903839764-kuf4blhgr2jicbdouee3m0en9aj5cl52.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  });
  const firebaseConfig = {
    apiKey: "AIzaSyDAAJcqi2yWOwCDy0CT4XyClzYWBuoFxJY",
    authDomain: "ttest-15deq.firebaseapp.com",
    databaseURL: "https://ttest-15deq-default-rtdb.firebaseio.com",
    projectId: "ttest-15deq",
    storageBucket: "ttest-15deq.appspot.com",
    messagingSenderId: "635903839764",
    appId: "1:635903839764:web:76aef03979e74c3f376101"
  };
  const app = initializeApp(firebaseConfig);
  const getCurrentUserr = async () => {
    try {
      await GoogleSignin.hasPlayServices(); // Check for play services
      const user = await GoogleSignin.signInSilently(); // Get current user
      setusername(user.user.name);
    } catch (error) {
      console.error('Error getting current user:', error);
    }
  };

  useEffect(() => {
    getCurrentUserr();
  }, []);


  return (
    <Stack.Navigator initialRouteName="HomeTab">
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          title: t("Navbar_home_text"),
          ...HeaderArray,

        }}
      />
    </Stack.Navigator>
  );
}
function PrimiumTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Premium">
      <Stack.Screen
        name="Premium"
        component={Premium}
        options={{
          title: t("Premium_Text"),
          ...HeaderArray,
          headerLeft: () => (
            <HeaderLeftMenuIcon {...props} />
          ),
          headerRight: () => (
            <ColorPicker />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MydiaryTabStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="SearchTab">
      <Stack.Screen
        name="SearchTab"
        component={SearchTab}
        options={{
          title: t("Search_Text"),
          ...HeaderArray,
        }}
      />
    </Stack.Navigator>
  );
}
function LibararyTabScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="LibararyTab">
      <Stack.Screen
        name="LibararyTab"
        component={LibararyTab}
        options={{
          title: t("Libarary_Text"),
          ...HeaderArray,
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileScreenStack(props) {
  const { t } = useTranslation();
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShadowVisible: false,
          title: t("Profile_Text"),
          ...HeaderArray,
        }}
      />
    </Stack.Navigator>
  );
}
export function HomeScsreenTabAll() {
  const { t } = useTranslation();
  return (
    <Tab.Navigator initialRouteName="Homes"
      screenOptions={{ headerShown: false, tabBarStyle: Style.bottomTabMain ,
      }}
      tabBarOptions={{
        activeTintColor: Colors.theme_background_second,
        inactiveTintColor: Colors.tab_color,
        labeled: true,
        tabStyle: Style.TabStyle,
      }}
    >
      <Tab.Screen
        name={RouteName.HOME_TAB}
        component={HomeTabScreenStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.HomeIcon}
              style={{
                height: SH(20),
                width: SW(30),
                opacity: focused ? 1 : 0.6,
              }} />
          ),
        }}
      />
          <Tab.Screen
        name={RouteName.MY_DAIRY_TAB}
        component={MydiaryTabStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.SearchLogo}
              style={{
                height: SH(23),
                width: SW(23),
                opacity: focused ? 1 : 0.6,
              }} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.LIBRARY_TAB}
        component={LibararyTabScreenStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.LibraryLogo}
              style={{
                height: SH(20),
                width: SW(15),
                opacity: focused ? 1 : 0.6,
              }} />
          ),
        }}
      />
      <Tab.Screen
        name={RouteName.PROFILE_TAB}
        component={ProfileScreenStack}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.ProfileLogo}
              style={{
                resizeMode: 'contain',
                height: SH(30),
                width: SW(25),
                opacity: focused ? 1 : 0.6,
              }} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}
