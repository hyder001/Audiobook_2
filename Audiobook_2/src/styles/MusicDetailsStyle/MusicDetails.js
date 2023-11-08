import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors, widthPercent } from '../../utils';

export default MusicDetailsStyle = (Colors) => StyleSheet.create({
  ImageStyles: {
    height: SH(390),
    width: '100%',
    resizeMode: 'contain', // 'cover', 'contain', 'stretch', 'repeat', 'center'
    borderRadius: SH(10)
  },
  PaddingHoriZontal: {
    paddingHorizontal: SH(20),
  },
  Aerrowleft: {
    position: 'absolute', 
    left: SH(30), 
    zIndex: 234, 
    top: SH(30)
  },
  TextStyleNine: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
    paddingRight: SH(10),
    paddingTop: SH(5),
  },
  ListenViewStyle: {
    color: Colors.paregraph_teaxt_read_more,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    paddingLeft: SH(10),
    paddingTop: SH(2)
  },
  FlexRowText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  FlexRowMinView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  RatingTextStyle: {
    width: SW(60),
    height: SW(25),
    backgroundColor: Colors.rating_color,
    borderRadius: SH(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextColorWhiteRating: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    fontWeight: '700',
    paddingRight: SH(5)
  },
  TextLightGray: {
    color: Colors.light_gray_text_color,
    fontFamily: Fonts.Poppins_Regular,
    fontSize: SF(14),
    paddingLeft: SH(10),
  },
  FlexRowMinViewMinStar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  BookmarksView: {
    width: SW(50),
    height: SW(50),
    borderRadius: SH(10),
    borderWidth: SH(1),
    borderColor: Colors.white_text_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  PlayButtonWidth: {
    width: '80%'
  },
  PlayButtonWidthTwo: {
    width: '20%'
  },
  FlexRowMinBookMark: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  LoremTextStyle: {
    color: Colors.paregraph_teaxt_read_more,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17)
  },
  TabViewMin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  TextViewColorActive: {
    width: widthPercent(40),
    borderWidth: SH(1),
    height: SH(35),
    borderColor: Colors.theme_background_second,
    borderRadius: SH(200),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextViewColor: {
    width: widthPercent(40),
    borderWidth: SH(1),
    borderColor: Colors.white_text_color,
    borderRadius: SH(200),
    height: SH(35),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextColorWhite: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
  },
  TextColorWhiteTwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15),
    paddingLeft: SH(10)
  },
  OneDigitYTextView: {
    borderWidth: SH(1),
    paddingHorizontal: SH(20),
    width: '25%',
    flexDirection: 'row',
    height: SH(36),
    paddingTop: SH(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(200),
    borderColor: Colors.paregraph_teaxt_read_more,
  },
  OneDigitYTextViewTwo: {
    borderWidth: SH(1),
    paddingHorizontal: SH(20),
    width: '20%',
    flexDirection: 'row',
    height: SH(40),
    paddingTop: SH(3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(200),
    marginLeft: SH(10),
    borderColor: Colors.theme_background_second,
  },
  FlexRowMinViewDownload: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  IconBorderStyle: {
    height: SH(44),
    width: SW(40),
    borderWidth: SH(1),
    borderColor: Colors.paregraph_teaxt_read_more,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SH(200)
  },
  IconViewWidth: {
    width: '20%',
  },
  TextViewWidth: {
    width: '80%'
  },
  FlexRowTextWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SH(20),
    borderBottomWidth: SH(1),
    borderBottomColor: Colors.paregraph_teaxt_read_more,
    paddingBottom: SH(20)
  },
  HellowTextStyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17)
  },
  FlexIconTexts: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  SecondTextStyle: {
    color: Colors.paregraph_teaxt_read_more,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    paddingLeft: SH(10)
  },
  ImageStryles: {
    height: SH(20),
    width: SW(20),
    tintColor: Colors.gold_color
  },
  GoldTextStyle: {
    color: Colors.gold_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(17),
    paddingLeft: SH(5)
  },
  FlexRowGoldCView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  FlexDirtectiong: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  TextStyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(20)
  },
  GotoSlowView: {
    borderWidth: SH(1),
    borderColor: Colors.paregraph_teaxt_read_more,
    paddingHorizontal: SH(15),
    paddingVertical: SH(5),
    borderRadius: SH(200)
  },
  GotoSlowText: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15)
  },
  PlayDigit: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15)
  },
  FlexRowVectorIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal:SH(30),
    paddingTop:SH(20)
  }
});