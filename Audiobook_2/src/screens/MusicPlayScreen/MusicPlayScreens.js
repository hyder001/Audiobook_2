import React, { useState, useMemo, useEffect } from "react";
import { View, ScrollView, FlatList, ImageBackground } from "react-native";
import { Style, HomeStyles } from '../../styles';
import { TopAudioForYou ,SH} from '../../utils';
import { Spacing, TopAudioForYouView } from '../../components';
import images from "../../index";
import { useTranslation } from "react-i18next";
import { useRoute, useTheme } from '@react-navigation/native';
import { setupPlayer, addTrack } from "../../components/commonComponents/MusicPlayService"
import { MusicPlayer } from "../../screens";
import { initreplace } from "../../utils";
import AnimatedLottieView from "lottie-react-native";

const MusicPlayScreens = (props) => {
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const {params} = useRoute();
  const trackData = params?.trackData;
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const [isPlayerReady, setIsPaylerReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const LoadingScreen = () => (

    //make that the loading screen is on top of everything and is centered
    <View>
        <AnimatedLottieView source={images.Loading} style={
            {
                width: SH(50),
                height: SH(50),
            }
        } 
        autoPlay loop
        />
    </View>
  );
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  async function setup() {
    let isSetup = await setupPlayer();
    if (isSetup) {
      try{
        await addTrack(trackData);
      }
      catch(error){
        console.log(error);
      }
    }
    setIsPaylerReady(isSetup);
  }
  useEffect(() => {
    setup();
  }, [])

  return (
      <View style={{height:'100%', backgroundColor : '#252525'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.ScrollViewStyles}>
          <MusicPlayer />
          {isLoading && (
          <View style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              height:'100%',
              width:'100%',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "#252525", // You can change the background color and opacity
          }}>
              <LoadingScreen />
          </View>
      )}
        </ScrollView>
      </View>
  );
};
export default MusicPlayScreens;
