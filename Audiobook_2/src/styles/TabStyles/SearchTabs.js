import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors, widthPercent } from '../../utils';

export default SearchTabs = (Colors) => StyleSheet.create({
  SearchScreenBorder: {
    width: '100%',
    alignSelf:'center',
    color: Colors.gray_text_color,
    backgroundColor: Colors.white_text_color,
    height: SH(45),
    borderRadius: SH(10),
  },
  MinViewConrtent: {
    paddingHorizontal: SH(20),
    width: '100%'
  },
  TopSearchText: {
    fontWeight: 'bold',
    color: Colors.white_text_color,
    fontFamily: Fonts.Montserrat_Bold,
    fontSize: SF(19)
  },
  TextView: {
    marginRight: SH(20),
    paddingHorizontal: SH(20),
    paddingVertical: SH(5),
    borderWidth: SH(1),
    borderColor: Colors.white_text_color,
    borderRadius: SH(200),
    marginBottom: SH(15)
  },
  HellowTextStyle: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(15)
  },
  ImageStyles: {
    height: SH(120),
    width: widthPercent(27),
    borderRadius: SH(10),
    marginRight: SH(20),
    opacity: 0.4,
  },
  ImageViewStyles: {
    marginBottom: SH(20)
  },
  TextImageUp: {
    color: Colors.white_text_color,
    fontFamily: Fonts.Poppins_Medium,
    fontSize: SF(18),
  },
  TextViewStyle: {
    height: SH(120),
    width: widthPercent(27),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: SH(5)
  },
});