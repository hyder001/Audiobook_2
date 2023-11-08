import React, { useState, useMemo } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView, TouchableOpacity } from "react-native";
import { SettingStyle, Style, LanguageStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Spacing, Switchs, VectorIcons, ModalLanguage } from '../../components';
import { SH, SF } from '../../utils';

const SettingStylesScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { Colors } = useTheme();
  const SettingStyles = useMemo(() => SettingStyle(Colors), [Colors]);

  const { t } = useTranslation();
  let englishLanguage = t("English");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectLabel, setSelectLabel] = useState(englishLanguage);

  const changeLang = (e) => {
    setSelectLabel(e)
  }

  return (
    <>
      <View style={[Style.MinViewScreen]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={Style.contentContainerStyle}>
          <KeyboardAvoidingView enabled>
            <View style={SettingStyles.KeyBordTopViewStyle}>
              <View style={SettingStyles.MinFlexView}>
                <Spacing space={SH(20)}/>
                <Text style={LanguageStyles.Settingtext}>{t("Select_Your_Language")}</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={LanguageStyles.SettingStyle}>
                  <Text style={LanguageStyles.SelectText}>{selectLabel}</Text>
                  <View style={LanguageStyles.DropDownIcon}>
                    <VectorIcons icon="Feather" name="chevron-down" color={Colors.black_text_color} size={SF(25)} /></View>
                </TouchableOpacity>
                <ModalLanguage modalVisible={modalVisible}
                  setModalVisible={() => {
                    setModalVisible(!modalVisible);
                  }}
                  close={() => setModalVisible(!modalVisible)}
                  OnClose={() => setModalVisible(false)}
                  changeLang={changeLang}
                />
                <Spacing space={SH(25)} />
                <View style={SettingStyles.RightiConMinview}>
                  <View style={SettingStyles.BodyTextWidth}>
                    <Text style={SettingStyles.StandardRecommeDtext}>{t("Synce_Changes")}</Text>
                  </View>
                  <View>
                    <VectorIcons
                      icon="AntDesign"
                      size={SF(30)}
                      name="check"
                      style={SettingStyles.ChekIconStyle}
                    />
                  </View>
                </View>
                <Spacing space={SH(15)} />
                <Text style={SettingStyles.CellularDataText}>{t("Video_Qualitytext")}</Text>
                <View style={SettingStyles.RightiConMinviewtwo}>
                  <View>
                    <Text style={SettingStyles.StandardRecommeDtext}>{t("Standard_Qualitytext")}</Text>
                    <Text style={SettingStyles.DownloadFasterText}>{t("Downnloads_Qualitytext")}</Text>
                  </View>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};
export default SettingStylesScreen;
