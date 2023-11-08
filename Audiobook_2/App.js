import React, { useEffect,useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import images from './src/images';
import AnimatedLottieView from 'lottie-react-native';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { SH } from './src/utils';
import { SafeAreaView } from 'react-native';

GoogleSignin.configure({
  webClientId:'635903839764-kuf4blhgr2jicbdouee3m0en9aj5cl52.apps.googleusercontent.com',
})

const App = () => {
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
    }, 5100);
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{ flex: 1 ,backgroundColor:"#252525"}}>
        <RootNavigator />
        {isLoading && (
          <View style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // You can change the background color and opacity
          }}>
              <LoadingScreen />
          </View>
      )}
        </SafeAreaView>
      </PersistGate>
    </Provider>

  );

};
export default App;