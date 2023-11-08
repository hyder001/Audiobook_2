import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts, Colors } from '../../utils';
import { height } from 'react-native-bottom-tab/src/AnimatedTabBar/utils';

export default StyleSheet.create({
  ScrollViewStyles: {
    width: '100%',
    height: 'auto',
  },
  uri: {
    width: SW(200),
    height: SH(100)
  },
  LeftIconLeftStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PaddingVertical: {
    PaddingVertical:SH(10)
  },
  headerStyle: {
    backgroundColor: '#252525',
  },
  headerStyleTwo: {
    backgroundColor: "#252525",
  },
  headerTitleStyle: {
    fontFamily:Fonts.Poppins_Medium,
    color:Colors.white_text_color,
    fontSize:SF(23)
  },
  MinViewContent: {
    width: '95%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ScrollViewStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    height: 'auto',
  },
  Container: {
    flexDirection:'row',
    justifyContent:'center',
    width:'100%'
  },
  FlexRowPassword: {
    width: '100%',
    flexDirection: 'row',
    height: SH(50),
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: Colors.black_text_color,
  },
  IconPostionAbolute: {
    position:'absolute',
    right:SH(30),
    height: SH(50),
    flexDirection: 'row',
    alignItems:'center'
  },
  IconPostionAboluteTwo: {
    position:'absolute',
    right:SH(30),
    height: SH(50),
    top:SH(28),
    flexDirection: 'row',
    alignItems:'center'
  },
  CountryCodeIconCenter: {
    position:'absolute',
    left:SH(30),
    height: SH(30),
    zIndex:89,
    top:SH(37),
    flexDirection: 'row',
    alignItems:'center'
  },
  PaddingLeftCountryInput: {
    paddingLeft:SH(90)
  },
  SearchInputBorder: {
    borderWidth:SH(0),
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: SH(7),
    shadowColor: Colors.black_text_color,
    shadowOffset: {
      width: SW(0),
      height: SH(2)
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingVertical: SH(20),
    width: '95%',
  },
  setbgcolorgrsay: {
    backgroundColor: Colors.gray_text_color,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    opacity: Platform.OS === 'ios' ? 2 : 0.9,
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkiconright: {
    borderWidth: SH(3),
    height: SH(80),
    width: SW(75),
    borderRadius: SH(100),
    flexDirection: 'row',
    borderColor: '#252525',
    alignContent: 'center',
    justifyContent: 'center'
  },
  setroundcenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  setbackgroundicon: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: SH(15),
  },
  registertextset: {
    paddingTop: SH(25),
    paddingBottom: SH(0),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  settext: {
    color: Colors.black_text_color,
    fontSize: SF(20),
    paddingHorizontal: SH(20),
    textAlign: 'center',
    fontFamily: Fonts.Poppins_Medium,
  },
  setokbutton: {
    width: '47%'
  },
  buttonminview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SH(40),
    paddingTop: SH(20),
  },
  MinViewStyleSplash: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: '100%'
  },
  SearchHomeTab: {
    width: '100%',
    backgroundColor: 'transperent',
    shadowColor: "transperent",
    shadowOffset: {
      width: SW(0),
      height: SH(0),
    },
    shadowOpacity: 0,
    shadowRadius: Platform.OS === 'ios' ? 0 : 0,
    elevation: Platform.OS === 'ios' ? 0 : 0,
    color: '#252525',
    fontFamily: Fonts.Poppins_Regular,
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent:'center',
    height: '100%',
    width: '100%',
    backgroundColor:'#252525',
  },
  MinViewScreenDownload: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor:'#252525',
  },
  MinViewScreenHome: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
  },
  container: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heightset: {
    height: 'auto',
  },
  SplashMinView: {
    height: '100%',
    backgroundColor: Colors.white_text_color,
  },
  ScrollViewTestHeight: {
    width: '100%',
    height: 'auto'
  },
  buttonotp: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  CallIconView: {
    width: SW(40),
    height: SH(43),
    flexDirection: 'row',
    borderRadius: SH(200),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white_text_color,
    marginRight: SH(20)
  },
  RemoveBgColor: {
    backgroundColor: Colors.white_text_color
  },
  RemoveBgColorTwos: {
    backgroundColor: '#252525'
  },
  InputViewWidth: {
    width: '100%'
  },
  Inputplace: {
    borderColor:Colors.black_text_color,
    color:Colors.black_text_color
  },
  PostionAbsoluteIcon: {
    position:'absolute',
    top:SH(20),
    left:SH(20),
    zIndex:9
  },
  BgColorWhite: {
    backgroundColor:'#252525',
    height:SH(44),
    width:SW(40),
    borderRadius:SH(200),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  TabStyle: {
    backgroundColor:'#252525',
  },
  bottomTabMain: {
    borderTopWidth:SH(0)
  }
});