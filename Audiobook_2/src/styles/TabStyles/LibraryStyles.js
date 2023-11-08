import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors, widthPercent } from '../../utils';

export default  LibraryStyles = (Colors) => StyleSheet.create({
  TabViewMin: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SH(20)
  },
  LottieStyle: {
    height: SH(50),
    width: SW(50),
  },
  TextColorWhite: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(12),
  },
  TextViewColor: {
    width: widthPercent(40),
    height:SH(35),
    borderColor: Colors.white_text_color,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  TextViewColorActive: {
    width: widthPercent(40),
    borderBottomWidth: SH(2),
    height:SH(35),
    borderColor: Colors.theme_background_second,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ImageViewStyle: {
    height:'100%',
    width:'100%',
    paddingBottom:SH(100)
  },
  LibrrayImage: {
    height:SH(200),
    width:SW(250),
    borderRadius:SH(10)
  },
  NotDownloadTextStyl: {
    color:Colors.white_text_color,
    textAlign:'center',
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(19)
  },
  ImageCenter: {
    flexDirection:'row',
    justifyContent:'center',
    width:'100%',
    height:SH(100),
  },
  NotDownloadTextStylTwo: {
    color:Colors.paregraph_teaxt_read_more,
    textAlign:'center',
    fontFamily:Fonts.Poppins_Medium,
    fontSize:SF(13),
    paddingHorizontal:SH(30)
  },
});