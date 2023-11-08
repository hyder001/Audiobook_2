
import { StyleSheet } from 'react-native';
import { Fonts, SF, SH, SW } from '../../utils';

export default Otpstyle = (Colors) => StyleSheet.create({
  ParegraPhotpBottom: {
    color: Colors.paregraph_teaxt_read_more,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(13),
    marginBottom: '8%',
    paddingRight: SH(10),
  },
  MinViewScreen: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.theme_background,
  },
  MinViewSecond: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  MinFlexView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  ScrollViewStyle: {
    height: 'auto',
    width: '100%',
  },
  paregraph: {
    color: Colors.paregraph_teaxt_read_more,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(11),
  },
  ResendTextBold: {
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '700',
    color: Colors.white_text_color,
  },
  FlexRowText: {
    flexDirection: 'row',
  },
  EnterSixDigitText: {
    fontSize: SF(30),
    textAlign: 'center',
    paddingBottom: SH(15),
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
  },
  OtpViewStyles: {
    width: '100%',
    height: SH(100)
  },
  CodeInputStyles: {
    width: SW(50),
    height: SH(51),
    padding: SH(0),
    borderWidth: 2.5,
    fontSize: SF(28),
    fontWeight: '700',
    borderRadius: 7,
    color: Colors.white_text_color,
    borderColor: Colors.white_text_color
  },
  buttonotp: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
