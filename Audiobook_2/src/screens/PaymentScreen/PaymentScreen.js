import React, { useMemo } from "react";
import { Text, View, Image, ScrollView, FlatList, KeyboardAvoidingView, TouchableOpacity} from "react-native";
import { PaymentStyle } from '../../styles';
import images from '../../index';
import { RouteName } from '../../routes';
import { Fonts, Paymentdata, SF, SH } from "../../utils";
import { Container, PaymentListData, Spacing } from "../../components";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';

const MangePaymentMethode = (props) => {
  const { navigation, index } = props;
  const { t } = useTranslation();
  const { Colors } = useTheme();
  const PaymentStyles = useMemo(() => PaymentStyle(Colors), [Colors]);
  packageText = "";
  price= 0;
  switch (index) {
    case 1:
      packagetext = t("packagevalidate_1");
      price = 9.99;
      break;
    case 2:
      packagetext = t("packagevalidate_2");
      price = 19.99;
      break;
    case 3:
      packagetext = t("packagevalidate_3");
      price = 29.99;
      break;
    default:
      packagetext = t("packagevalidate_1");
      price = 9.99;
      break;
  }


  return (
    <Container>
      <View style={PaymentStyles.MinStyleViewPhotograpgy}>
        <ScrollView>
          <KeyboardAvoidingView enabled>
            <View style={PaymentStyles.MinFlexView}>
              <View style={PaymentStyles.MinViewSigninScreen}>
                <View>
                  <Text style={PaymentStyles.CardTextStyle21}>{t("Payment_Info")}</Text>
                  <TouchableOpacity style={[PaymentStyles.FlexRowCreditCardTwo, PaymentStyles.BottomBorder]} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <View style={PaymentStyles.IconSetBorderWidth}>
                      <Image source={images.AniPayLogo} resizeMode='center' style={PaymentStyles.SetbgImage} />
                    </View>
                    <Text style={PaymentStyles.CreditCardText}>{t("AniPay")}</Text>
                  </TouchableOpacity>
                  <Text style={PaymentStyles.CardTextStyleTwo}>{t("UPI_Label")}</Text>
                  <TouchableOpacity style={PaymentStyles.FlexRowCreditCardTwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <View style={PaymentStyles.IconSetBorderWidth}>
                      <Image source={images.ApplePayLogo} resizeMode='center' style={PaymentStyles.SetbgImage} />
                    </View>
                    <Text style={PaymentStyles.CreditCardText}>{t("ApplePay")}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={PaymentStyles.FlexRowCreditCardTwo} onPress={() => navigation.navigate(RouteName.PAYMENT_SUCCESSFULLY)}>
                    <View style={PaymentStyles.IconSetBorderWidth}>
                      <Image source={images.GooglePay} resizeMode='center' style={PaymentStyles.SetbgImage} />
                    </View>
                    <Text style={PaymentStyles.CreditCardText}>{t("GooglePay")}</Text>
                  </TouchableOpacity>
                  <Spacing space={60} />
                  <View style={{
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingHorizontal: SH(20),
                    borderRadius: SH(20),
                    height: SH(200),
                    backgroundColor: Colors.white_text_color,
                  }}>
                  <Text style={{
                    color: Colors.theme_background,
                    fontSize: 18,
                    fontFamily: Fonts.Poppins_Bold,
                    alignSelf: 'center',
                    paddingTop: SH(20),
                  }}>{t("Sel_package")+ " " + packagetext}</Text>
                  <Spacing space={30} />
                  {/*addpayment price floating at right and add payment method at left*/}
                  <View style={{
                      width: '100%',
                      borderBottomWidth: SH(2),
                      borderBottomColor: Colors.theme_background,
                  }}>
                  <Text style={
                    {
                      color: Colors.theme_background,
                      fontSize: SF(18),
                      marginTop: SH(40),
                      marginBottom: SH(10),
                      fontFamily: Fonts.Poppins_Bold,
                      alignSelf: 'flex-end',
                    }
                  }>{price + " ₼"}</Text>
                  </View>
                  </View>

                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Container>
  );
};
export default MangePaymentMethode;