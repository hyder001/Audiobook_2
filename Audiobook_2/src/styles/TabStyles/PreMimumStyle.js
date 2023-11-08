import { StyleSheet } from 'react-native';
import { SF, Fonts, SW, SH, Colors, heightPercent, widthPercent } from '../../utils';

export default StyleSheet.create({
    MainView: {
        backgroundColor: "#252525",
        width: '100%',
    },
    MinViewbgColor: {
        height: '100%',
        backgroundColor: '#252525',
        width: '100%',
        alignContent: 'center',
        alignSelf: 'center',
    },
    MoviewheightSet: {
        height: heightPercent(30),
        position: 'relative'
    },
    toolbar: {
        width: '100%'
    },
    RecipeNameStyle: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(20),
        color: Colors.white_text_color,
        position: 'absolute',
        width: '100%',
        bottom: SH(0),
        left: SH(40),
        textAlign: 'left'
    },
    WatchBtn: {
        paddingHorizontal: SH(15)
    },
    VideoInfoBox: {
        paddingHorizontal: SH(15)
    },
    TitleText: {
        fontFamily: Fonts.Poppins_Medium,
        fontSize: SF(17),
        color: Colors.white_text_color,
    },
    VideoSummeryStyle: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(14),
        color: Colors.gray_text_color,
        lineHeight: SH(20)
    },
    BtnTextStyle: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(12),
        color: Colors.chinese_silver,
        paddingTop: SH(5)
    },
    BtnCenter: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SW(80),
        position: 'relative',
        zIndex: 1
    },
    BtnTextStyleBox: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    VideoTab: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: SW(15)
    },
    VideoTabText: {
        color: Colors.white_text_color,
        fontSize: SF(16),
        marginRight: SW(15),
        lineHeight: SH(40),
        fontFamily: Fonts.Poppins_Regular
    },
    activeBorder: {
        borderColor: Colors.theme_background,
        borderBottomWidth: SW(1),
        color: Colors.theme_background
    },
    VedioPlayMainBox: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingHorizontal: SH(15),
        marginBottom: SH(10),
    },
    VedioImgStyle: {
        width: SW(100),
        height: SH(70),
        borderRadius: SW(7),
        overflow: 'hidden',
        position: 'relative',
    },
    LinearGradientBottom: {
        position: 'absolute',
        bottom: SH(0),
        width: '100%',
        height: SH(50),
        zIndex: 11
    },
    VedioPlayIconStyle: {
        position: 'absolute',
        bottom: SH(10),
        left: SW(10),
        zIndex: 11
    },
    PosiRelastv: {
        position: 'relative',
        zIndex: 1
    },
    VedioTitleStyle: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(16),
        color: Colors.white_text_color,
    },
    VedioInfochild: {
        fontFamily: Fonts.Poppins_Regular,
        fontSize: SF(14),
        color: Colors.chinese_silver,
    },
    RoundStyle: {
        width: SW(4),
        height: SW(4),
        borderRadius: SW(2),
        backgroundColor: Colors.white_text_color,
        marginHorizontal: SH(10)
    },
    FlexRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    VedioTitleBox: {
        paddingHorizontal: SH(10),
        width: widthPercent(55)
    },
    DownloadIconBox: {
        width: SW(30),
        height: SH(30),
        position: 'relative',
        zIndex: 99
    },
    TitleText_Label: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.white_text_color,
        fontSize: SF(18),
        paddingLeft: SH(10)
    },
    BestSportFlatFunStyle: {
        paddingHorizontal: SW(10)
    },
    ModalCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ScrollViewStyle: {
        width: '100%',
    },
    ModalViewBox: {
        backgroundColor: '#252525',
        alignSelf: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
    },
    ModalView: {
        position: 'relative',
        alignSelf: 'center',
        alignContent: 'center',
        width: '100%',
    },
    LoginTextStyle: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.white_text_color,
        fontSize: SF(18),
    },
    FlexRowJusSpBTn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    TopModalHead: {
        width: '100%',
        paddingHorizontal: SH(20),
        paddingVertical: SH(15)
    },
    ModalButtonClose: {
        position: 'relative',
        zIndex: 1,
        width: SW(30),
        height: SH(20)
    },
    LoginBTnBox: {
        paddingHorizontal: SH(20),
        backgroundColor: Colors.blue_color,
        paddingVertical: SH(5),
        borderRadius: SH(7)
    },
    SubScribeHeadingTextStyle: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(20),
        paddingHorizontal: SH(20),
        textAlign: 'center'
    },
    HeadingText: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.blue_jeans_color,
        fontSize: SF(17),
        textAlign: 'center',
        marginVertical: SH(5)
    },
    TableDataStyle: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.white_text_color,
        fontWeight: '400',
        fontSize: SF(14),
        marginVertical: SH(10),
        marginHorizontal: SH(5)
    },
    TableBorder: {
        borderWidth: SW(0.5),
        borderColor: Colors.gray_text_color
    },
    head: {
        textAlign: 'center'
    },
    PackagePriceBox: {
        borderWidth: SW(1),
        borderColor: Colors.gray_text_color,
        justifyContent: 'center',
        width: SW(100),
        marginRight: SH(10),
        alignSelf: 'center',
        padding: SH(8)
    },
    PackagePriceBoxActive: {
        borderWidth: SW(1),
        borderColor: Colors.white_text_color,
        justifyContent: 'center',
        width: SW(100),
        marginRight: SH(10),
        alignSelf: 'center',
        padding: SH(8)
    },
    PackageTitle: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.white_text_color,
        fontSize: SF(18),
    },
    PackageTitleActive: {
        fontFamily: Fonts.Poppins_Bold,
        color: Colors.blue_jeans_color,
        fontSize: SF(18),
    },
    PackagePriceStyle: {
        fontFamily: Fonts.Poppins_Medium,
        color: Colors.white_text_color,
        fontSize: SF(18),
    },
    PackagevalidateStyle: {
        fontFamily: Fonts.Poppins_Regular,
        color: Colors.white_text_color,
        fontSize: SF(14),
    },
    PackageBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    ContinueBtnBox: {
        paddingHorizontal: SH(15),
        position: 'absolute',
        bottom: SH(0),
        width: '100%',
        backgroundColor: Colors.theme_background,
        paddingVertical: SH(13),
    }
});