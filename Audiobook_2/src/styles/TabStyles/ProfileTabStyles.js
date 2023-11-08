import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH } from '../../utils';

export default ProfileTabStyles = (Colors) => StyleSheet.create({
  BackgroundWhite: {
    backgroundColor: "#252525",
  },
  whilistminbody: {
    width: '100%',
    marginTop: '5%',
    height: '100%'
  },
  ImagCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  ImageStyles: {
    width: SW(180),
    height: SH(200),
    alignSelf:'center',
    borderRadius: SH(20)
  },
  UserName: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Montserrat_Bold,
    marginTop:SH(10),
    textAlign: 'center',
    fontSize: SF(18),
  },
  ProfileDetailesMinview: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  PhoneNumberAndIcon: {
    marginTop: '0%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SH(13),
  },
  BgWhiteShadow: {
    backgroundColor: Colors.white_text_color,
    width: '100%',
    textAlign: 'center',
    height: SH(60),
    borderRadius: 7,
    paddingHorizontal: SH(10),
    justifyContent: 'center',
    shadowColor: "#000",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 25,
    },
    shadowOpacity: 0.58,
    shadowRadius: Platform.OS === 'ios' ? 2 : 25,
    elevation: Platform.OS === 'ios' ? 1 : 2,
  },
  BgWhiteShadowInputModal: {
    width: '100%',
    height: SH(50),
    borderRadius: 7,
    paddingLeft: SH(10),
    fontSize: SF(17),
    fontFamily: Fonts.Montserrat_Regular,
    paddingRight: SH(10),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: Colors.gray_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',
    borderRadius: 7,
    textAlignVertical: 'bottom'
  },
  EditProFile: {
    marginTop: '8%',
    marginLeft: '3%',
    fontFamily: Fonts.Montserrat_Medium,
    color: Colors.white_text_color,
    fontSize: SF(19),
  },
  PhoneNumberText: {
    color: Colors.black_text_color,
    fontSize: SF(17),
    fontFamily: Fonts.Montserrat_Regular,
  },
  DigitNumberText: {
    color: Colors.paregraph_teaxt_read_more,
    fontSize: SF(17),
    fontFamily: Fonts.Montserrat_Regular,
  },
  LogOutView: {
    textAlign: 'center',
    color: Colors.white_text_color,
    borderBottomColor: Colors.red_color,
    fontSize: SF(20),
    fontFamily: Fonts.Montserrat_Bold,
    paddingBottom: SH(15),
  },
  CenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray_text_color,
  },
  IconClose: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    top: -15,
  },
  ModalView: {
    backgroundColor: Colors.white_text_color,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ShadowStyleModalTwo: {
    padding: SH(2),
    width: '100%',
  },
  AllPaddingModal: {
    paddingTop: SH(30),
    paddingBottom: SH(15),
    paddingHorizontal: SH(15),
    borderRadius: 100,
  },
  ModalText: {
    textAlign: 'center',
    color: Colors.black_text_color,
    fontSize: SF(22),
    fontFamily: Fonts.Montserrat_Regular,
  },
  MarginRightView: {
    width: '48%'
  },
  Marginright: {
    width: '48%'
  },
  input: {
    fontFamily: Fonts.Montserrat_Regular,
    // height: 40,
    width: '100%',
    fontSize: SF(17),
  },
  ButtonsetModleTwoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: SH(20)
  },
  spaceview: {
    paddingTop: SH(12),
  },
  InputUnderLine: {
    backgroundColor: Colors.white_text_color,
    width: Platform.OS === 'ios' ? '100%' : '100%',
    height: SH(50),
    paddingRight: SH(20),
    borderRadius: 7,
    flexDirection: 'row',
    fontFamily: Fonts.Montserrat_Regular,
    width: '100%',
    backgroundColor: Colors.white_text_color,
    shadowColor: Colors.gray_text_color,
    shadowOffset: {
      width: 0,
      height: Platform.OS === 'ios' ? 2 : 5,
      minHeight: '100%',
    },
    shadowOpacity: 1,
    shadowRadius: Platform.OS === 'ios' ? 2 : 50,
    elevation: Platform.OS === 'ios' ? 1 : 6,
    overflow: 'hidden',
    borderRadius: 7,
  },
  InputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  TextPasswored: {
    color: Colors.black_text_color,
    fontFamily: Fonts.Montserrat_Regular,
    width: '100%',
    fontSize: SF(16),
  },
  SingleButtonStyles: {
    borderColor: Colors.theme_background_brink_pink,
    backgroundColor: Colors.white_text_color,
    borderWidth: 1,
  },
  IconAndTextFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  SingleButtonText: {
    color: Colors.theme_background_brink_pink
  }
});