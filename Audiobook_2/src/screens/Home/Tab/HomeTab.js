//eslint-disable-next-line react-native/no-inline-styles

import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ScrollView, Alert ,Image, ImageBackground} from 'react-native';
import { HomeStyles, Style } from '../../../styles';
import { HomeFirstImageSlider } from '../../../screens';
import images from '../../../images';
import {
    FreeShowData, SH, ListeningSchedule, SF, TopIndianMusicData,
    NewReleasedata, TopAudioForYou, SW, CategoriesData
} from '../../../utils';
import {Lottie} from '../../../components';
import { Spacing, Search } from '../../../components';
import OverlayWidget from '../../../components/commonComponents/OverlayWidget';
import {
    VectorIcons, FreeShowDataView,
    ListeningScheduleView, TopIndianMusicView, NewRealseVideoView, TopAudioForYouView
} from '../../../components';
import { useTranslation } from "react-i18next";
import { RouteName } from '../../../routes';
import { useNavigation, useTheme } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage,ref as storageref} from 'firebase/storage';
import { getDatabase, ref, set,onValue, get} from "firebase/database";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { use } from 'i18next';
import AnimatedLottieView from 'lottie-react-native';
import Colorpicker from '../../../styles/CommonStyle/Colorpicker';



const HomeTab = (props) => {
    const { t } = useTranslation();
    const { navigation } = props;

    
    




    //add usestate var named data
    const [newreleasesdata,setnewreleasesdata] = useState([]);
    const [audiobooksdata,setaudiobooksdata] = useState([]);
    const [useremail,setuseremail] = useState(null);
    const newrelmargin = 50;
    const audiobooksmargin = 25
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    //add loading spinner


    const Categories = () => {
        //set 2 columns
        return (
            <FlatList
                data={CategoriesData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<FreeShowDataView onPress={() => navigation.navigate(RouteName.CATEGORIES_SCREEN)}
                    item={item}
                />)}
                keyExtractor={item => item.Title}
                contentContainerStyle={HomeStyle.FlatListStyles}
            />
        );
    };





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
            const filteredemail = user.user.email.replace('@', '+').replace('.', '+');
            setuseremail(filteredemail);
        } catch (error) {
            console.error('Error getting current user:', error);
        }
    };

    useEffect(() => {
        getCurrentUserr();
    }, []);


    useEffect(() => {
        const db = getDatabase(app);

        const audiobooksref = ref(db, "newReleases");


        // Read a newReleases reference from the Realtime Database
        onValue(audiobooksref, (snapshot) => {
            const data = [];
            snapshot.forEach(childSnapshot => {
                const release = {
                    id: childSnapshot.child('ID').val(),
                    uri: childSnapshot.child('phuri').val(),
                    Artist: childSnapshot.child('Artist').val(),
                    Title: childSnapshot.child('Title').val()
                };
                data.push(release);
            });
            setnewreleasesdata(data);
        });

    }, []);

    useEffect(() => {
        const db = getDatabase(app);

        const audiobooksref = ref(db, "audioBooks");

        // Read a newReleases reference from the Realtime Database
        onValue(audiobooksref, (snapshot) => {
            const data = [];
            snapshot.forEach(childSnapshot => {
                const release = {
                    id: childSnapshot.child('ID').val(),
                    uri: childSnapshot.child('URI').val(),
                    Title: childSnapshot.child('Title').val(),
                    Artist:childSnapshot.child('Artist').val(),
                    desc: childSnapshot.child('Description').val()
                };
                data.push(release);
            });
            setaudiobooksdata(data);
        });

    }, []);


    //offline books
    const [offlineBooksdata, setofflineBooksData] = useState(null);

    useEffect(() => {
      const fetchJsonData = async () => {
        try {
          const response = await fetch('https://firebasestorage.googleapis.com/v0/b/ttest-15deq.appspot.com/o/book_data_test.json?alt=media&token=a7b89b64-9a83-4cf9-90f3-16676939ecf3'); // Replace with the actual path
          const data = await response.json();
          //randomize data
            data.sort(() => Math.random() - 0.5);
          //truncate data in half
            data.length = data.length / 10; 

          setofflineBooksData(data);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
  
      fetchJsonData();
    }, []);
    GoogleSignin.configure({
        webClientId: '635903839764-kuf4blhgr2jicbdouee3m0en9aj5cl52.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
    




    
    


    return (
        <View style={Style.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewStyles}>
                <View>
                    <View style={{
                            borderTopWidth: SH(2),
                            borderColor: Colors.white_text_color,
                            opacity: 0.3,
                            width: '100%',
                            marginTop: SH(12)
                    }} />
                    <Spacing space={SH(20)} />
                    <HomeFirstImageSlider onPress={() => navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN)} />
                    <Spacing space={SH(10)} />
                    <View style={HomeStyle.FlexTextIconView}>
                        <View style={HomeStyle.FlexTextWithIcon}>
                            {/* <VectorIcons icon="AntDesign" name="playcircleo" size={SF(20)} color={Colors.theme_background_second} />*/}
                            <TouchableOpacity>
                                <Text style={HomeStyle.ListingTextStyle}>{t("CategoriesText")}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Spacing space={SH(20)}/>
                    <Categories />
                    <Spacing space={SH(20)} />
                    <View style={HomeStyle.FlexTextIconView}>
                        <View style={HomeStyle.FlexTextWithIcon}>
                            {/* <VectorIcons icon="AntDesign" name="playcircleo" size={SF(20)} color={Colors.theme_background_second} />*/}
                            <View>
                                <Text style={HomeStyle.ListingTextStyle}>{t("Your_Listening_Schedule")}</Text>
                                <Text style={HomeStyle.ListingTextStyle2}>{t("Your_Listening_Schedule2")}</Text>
                            </View>
                        </View>
                    </View>
                    <Spacing space={SH(20)} />
                    <FlatList
                        data={newreleasesdata}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<NewRealseVideoView margin={newrelmargin} onPress={() =>navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN,{trackData: item})}
                            item={item}
                        />)}
                        keyExtractor={item => item.Title}
                        contentContainerStyle={HomeStyle.FlatListStyles}
                    />
                    <View style={HomeStyle.FlexTextIconView}>
                        <View style={HomeStyle.FlexTextWithIcon}>
                             {/* <VectorIcons icon="AntDesign" name="playcircleo" size={SF(20)} color={Colors.theme_background_second} />*/}
                            <Text style={HomeStyle.ListingTextStyle}>{t("New_Realeses")}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate(RouteName.LIBRARY_TAB)} style={HomeStyle.FlexTextWithIcon}>
                            <VectorIcons icon="AntDesign" name="doubleright" size={SF(20)} color={Colors.theme_background_second} />
                        </TouchableOpacity>
                    </View>
                    <Spacing space={SH(20)} />
                    <FlatList
                        data={audiobooksdata}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<NewRealseVideoView margin={audiobooksmargin} onPress={() => navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN,{trackData: item})}
                            item={item}
                        />)}
                        keyExtractor={item => item.Title}
                        contentContainerStyle={HomeStyle.FlatListStyles}
                    />
                    <Spacing space={SH(20)} />
                    <View style={HomeStyle.BorderViewTop} />
                    <Spacing space={SH(10)} />
                    <View style={HomeStyle.FlexTextIconView}>
                        <View style={HomeStyle.FlexTextWithIcon}>
                             {/* <VectorIcons icon="AntDesign" name="playcircleo" size={SF(20)} color={Colors.theme_background_second} />*/}
                            <Text style={HomeStyle.ListingTextStyle}>{t("Top_Audios_For_You")}</Text>
                        </View>
                    </View>
                    <Spacing space={SH(35)} />
                    <View style={{
                        alignItems: 'center',
                    }}>
                    <FlatList
                        data={offlineBooksdata}
                        numColumns={2}
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (<NewRealseVideoView margin={45}
                            item={item}
                        />)}
                        keyExtractor={item => item.Title}
                        contentContainerStyle={{
                            paddingHorizontal: SH(20),  
                            width: '100%',

                        }}
                    />
                    </View>
                    <Spacing space={SH(5)} />
                    <View style={{
                        width: SW(120),
                        height: SH(30),
                        alignSelf: 'flex-end',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight: SH(30),
                    }} >
                    <Text style={{
                        fontSize: SH(12),
                        fontWeight: 'bold',
                        color: Colors.white_text_color,
                    }} onPress={()=> navigation.navigate(RouteName.MY_DAIRY_TAB)}>{t("See_All")}</Text>
                    </View>
                    <Spacing space={SH(20)} />

                </View>
            </ScrollView>
            <OverlayWidget />
            </View>
    );
};
export default HomeTab;