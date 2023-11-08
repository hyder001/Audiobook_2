import { StyleSheet, Dimensions } from 'react-native';
import { SF, Fonts, SW, SH, Colors, } from '../../utils';
const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: '100%',
    height: 0,
    paddingHorizontal: 20,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 10,
  },
  name: {
    marginBottom: 8,
    textAlign: 'center',

    color: Colors.white_text_color,
    fontSize: 24,
    fontWeight: '800',
  },
  artist: {
    textAlign: 'center',
    color: Colors.white_text_color,
  },
  songview: {
    width: '100%',
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Imageview: {
    width: '100%'
  },
  ImageviewSecond: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    width: '100%'
  },
  ImageStyle: {
    height: 280,
    width: '100%',
    borderRadius: 10
  },
  sliderContainer: {
    width: 350,
    height: 40,
    marginTop: 25,
  },
  timeContainer: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    
    color: '#ffffff',
    paddingLeft:10
  },
  controlview: {
    marginBottom: 56,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});