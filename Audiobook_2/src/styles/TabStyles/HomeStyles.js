import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, widthPercent } from '../../utils';

export default HomeStyles = (Colors) => StyleSheet.create({
  bgcolorset: {
    backgroundColor: Colors.theme_background
  },
  paginationContainer: {
    marginTop: SH(-10),
  },
  WidthSet: {
    width: '100%',
  },
  SearchScreenBorder: {
    marginHorizontal: SH(20),
    backgroundColor: Colors.search_color,
    height: SH(47),
    borderRadius: SH(210)
  },
  SearchInputBorder: {
    backgroundColor: 'transparent',
    borderWidth: SH(0),
    color: Colors.gray_text_color,
  },
  BorderWidth: {
    borderWidth: SH(1),
    width: '100%',
    borderColor: Colors.theme_background,
    height: SH(55),
    borderRadius: SH(10),
  },
  paginationDot: {
    width: SW(12),
    height: SW(12),
    borderRadius: SH(100),
  },
  setdotactive: {
    width: SW(17),
    height: SW(17),
    borderRadius: SH(100),
  },
  ImageHeight: {
    width: '100%',
    height: SH(190),
    borderRadius: SH(10),
    marginRight: SH(20)
  },
  ImageStyleWith: {
    height: SW(30),
    width: SW(30),
  },
  ImageWidthView: {
    height: SW(30),
    width: SW(30),
  },
  ImageStylesView: {
    height: SW(50),
    width: SW(50),
    borderRadius: SH(200)
  },
  FlatListStyles: {
    paddingHorizontal: SH(25),
  },
  ImageMinViewStyles: {
    marginRight: SH(50),
    width: SW(65),
    flex: 1,
  },
  ImageMinViewStylesTwo: {
    marginRight: SH(50),
    width: SW(65),
    flex: 1,
    marginBottom: SH(15)
  },
  TextCenter: {
    textAlign: 'center',
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(12),
    color: Colors.white_text_color,
    opacity: 0.8,
  },
  ListingTextStyle: {
    fontFamily: Fonts.Montserrat_Medium,
    fontSize: SF(18),
    color: Colors.white_text_color,
    paddingLeft: SH(5)
  },
  ListingTextStyle2: {
    fontFamily: Fonts.Montserrat_Regular,
    marginTop: SH(5),
    fontSize: SF(10),
    color: Colors.white_text_color,
    paddingLeft: SH(5),
    opacity: 0.8,
    textAlign:'left'
  },

  FlexTextWithIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  FlexTextIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SH(20),
    paddingTop: SH(20)
  },
  FlexTextIconViewSD: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: SH(20),
    paddingRight:SH(20),
    paddingLeft:SH(10),  
  },
  BorderViewTop: {
    marginHorizontal: SH(20),
    borderTopWidth: SH(1),
    borderColor: Colors.white_text_color,
    opacity: 0.3,
    marginTop: SH(20)
  },
  ImageStylesListing: {
    height: SW(150),
    width: SW(80),
    resizeMode: 'cover',
  },
  ImageStylesListingTwo: {
    height: SW(100),
    width: SW(100),
    borderRadius: SH(10),
    position: 'relative',
    zIndex: 2321,
  },
  LibrrayImagtwo: {
    height: SW(120),
    width: SW(120),
    borderRadius: SH(10),
    position: 'relative',
    zIndex: 2321,
  },
  ImageStylesListingTop: {
    height: SW(100),
    width: SW(100),
    borderRadius: SH(10),
  },
  DigitStyle: {
    zIndex: 23,
    position: 'absolute',
    color: Colors.white_text_color,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(23)
  },
  DigitViewStyle: {
    position: 'absolute',
    backgroundColor: Colors.theme_background_second,
    height: SW(40),
    bottom: SH(-20),
    left: SH(-20),
    zIndex: 97,
    width: SW(40),
    borderRadius: SH(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  PostionAbsoluteMusic: {
    position: 'absolute',
    top: SH(10),
  },
  ImagePostionAbsolute: {
    height: SW(60),
    width: SW(60),
    borderRadius: SH(200),
  },
  LibrrayImage: {
    height: SW(60),
    width: SW(60),
    borderRadius: SH(200),
  },
  PaddingRight: {
    marginRight: SH(60),
  },
  WidthDownload: {
    width: widthPercent(45),
    marginRight: SH(20),
    marginBottom: SH(20)
  },
  TopMusicMinView: {
    marginRight: SH(15),
    marginBottom: SH(25),
  },
  PostionAboluteView: {
    height: SW(100),
    width: SW(100),
    borderRadius: SH(200),
    position: 'absolute',
    left: SH(80),
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6
  },
  LibraryPoastion: {
    height: SW(100),
    width: SW(100),
    borderRadius: SH(200),
    position: 'absolute',
    left: SH(95),
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6
  },
  LotiiAnimation: {
    width: SW(90),
    position: 'absolute',
    bottom: SH(0),
    right: SH(0),
  },
  LotiiAnimationstWO: {
    width: SW(110),
  },
  PaginationAbsolute: {
    position: 'absolute',
    bottom: SH(0),
    right: SH(0),
  },
  PaginationAbsoluteStwo: {
    position: 'absolute',
   height:SH(280),
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center'
  },
  PostionAboluteViewLottie: {
    height: SW(100),
    width: SW(100),
    borderRadius: SH(200),
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 123,
  },
  LinerViewLine: {
    height: SH(4),
    width: SW(45),
    backgroundColor: Colors.theme_background_second,
    borderTopLeftRadius: SH(100),
    borderBottomLeftRadius: SH(100)
  },
  LinerViewLineGray: {
    height: SH(4),
    width: SW(45),
    backgroundColor: Colors.gray_text_color,
    borderTopRightRadius: SH(100),
    borderBottomRightRadius: SH(100)
  },
  LinerViewLineT: {
    height: SH(4),
    width: widthPercent(10),
    backgroundColor: Colors.theme_background_second,
    borderTopLeftRadius: SH(100),
    borderBottomLeftRadius: SH(100)
  },
  LinerViewLineGrayT: {
    height: SH(4),
    width: widthPercent(10),
    backgroundColor: Colors.gray_text_color,
    borderTopRightRadius: SH(100),
    borderBottomRightRadius: SH(100)
  },
  FlexRowDirection: {
    flexDirection: 'row',
    left: SH(5),
    bottom: SH(3),
    position: 'relative',
    zIndex: 43539,
  },
  EpisodeText: {
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(13),
    color: Colors.white_text_color,
  },
  LongTextStyle: {
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(16),
    color: Colors.white_text_color,
    textAlign:'left'
  },
  EpisodeTextDif: {
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(13),
    paddingTop: SH(2),
    color: Colors.paregraph_teaxt_read_more,
    textAlign:'left'
  },
  TopAudioForYouMinView: {
    width: '100%',
    marginBottom: SH(10),
    paddingTop: SH(10),
    overflow: 'hidden'
  },
  LibrrayView: {
    width: '100%',
    marginBottom: SH(10),
    paddingTop: SH(10),
  },
  FlexRowImageView: {
    flexDirection: 'row',
  },
  WidthImageView: {
    width: '25%'
  },
  TextViewWidth: {
    width: '75%',
    paddingLeft: SH(20),
  },
  TextColorWhite: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(16),
    lineHeight: SH(17),
    flexDirection: 'row',
    width: '100%',
  },
  FlexRowStyleDigit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  TextWidthSixcty: {
    width:'67%'
  },
  RatingTextStyle: {
    width: SW(60),
    height: SW(25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: SH(0),
  },
  TextColorWhiteRating: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(14),
    fontWeight: '700',
    paddingRight: SH(5)
  },
  TextLightGray: {
    color: Colors.light_gray_text_color,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(14),
    paddingLeft: SH(10),
  },
  TextLightLibrary: {
    color: Colors.tab_color,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(14),
  },
  TextLightLibraryTwo: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(14),
  },
  FlexRowIconText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  TextColorWhites: {
    color: Colors.paregraph_teaxt_read_more,
    fontSize: SF(15),
    fontFamily: Fonts.Montserrat_Regular,
  },
  ReadMoreTextStyle: {
    color: Colors.theme_background_second,
    fontFamily: Fonts.Montserrat_Regular,
    fontSize: SF(16),
  },
  CommonFlatlistBox: {
    height: SH(170),
    width: SH(155),
    position: 'relative',
    zIndex: 99999,
    borderRadius: SW(7),
    marginVertical: SH(10),
    marginHorizontal: SH(3),
  },
  ImageBoxCommonStyleBox: {
    width: '100%',
    height: SH(170)
  },
  ImageBoxStyle: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  ImageStyle: {
    height: SH(150),
    width: SW(130),
    borderRadius: SH(10)
  }
});