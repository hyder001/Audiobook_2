import React, { useState, useEffect, useMemo } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { ProfileTabStyles, Style } from '../../../styles';
import { Button, Spacing, Input, VectorIcons, ConfirmationAlert } from '../../../components';
import Achievements from "../../../components/commonComponents/Achievements";
import { SH, SF } from '../../../utils';
import images from "../../../index";
import RouteName from "../../../routes/RouteName";
import { AchievementsData } from "../../../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrackPlayer from "react-native-track-player";
import { useTranslation } from "react-i18next";
import { CommonActions } from "@react-navigation/native";
import { useTheme } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { FlatList } from "react-native-gesture-handler";

const ProfileTab = (props) => {
  const { Colors } = useTheme();
  const ProfileTabStyle = useMemo(() => ProfileTabStyles(Colors), [Colors]);
  const { navigation }  = props;
  const { t } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState(0);
  const [profileurl,setprofileurl] =useState('');
  const [googleUsername,setGoogleUsername] =useState('');
  const[email,setemail]=useState('');

  GoogleSignin.configure({
    webClientId: '635903839764-kuf4blhgr2jicbdouee3m0en9aj5cl52.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  });

  const getCurrentUserr = async () => {
    try {
      await GoogleSignin.hasPlayServices(); // Check for play services
      const user = await GoogleSignin.signInSilently(); // Get current user
      if (user) {
        // Handle user data
        setemail(user.user.email);
        setprofileurl(user.user.photo);
        setGoogleUsername(user.user.name);
        console.log('email set');
        
      } else {
        console.log('No user is signed in.');
      }
    } catch (error) {
      console.error('Error getting current user:', error);
    }
  };
  useEffect(() => {
    getCurrentUserr();
  }, []);
  
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  var alertdata = {
    'logout': t("Are_You_Sure_logout"),
  }

  const onoknutton = async () => {
    try {
      // remove all async storage data
       await AsyncStorage.clear();
       await GoogleSignin.signOut();
      console.log("user signed out2");

      navigation.navigate(RouteName.LOGIN_SCREEN,{loggedout: true});

      

    } catch (error) {
      console.error(error);
    }
  }
  return (
    <View style={ProfileTabStyle.BackgroundWhite}>
      <View style={ProfileTabStyle.whilistminbody}>
        <View style={ProfileTabStyle.ImagCenter}>
          <View>
            <Text style={ProfileTabStyle.UserName}>{googleUsername}</Text>
            <Spacing space={SH(20)}/>
            <Image style={ProfileTabStyle.ImageStyles} resizeMode='cover' source={{uri: profileurl}} />

          </View>
        </View>
        <Spacing space={SH(20)} />
        <View style={ProfileTabStyle.ProfileDetailesMinview}>
          <View>
          <Text style={ProfileTabStyle.EditProFile}>
            {t("My_ACHV")}
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={AchievementsData}
            renderItem={({item}) => <Achievements achievement={item} />}
            style={{marginVertical: SH(24)}}
          />

          </View>

          <View style={ProfileTabStyle.PhoneNumberAndIcon}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => { setModalVisible(!modalVisible) }}
            >
              <View style={ProfileTabStyle.CenteredView}>
                <View style={ProfileTabStyle.ModalView}>
                  <View style={ProfileTabStyle.ShadowStyleModalTwo}>
                    <View style={ProfileTabStyle.AllPaddingModal}>
                      <TouchableOpacity style={ProfileTabStyle.IconClose} onPress={() => setModalVisible(!modalVisible)}>
                        <VectorIcons
                          icon="AntDesign"
                          size={SF(25)}
                          name="close"
                          color={Colors.black_text_color}
                        />
                      </TouchableOpacity>
                      {modalcontent === 1 || modalcontent === 2 || modalcontent === 3 ?
                        <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                          <View style={ProfileTabStyle.Marginright}>
                            <Button onPress={() => setModalVisible(!modalVisible)}
                              buttonTextStyle={{ color: Colors.black_text_color }}
                              title={t("Ok")} />
                          </View>
                          <View style={ProfileTabStyle.Marginright}>
                            <Button buttonStyle={ProfileTabStyle.SingleButtonStyles} buttonTextStyle={[ProfileTabStyle.SingleButtonText,{color: Colors.black_text_color}]} title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} />
                          </View>
                        </View>
                        :
                        <View style={ProfileTabStyle.ButtonsetModleTwoButton}>
                          <View style={ProfileTabStyle.MarginRightView}>
                            <Button title={t("Log_Out")} onPress={() => signOut()} buttonTextStyle={{color: "#000000"}} />
                          </View>
                          <View style={ProfileTabStyle.MarginRightView}>
                            <Button title={t("Cancel_Button")} onPress={() => setModalVisible(!modalVisible)} buttonStyle={[ProfileTabStyle.SingleButtonStyles,{color: "#000000"}]} buttonTextStyle={[ProfileTabStyle.SingleButtonText,{color: "#000000"}]} />
                          </View>
                        </View>
                      }
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <Spacing space={SH(10)} />
          <TouchableOpacity onPress={() => {
            setAlertVisible(true);
            setAlertMessage(alertdata.logout);
          }}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: SH(40),
              backgroundColor: "#4D4757",
              borderRadius: SH(10),
              paddingHorizontal: SH(20),
            }}>
              <View>
                <Text style={ProfileTabStyle.LogOutView}>{t("Log_Out")}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
      </View>
    </View>
  );
};
export default ProfileTab;