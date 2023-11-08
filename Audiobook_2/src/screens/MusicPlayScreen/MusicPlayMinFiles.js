import React, { useState, useEffect} from 'react';
import { FlatList, Image, View } from 'react-native';
import TrackPlayer, {
  Event,
  useTrackPlayerEvents
} from 'react-native-track-player';
import { SongInfo, SongSlider, ControlCenter } from '../../components';
import { SH, playListData } from '../../utils';
import { MusicPlayStyle } from '../../styles';
import { useRoute } from '@react-navigation/native';
import { initreplace } from "../../utils";

const MusicPlayer = () => {
  const [track, setTrack] = useState();
  const {params} = useRoute();
  const trackData = params?.trackData;
  const playListData = [
    {
      id: trackData.id,
      title: trackData.Title,
      artist: trackData.Artist,
      uri: trackData.uri
    },
  ]
  const resetAndPlayCurrentTrack = async () => {
    // Clear the current queue
    await TrackPlayer.reset();
  };
  useEffect(() => {
    resetAndPlayCurrentTrack();
  }, [trackData]);
  
  



  const renderArtWork = () => {
    return (
      <View style={MusicPlayStyle.listArtWrapper}>
        <View style={MusicPlayStyle.albumContainer}>
          {track?.artwork && (
            <Image
              style={{
                width: SH(100),
                height: SH(100),

              }}
              source={{uri : trackData.phuri }}
            />
          )}
        </View>
      </View>
    )
  }
  return (
    <View style={MusicPlayStyle.container}>
      <FlatList
        horizontal
        data={playListData}
        renderItem={renderArtWork}
        keyExtractor={song => song.id.toString()}
      />
      <SongInfo track={trackData} />
      <SongSlider />
      <ControlCenter />
    </View>
  )
}
export default MusicPlayer