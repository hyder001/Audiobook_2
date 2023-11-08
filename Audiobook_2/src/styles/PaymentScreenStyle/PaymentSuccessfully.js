import { StyleSheet } from 'react-native';
import { SF, SH, SW, Fonts } from '../../utils';

export default Payment = (Colors) => StyleSheet.create({
  MinstyleViewPhotograpgy: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor: Colors.theme_background,
  },
  MinViewSigninScreen: {
    width: '90%',
    marginHorizontal: '5%',
  },
  Imagecebter: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: SH(30)
  },
  PaymentSuccesfullImg: {
    width: SW(150),
    height: SH(150),
  },
  TextCenterView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  TextCenterPayment: {
    textAlign: 'center',
    fontSize: SF(25),
    lineHeight: SH(30),
    fontWeight: '700',
    color: Colors.white_text_color,
  },
  TextCenterPaymentTwo: {
    textAlign: 'center',
    fontSize: SF(16),
    paddingHorizontal: SH(5),
    lineHeight: SH(20),
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    borderBottomColor: Colors.white_text_color,
    borderBottomWidth: SH(1),
    borderStyle: 'dashed',
    paddingVertical: SH(20),
    fontWeight: '600',
  },
  FlexRowcoffiText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: SH(1),
    borderStyle: 'dashed',
    paddingBottom: SH(10),
    marginBottom: SH(10),
    borderBottomColor: Colors.paregraph_teaxt_read_more,
  },
  TotalQAmountPaid: {
    textAlign: 'center',
    fontSize: SF(12),
    color: Colors.paregraph_teaxt_read_more,
    lineHeight: SH(30),
    fontFamily: Fonts.Poppins_Medium,
    fontWeight: '600',
    paddingTop:SH(10)
  },
  PriceTextSet: {
    textAlign: 'center',
    fontSize: SF(12),
    color: Colors.white_text_color,
    lineHeight: SH(30),
    fontWeight: '600',
    paddingTop:SH(5)
  },
  FlexRowcoffiTextTwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SH(10),
    marginBottom: SH(10),
  },
  MainViewPaymentSuccess: {
    width: '100%',
    height: 'auto',
  }
});