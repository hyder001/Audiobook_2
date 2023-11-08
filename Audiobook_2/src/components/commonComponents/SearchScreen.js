import React, { useState,useMemo, useEffect } from 'react';
import { TouchableOpacity,Image } from "react-native";
import { SF,SH, Colors, Fonts } from '../../utils';
import { Input, VectorIcons } from '../../components';
import { HomeStyles } from '../../styles';
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import { SearchTab } from '../../screens/Home/Tab/SearchTab';
import images from '../../images';

const SearchScreenset = (props) => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
  
    const { input,setInput,FAQ } = props;


    
  
    return (
      <TouchableOpacity style={{
        width: '100%',
        alignSelf: 'center',
        position: 'absolute', // Make the child absolute
        top: '50%', // Vertically center it
        transform: [{ translateY: -SH(23.5) }] // Adjust for half of the input height
      }}>
        <Input
          placeholder={!FAQ ? t("Search_AudioBook") : t("Search_FAQ")}
          onChangeText={(text) => setInput(text)}
          value={input}
          placeholderTextColor={Colors.gray_text_color}
          maxLength={20}
          leftIcon={<Image source = {images.SearchLogo} style={{
            width: SF(20),
            height: SF(20),
            resizeMode: 'contain',
            opacity: 0.5,
            marginLeft: SF(7),
          }} />}
          inputStyle={{
            backgroundColor: 'transparent',
            borderWidth: SH(0),
            color: Colors.gray_text_color,
            fontSize: SF(12),
          }}
        />
      </TouchableOpacity>
    );
  };
  
export default SearchScreenset;
