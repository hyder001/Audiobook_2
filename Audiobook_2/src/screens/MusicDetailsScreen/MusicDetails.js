import React, { useState, useMemo ,useEffect} from "react";
import { Text, View, Image, ScrollView, TouchableOpacity, } from "react-native";
import { MusicDetailsStyle, Style, HomeStyles } from '../../styles';
import { SH, SF, SW} from '../../utils';
import { Spacing, Lottie, VectorIcons, Button, MoreThisLike, EpiSodeTab, ReadMore } from '../../components';
import images from "../../index";
import { useTranslation } from "react-i18next";
import { RouteName } from "../../routes";
import { useTheme,useRoute } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,onValue,get,child} from "firebase/database";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { showAlert } from "../../components/commonComponents/SimpleAlert";




const MusicDetails = (props) => {
  const { navigation } = props;
  const [Bookmarkicon, SetBookmarkicon] = useState(1);
  const { params } = useRoute();
  const[email,setemail]=useState('');
  const [haspremium,sethaspremium] = useState(false);
  const [trackData, setTrackData] = useState(params?.trackData);
  const [tabShow, setTabshow] = useState("1");
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const MusicDetailsStyles = useMemo(() => MusicDetailsStyle(Colors), [Colors]);
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

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

  const getTrackData = async () => {
    try {
      const db = getDatabase(app);
      const trackRef = ref(db, `audioBooks/${trackData.id}`);
      const snapshot = await get(trackRef);

      if (snapshot.exists()) {
        // change track data's desc, uri, and title
        setTrackData({
          ...trackData,
          desc: snapshot.val().Description,
          phuri: snapshot.val().URI,
          Title: snapshot.val().Title,
          Artist: snapshot.val().Artist,
          url: snapshot.val().url,
        });
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (trackData) {
      getTrackData();
    }
  }, [trackData]);






  

  //GET USER INFO
  const getCurrentUserr = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    setemail(currentUser.user.email);

  };

  useEffect(() => {
    getCurrentUserr();
  }, []);

  const handleBookmark = async () => {
    getCurrentUserr().then(() =>{
      const db = getDatabase(app);
      var validid = String(trackData.id);
      const filteredemail = email.replace('@','+').replace('.','+');
      if(filteredemail!=''){
        if (Bookmarkicon === 1) {
          // If Bookmarkicon is 0, add the track ID to the user's favorites
          set(ref(db, "users/"+String(filteredemail)+"/"+validid), true);
  
          // Update the Bookmarkicon state to 1
          SetBookmarkicon(0);
        } else {
          // If Bookmarkicon is 1, remove the track ID from the user's favorites
          const trackRef = ref(db, "users/"+String(filteredemail)+"/"+validid);
          
          // Remove the track ID
          set(trackRef, null);
  
          // Update the Bookmarkicon state to 0
          SetBookmarkicon(1);
        }
      }
      else{
        console.log('email empty(write data)');
      }
    });
  };

  // Set up a listener for changes in the "favorites" reference
  useEffect(() => {
    getCurrentUserr().then(()=>{
      const filteredemail = email.replace('@', '+').replace('.', '+');
      if (filteredemail !== '') {
        const db = getDatabase(app);
        const favoritesRef = ref(db, "users/"+String(filteredemail));
        const validid = String(trackData.id);
  
        get(child(favoritesRef, validid))
          .then((snapshot) => {
            if (snapshot.exists()) {
              // Set Bookmarkicon to 0 if the track is in favorites
              SetBookmarkicon(0);
            } else {
              // Set Bookmarkicon to 1 if the track is not in favorites
              SetBookmarkicon(1);
            }
          })
          .catch((error) => {
            console.error(error);
          });
          get(child(ref(db, "users/"+String(filteredemail)),"sub"))
          .then((snapshot) =>{
            if(snapshot.exists){
              var check = snapshot.val();
              if(check){
                sethaspremium(true);
              }
              else{
                sethaspremium(false);
              }
            } 
            else{
              showAlert("Error","Connectivity issue, try again later or notify developers");
            }
          })
          .catch((error) =>{
            console.log("error:" +error);
          });
  
  
      } else {
        console.log('email empty');
      }
    })
    
  }, [email]);


  

  return (
    <View>
      <View style={Style.MinViewScreen}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <View style={Style.Containers}>
            <View style={MusicDetailsStyles.PaddingHoriZontal}>
              <Spacing space={SH(20)} />
              <TouchableOpacity>
                <Image source={{uri: trackData.uri}} style={{
                    height: SH(390),
                    width: '80%',
                    alignSelf: 'center',
                    resizeMode: 'cover', // 'cover', 'contain', 'stretch', 'repeat', 'center'
                    borderRadius: SH(10)
                }} />
  
              </TouchableOpacity>
              <Spacing space={SH(15)} />
              <View style={MusicDetailsStyles.FlexRowMinViewMinStar}>
                <View style={MusicDetailsStyles.FlexRowMinView}>
                  <View style={MusicDetailsStyles.FlexRowText}>
                    <VectorIcons icon="AntDesign" name="caretright" size={SF(15)} color={Colors.paregraph_teaxt_read_more} />
                    <Text style={MusicDetailsStyles.ListenViewStyle}>{trackData.Artist}</Text>
                  </View>
                </View>     
              </View>
              <View style={MusicDetailsStyles.FlexRowMinViewMinStar}>
                <View style={MusicDetailsStyles.FlexRowMinView}>
                  <View>
                    <Text style={MusicDetailsStyles.TextStyleNine}>{trackData.Title}</Text>
                  </View>
                </View>
              </View>
              <Spacing space={SH(25)} />
              <View style={MusicDetailsStyles.FlexRowMinBookMark}>
                <View style={MusicDetailsStyles.PlayButtonWidthTwo}>
                  {Bookmarkicon === 0 ?
                    <TouchableOpacity style={[MusicDetailsStyles.BookmarksView, {opacity: 0.8}]} onPress={() => handleBookmark()}>
                      <VectorIcons icon="FontAwesome" name="bookmark" size={SF(30)} color={Colors.white_text_color} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={[MusicDetailsStyles.BookmarksView]} onPress={() => handleBookmark()}>
                      <VectorIcons icon="FontAwesome" name="bookmark-o" size={SF(30)} color={Colors.white_text_color} />
                    </TouchableOpacity>}
                </View>
                <View style={MusicDetailsStyles.PlayButtonWidth} >
                    <Button onPress={() => navigation.navigate(RouteName.MUSIC_PALAY_SCREEN,{trackData: trackData})} title={haspremium === true ? t("Play_Text"): t("Play_Intro_Text")} />
                </View>
              </View>
              <Spacing space={SH(25)} />
              <ReadMore
                numberOfLines={2}
                children={
                  <Text style={MusicDetailsStyles.LoremTextStyle}>
                    {trackData.desc}
                  </Text>
                }>
              </ReadMore>
              <Spacing space={SH(25)} />
              <View style={MusicDetailsStyles.TabViewMin}>
                <TouchableOpacity onPress={() => setTabshow('1')} style={tabShow == 1 ? MusicDetailsStyles.TextViewColorActive : MusicDetailsStyles.TextViewColor} >
                  <Text style={MusicDetailsStyles.TextColorWhite}>{t("Episode_Text")}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate(RouteName.PREMIUM_TAB)} style={MusicDetailsStyles.OneDigitYTextViewTwo}>
                    <VectorIcons icon="AntDesign" name="arrowdown" size={SF(20)} color={Colors.white_text_color} />
                </TouchableOpacity>
              </View>
              
              <Spacing space={SH(35)} />
              {tabShow == '1' ?
                <EpiSodeTab
                  onPressPremum={() => navigation.navigate(RouteName.PREMIUM_TAB)} Premium={haspremium} />
                :
                <MoreThisLike id={trackData.id} />}
            </View>
            <Spacing space={SH(105)} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default MusicDetails;
