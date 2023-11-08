import TrackPlayer, { Event, RepeatMode } from "react-native-track-player";
import { playListData } from '../../utils';

export async function setupPlayer(){
    
    let isSetup = false;
    try {
        await TrackPlayer.getCurrentTrack()
        isSetup = true
    } catch (error) {
        await TrackPlayer.setupPlayer()
        isSetup = true
    } finally{
        return isSetup;
    }
}
export async function addTrack(data){
    const valid = [data];
    console.log(valid);
    await TrackPlayer.add(data)
    await TrackPlayer.setRepeatMode(RepeatMode.Queue)
}
export async function playbackService (){
    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause()
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play()
    })
    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext()
    })
    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious()
    })
}