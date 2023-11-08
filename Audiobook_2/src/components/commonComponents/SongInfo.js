import React, { PropsWithChildren } from 'react'
import { View, Text, Image } from 'react-native';
import { Track } from 'react-native-track-player';
import { MusicPlayStyle } from '../../styles';
import { useTranslation } from "react-i18next";
import { SH } from '../../utils';

type SongInfoProps = PropsWithChildren<{
  track: Track | null | undefined
}>

const SongInfo = ({ track }: SongInfoProps) => {


  const { t } = useTranslation();
  return (
    <View style={MusicPlayStyle.songview}>
      <View style={MusicPlayStyle.Imageview}>
        <View style={MusicPlayStyle.ImageviewSecond}>
          <Image source={{uri:track?.phuri}} style={{
          height: SH(300),
          resizeMode: 'contain', // 'cover', 'contain', 'stretch', 'repeat', 'center'
          width: '100%',
          alignSelf: 'center',
          borderRadius: 20
          }} />
        </View>
        <Text style={MusicPlayStyle.name}>
          {t(track?.Title)}
        </Text>
        <Text style={MusicPlayStyle.artist}>
          by {t(track?.Artist)}
        </Text>
      </View>
    </View>
  )
}
export default SongInfo