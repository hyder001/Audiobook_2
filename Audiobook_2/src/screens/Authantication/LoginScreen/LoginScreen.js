import React, { useState, useMemo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { color_picker_set_action } from '../../../redux/action/CommonAction';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, ScrollView, Image, TouchableOpacity, } from 'react-native';
import { Button, Container, Input, Spacing, VectorIcons } from '../../../components';
import { RouteName } from '../../../routes';
import { Style, Login } from '../../../styles';
import { SH, SF } from '../../../utils';
import { useTheme } from '@react-navigation/native';
import images from '../../../index';
import { useTranslation } from "react-i18next";
import { initializeApp } from "firebase/app";
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import { getAuth } from "firebase/auth";
import { CommonActions } from "@react-navigation/native";
import { showAlert } from '../../../components/commonComponents/SimpleAlert'; // Adjust the path as needed


const LoginScreen = (props) => {
    const { Colors } = useTheme();

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
    const auth = getAuth(app);
    const [IsSigningIn,setIsSigningIn] = useState(false);

    const { colorrdata } = useSelector(state => state.commonReducer) || {};
    StatusBar.setBackgroundColor(Colors.theme_background);
    const dispatch = useDispatch();
    useEffect(() => {
        {
            colorrdata != '' ?
                dispatch(color_picker_set_action(colorrdata))
                :
                dispatch(color_picker_set_action(Colors.theme_background_second))
        }
    }, []);


        

        // Somewhere in your code
    const signIn = async () => {
        setIsSigningIn(true);
        try {
            await GoogleSignin.hasPlayServices();
            const {idToken} = await GoogleSignin.signIn();
            const googleCredentials = GoogleAuthProvider.credential(idToken);
            await signInWithCredential(auth,  googleCredentials);
            //Navigate to homescreen with props
            // Example usage in another script
            showAlert('Success', 'You have logged in', () => {
                navigation.navigate(RouteName.HOME_SCREEN);
                setIsSigningIn(false);
        });
  
        } catch (error) {
            //fix developer error
        console.log('error:'+error.message);
        setIsSigningIn(false);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else if( error.code === statusCodes.DEVELOPER_ERROR) {
            
        }
        }
  };

    const Logins = useMemo(() => Login(Colors), [Colors]);
    const {navigation} = props;
    const [mobileNumber, setMobileNumber] = useState('');
    const [passwordVisibility, setpasswordVisibility] = useState(true);
    const [TextInputPassword, setTextInputPassword] = useState('');



    const onChangeText = (text) => {
        if (text === 'TextInputPassword') setpasswordVisibility(!passwordVisibility);
    };
    const { t } = useTranslation();

    const OnRegisterPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    return (
        <Container>
            <View style={Logins.MinViewScreens}>
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={Logins.Container}>
                        <View style={Style.MinViewContent}>
                            <View style={Logins.ManViewLogins}>
                                <Image style={Logins.ImageSet} resizeMode='contain' source={images.App_logo} />
                            </View>
                            <Spacing space={SH(10)} />
                            <Text style={Logins.LoginText}>{"Daxil ol"}</Text>
                            <Spacing space={SH(30)} />
                            <GoogleSigninButton
                                size={GoogleSigninButton.Size.Wide}
                                color={GoogleSigninButton.Color.Dark}
                                onPress={()=>signIn()}
                                disabled={IsSigningIn}
                            />

                            
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Container>
    );
}
export default LoginScreen;