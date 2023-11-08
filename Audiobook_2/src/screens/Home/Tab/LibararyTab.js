import React, { useState, useMemo,useEffect} from "react";
import { Text, View, ScrollView, TouchableOpacity, } from "react-native";
import { LibraryStyles, Style } from '../../../styles';
import { SH, } from '../../../utils';
import { Spacing, DownLoadsTab, HistoryTab, MyLibraryTab } from '../../../components';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { RouteName } from '../../../routes';
import { getDatabase, ref, set,onValue,child,get} from "firebase/database";
import { initializeApp } from "firebase/app";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { showAlert } from "../../../components/commonComponents/SimpleAlert";

const LibararyTab = (props) => {
  const { navigation } = props;
  const [tabShow, setTabshow] = useState('1');
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const LibraryStyle = useMemo(() => LibraryStyles(Colors), [Colors]);
  const [email,setemail]=useState('');
  const [favoriteTrackIds,setFavoriteTrackIds] =useState('');
  const [audiobooksData,setaudiobooksdata] = useState([]);
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
        setemail(user.user.email);
    } catch (error) {
        console.error('Error getting current user:', error);
    }
};


useEffect(() => {
    getCurrentUserr().then(()=>{
      const filteredEmail = email.replace('@', '+').replace('.', '+');
      if (filteredEmail) {
        const db = getDatabase(app);
        const favoritesRef = ref(db, "users/"+String(filteredEmail));
  
        onValue(favoritesRef, (snapshot) => {
          const trackIds = [];
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              if(childSnapshot.key !="sub"){
                const trackId = childSnapshot.key;
                trackIds.push(trackId);
              }
            });
          }
          setFavoriteTrackIds(trackIds);
        });
      }
    })
  }, [email]);

useEffect(() => {
  const db = getDatabase(app);
  const audiobooksRef = ref(db, "audioBooks");
   // Update this to your actual path

// Fetch audiobooks details for each favorite track ID
const fetchAudiobooksDetails = async () => {
  const audiobooksData = [];
  for (const trackId of favoriteTrackIds) {
    const trackRef = child(audiobooksRef, trackId);

    try {
      const snapshot = await get(trackRef);

      if (snapshot.exists()) {
        // Add audiobook data to the array
        data = {
          id: snapshot.child('ID').val(),
          uri: snapshot.child('URI').val(),
          Title: snapshot.child('Title').val(),
          Artist:snapshot.child('Artist').val(),
          desc: snapshot.child('Description').val(),
          TextTwo:snapshot.child("Artist").val(),
        }
        audiobooksData.push(data);
      } else {
        console.log(`Audiobook with track ID ${trackId} does not exist.`);
      }
    } catch (error) {
      console.error(`Error fetching audiobook with track ID ${trackId}:`, error);
    }
  }


  setaudiobooksdata(audiobooksData);
};


  // Call the fetchAudiobooksDetails function to populate audiobooks state
  if (favoriteTrackIds.length > 0) {
    fetchAudiobooksDetails();
  }
  else{
    console.log("error");
  }
}, [favoriteTrackIds]);

  return (
    <View style={Style.MinViewScreenDownload}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={Style.ScrollViewStyles}>
        <View style={Style.Containers}>
          <Spacing space={SH(20)} />
          <View style={{  flexDirection: 'row',alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: SH(5)}}>
            <TouchableOpacity onPress={() => setTabshow('1')} style={tabShow == 1 ? LibraryStyle.TextViewColorActive : LibraryStyle.TextViewColor} >
              <Text style={LibraryStyle.TextColorWhite}>{t("My_Library_1")}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tabShow == 2 ? LibraryStyle.TextViewColorActive : LibraryStyle.TextViewColor} onPress={() => setTabshow('2')}>
              <Text style={LibraryStyle.TextColorWhite}>{t("My_Library_2")}</Text>
            </TouchableOpacity>
          </View>
          {tabShow == '1' &&
            <MyLibraryTab Data ={audiobooksData} onPress={(item)=>navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN,{trackData: item})}/>
          }
          {tabShow == '2' &&
            <DownLoadsTab />
          }
          <Spacing space={SH(20)} />
        </View>
      </ScrollView>
    </View>
  );
};
export default LibararyTab;
