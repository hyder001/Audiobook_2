
import React, { useEffect, useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { View, Text, Alert,Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SH } from '../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteName } from '../../routes';

const OverlayWidget = () => {
  const [trackData, setTrackData] = useState(null);
  const { Colors } = useTheme();
  const navigation = useNavigation();

  const getTrackData = async () => {
    try {
      const value = await AsyncStorage.getItem('musicPlaybackTrackData');
      if (value !== null) {
        setTrackData(JSON.parse(value));
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  getTrackData();



  if  (!trackData) {
    return (
      <View>
      </View>
    );
  }
  else{
    return (
      <View style={{ height: SH(50), position: 'absolute', bottom: 13, left: 13,
      justifyContent: 'space-around', alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#495057', padding: 10, borderRadius: 10,
      shadowColor: 'black', shadowOpacity: 0.5, shadowRadius: 10,
      }}>
        <Image source={{ uri: trackData.phuri }} style={{ width: SH(30), height: SH(40), marginRight: SH(10),marginLeft:SH(10)
        }} />
        <View style={{ flexDirection: 'column', marginLeft:SH(10)}}>
        <Text style={{color:"#ffffff"}} onPress={()=>navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN,{trackData:trackData})} numberOfLines={1}>{trackData.Title}</Text>
        <Text style={{fontSize: SH(10), marginTop: SH(3),color:"#ffffff"}}>{trackData.left} mins left</Text>
        </View>
      </View>
    );
  }


};

export default OverlayWidget;
