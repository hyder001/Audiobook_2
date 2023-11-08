import Slider from '@react-native-community/slider';
import React from 'react';
import { View, Text } from 'react-native';
import { useProgress } from 'react-native-track-player';
import { MusicPlayStyle } from '../../styles';

const SongSlider = () => {
  const { position, duration } = useProgress();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = Math.floor(seconds % 60);
  
    return `${String(minutes).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
  };
  

  return (
    <View>
      <Slider
        value={position}
        minimumValue={10}
        maximumValue={duration}
        thumbTintColor='#FFF'
        minimumTrackTintColor='#000000'
        maximumTrackTintColor='#FFF'
        style={MusicPlayStyle.sliderContainer}
      />
      <View style={MusicPlayStyle.timeContainer}>
        <Text style={MusicPlayStyle.time}>
          {formatTime(position)}
        </Text>
        <Text style={MusicPlayStyle.time}>
          {formatTime(duration - position)}
        </Text>
      </View>
    </View>
  );
};

export default SongSlider;
