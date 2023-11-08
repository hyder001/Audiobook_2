import {Fonts, SH, SW, SF, widthPercent } from '../../utils';
import { StyleSheet } from 'react-native';

export default SwiperStyle = (Colors) => StyleSheet.create({
  ButtonCircle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleStyles: {
    color: Colors.white_text_color,
    fontSize: SF(20),
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    paddingHorizontal: SH(15),
    position: 'absolute',
    top: SH(100),
    width: '100%',
  },
  ButtonStyle: {
    width:widthPercent(90),
    marginRight:SH(10)
  },
  Textstyle: {
    paddingHorizontal: SH(10),
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    textAlign: 'center',
    fontSize: SF(14),
    position: 'absolute',
    bottom: SH(120),
    width: '100%'
  },
  ScrollViewStyle: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
  },
  AnimationViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  NextTextStyle: {
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(14),
    color: Colors.white_text_color,
  },
  ActiveDotStyles: {
    width: SW(14),
    height: SH(16),
    borderRadius: SH(100),
    backgroundColor: Colors.white_text_color,
  },
  DotSwiperStyle: {
    width: SW(14),
    height: SH(16),
    borderRadius: SH(100),
    backgroundColor: Colors.paregraph_teaxt_read_more,
  },
  iconbgcolorview: {
    width: SW(30),
    height: SH(20),
    borderRadius: SH(200),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: SH(10),
    right: SH(10),
  },
  ChangeBgcolor: {
    height: '100%',
    backgroundColor: '#222222',
  }
});