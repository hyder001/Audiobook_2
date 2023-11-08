import React, { useState, useMemo ,useEffect} from 'react';
import { View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { HomeStyles } from '../../../styles';
import { HomeImageSlider,widthPercent } from '../../../utils';
import images from '../../../index';
import { Lottie } from '../../../components';
import { useTheme } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set,onValue} from "firebase/database";
import { Linking } from 'react-native';
  
const App = (props) => {
  let _slider1Ref;
  const [index, setIndex] = useState(3);
  const { Colors } = useTheme();
  const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  const [HomeImageSlider,setHomeImageSlider] = useState('');

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

  useEffect(() => {
    const db = getDatabase(app);

    const sliders = ref(db, "sliders");

    // Read a newReleases reference from the Realtime Database
    onValue(sliders, (snapshot) => {
        const data = [];
        snapshot.forEach(childSnapshot => {
            const release = {
                Image: childSnapshot.child('url').val(),
                red_url: childSnapshot.child('red_url').val(),
            };
            data.push(release);
        });
        setHomeImageSlider(data);
    });

  }, []);

  const renderItem = ({ item, index }) => {
    const openUrlInBrowser = async () => {
      try {
        // Open the URL in the device's default browser
        await Linking.openURL(item.red_url);
      } catch (error) {
        console.error('Error opening URL:', error);
      }
    };

    return (
      <TouchableOpacity onPress={() => openUrlInBrowser()} style={HomeStyle.MinViewImage}>
        <Image source={{uri: item.Image}} style={HomeStyle.ImageHeight} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[HomeStyle.exampleContainer]}>
      <Carousel
        ref={c => _slider1Ref = c}
        data={HomeImageSlider}
        renderItem={renderItem}
        sliderWidth={widthPercent(100)}
        itemWidth={widthPercent(90)}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        containerCustomStyle={HomeStyle.slider}
        contentContainerCustomStyle={HomeStyle.sliderContentContainer}
        loop={false}
        loopClonesPerSide={3}
        enableSnap={true}
        autoplay={true}
        autoplayDelay={8000}
        autoplayInterval={6000}
        onSnapToItem={(index) => setIndex({ activeSlide: index })}
      />
    </View>
  );
};
export default App;