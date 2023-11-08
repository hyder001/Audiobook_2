import React, { useEffect, useMemo } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity ,Alert} from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
import { VectorIcons } from '../../components';
import { SF } from '../../utils';
import { MusicDetailsStyle, MusicPlayStyle } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { initreplace } from '../../utils';
import { t } from 'i18next';

const ControlCenter = () => {
  const { Colors } = useTheme();
  const MusicDetailsStyles = useMemo(() => MusicDetailsStyle(Colors), [Colors]);
  const playBackState = usePlaybackState();




  const togglePlayback = async (playback) => {
    const currentTrack = await TrackPlayer.getCurrentTrack()
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play()
      } else {
        await TrackPlayer.pause()
      }
    }
  }

  const forward10 = async() =>{
    await TrackPlayer.seekTo((await TrackPlayer.getPosition()) + 6);
  }
  const replay10 = async() =>{
    await TrackPlayer.seekTo((await TrackPlayer.getPosition()) - 6);
  }
  useEffect(() => {
    const startPlayer = async () => {
      try {
      await TrackPlayer.setupPlayer();
      }
      catch(error){
        console.log("setup error:"+error);
      }

      // Set up the player
      const storedPosition = await AsyncStorage.getItem('musicPlaybackPosition');
      console.log(storedPosition);
      if (storedPosition !== null) {
        try{
        //Make a dialog function to ask if user wants to resume from stored position
          await TrackPlayer.seekTo(Number(storedPosition));
          console.log("storedPosition has been set");
        }  catch(error){
          console.log(error);
        }

      }
      else{
        console.log("storedPosition has not been set");
      }
    }
    startPlayer();
  }, [])

  useEffect(() => {
    const onPlaybackStateChange = async (newState) => {
      if (newState === State.Playing) {
        const currentPosition = await TrackPlayer.getPosition();
        await AsyncStorage.setItem('musicPlaybackPosition', String(currentPosition));
      } else if (newState === State.Paused) {
        // The playback has been paused. Save the current position.
        const currentPosition = await TrackPlayer.getPosition();
        await AsyncStorage.setItem('musicPlaybackPosition', String(currentPosition));

        // The playback has been paused. Save the current position.
        const currentTrack = await TrackPlayer.getCurrentTrack();
        const trackData = await TrackPlayer.getTrack(currentTrack);
        //calculate how many minutes left and add as trackData.left to async storage
        const duration = await TrackPlayer.getDuration();
        const left = duration - currentPosition;
        trackData.left = left;
        trackData.left = Math.round(trackData.left/60);
        const trackDataString = JSON.stringify(trackData);
        await AsyncStorage.setItem('musicPlaybackTrackData', trackDataString);
      }
      else{
        const currentPosition = await TrackPlayer.getPosition();
        await AsyncStorage.setItem('musicPlaybackPosition', String(currentPosition));

        // The playback has been paused. Save the current position.
        const currentTrack = await TrackPlayer.getCurrentTrack();
        const trackData = await TrackPlayer.getTrack(currentTrack);
        //calculate how many minutes left and add as trackData.left to async storage
        const duration = await TrackPlayer.getDuration();
        const left = duration - currentPosition;
        trackData.left = left;
        trackData.left = Math.round(trackData.left/60);
        const trackDataString = JSON.stringify(trackData);
        await AsyncStorage.setItem('musicPlaybackTrackData', trackDataString);
      }
    };
  
    // Add the event listener
    const playbackStateListener = TrackPlayer.addEventListener('playback-state', onPlaybackStateChange);

    return () => {
      // Remove the event listener when the component unmounts.
      playbackStateListener.remove();
    };
  }, []);
  

  return (
    <View style={MusicPlayStyle.controlview}>
      <View style={MusicDetailsStyles.FlexRowVectorIcons}>
        <TouchableOpacity onPress={() => replay10()}>
          <VectorIcons icon="MaterialIcons" name="replay-10" size={SF(35)} color={Colors.white_text_color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => togglePlayback(playBackState)}>
          <VectorIcons icon="MaterialIcons" name={playBackState === State.Playing ? "pause" : "play-arrow"} size={SF(55)} color={Colors.white_text_color} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => forward10()}>
          <VectorIcons icon="MaterialIcons" name="forward-10" size={SF(35)} color={Colors.white_text_color} />
        </TouchableOpacity>

      </View>
    </View>
  )
}
export default ControlCenter