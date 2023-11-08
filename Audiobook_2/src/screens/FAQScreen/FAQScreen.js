import React, { useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, KeyboardAvoidingView, FlatList ,Text} from "react-native";
import { HelpScreenStyles, Style } from '../../styles';
import { Spacing,FAQData,Search } from '../../components';
import { Faqdataset, SH } from '../../utils';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from "react-native-gesture-handler";
import VectorIcons from "../../components/commonComponents/VectoreIcons";

const FAQScreen = () => {
    const navigation = useNavigation();
    const { Colors } = useTheme();
    const HelpScreenStyle = useMemo(() => HelpScreenStyles(Colors), [Colors]);
  
    return (
        <View style={HelpScreenStyle.MinViewScreen}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={Style.ScrollViewStyles}>
                    <View style={HelpScreenStyle.MinFlexView}>
                        <View style={HelpScreenStyle.MinViewAllContent}>
                            <Spacing space={SH(30)} />
                            <View style={{
                                paddingHorizontal: SH(50),
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: SH(20),
                                    marginRight: SH(20),
                                    color: Colors.white_text_color,
                                }} onPress={()=> navigation.goBack()}>Geri</Text>
                                <View style={[
                                    HelpScreenStyle.BorderWidth,{
                                    borderColor: "#4D4757",
                                    borderWidth: SH(1),
                                    color: Colors.gray_text_color,
                                    backgroundColor: "rgba(77, 71, 87, 0.5)",
                                    }
                                ]}>
                                    <Search FAQ={true}/>
                                </View>
                            </View>
                            <Spacing space={SH(40)} />
                            <FlatList
                                data={Faqdataset}
                                scrollEnabled={false}
                                renderItem={({ item }) => (<FAQData
                                    item={item}
                                />)}
                                keyExtractor={item => item.id}
                                showsHorizontalScrollIndicator={false}
                                style={HelpScreenStyle.SetFlex}
                            />
                        </View>
                        <Spacing space={SH(50)} />
                    </View>
            </ScrollView>
        </View>
    );
};
export default FAQScreen;
