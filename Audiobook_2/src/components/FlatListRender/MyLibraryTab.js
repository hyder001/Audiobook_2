import React, { useMemo, useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { HomeStyles } from '../../styles';
import { SH, SW, MyLibraryData, SF, Fonts } from '../../utils';
import { Spacing, VectorIcons, MyLibraryDataView, NewRealseVideoView } from '../../components';
import { useTranslation } from "react-i18next";
import { useNavigation, useTheme } from '@react-navigation/native';
import { RouteName } from "../../routes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyLibraryTab = (props) => {
    const { onPress, Data } = props;
    const { t } = useTranslation();
    const navigation = useNavigation();
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);
    const savedbooksmargin = SH(26);
    const lastplaybackmargin = SH(10);
    const [trackData, setTrackData] = useState(null);

    useEffect(() => {
        const getTrackData = async () => {
            try {
                const value = await AsyncStorage.getItem('musicPlaybackTrackData');
                if (value !== null) {
                    setTrackData([JSON.parse(value)]);
                }
            } catch (error) {
                console.log(error);
            }
        };
        getTrackData();
    }, []);

    return (
        <View>
            {trackData && trackData.length > 0 &&
                <View>
                    <Text style={{
                        fontFamily: Fonts.Montserrat_Medium,
                        fontSize: SH(20),
                        color: Colors.white_text_color,
                        marginLeft: SH(20),
                        marginTop: SH(30),
                    }}>{t('Last_Playback')}</Text>
                    <Spacing space={SH(20)} />
                    <FlatList
                        data={trackData}
                        scrollEnabled={false}
                        renderItem={({ item }) => (<NewRealseVideoView margin={lastplaybackmargin} onPress={() => navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN, { trackData: item })} item={item} />)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={HomeStyle.FlatListStyles}
                    />
                </View>
            }
            {Data.length > 0 &&
                <View>
                    <Text style={{
                        fontFamily: Fonts.Montserrat_Medium,
                        fontSize: SH(20),
                        color: Colors.white_text_color,
                        marginTop: SH(30),
                        marginLeft: SH(20),
                    }}>{t('Saved_Audiobooks')}</Text>
                    <Spacing space={SH(20)} />
                    <FlatList
                        data={Data}
                        horizontal
                        scrollEnabled={false}
                        renderItem={({ item }) => (<NewRealseVideoView margin={savedbooksmargin} onPress={() => navigation.navigate(RouteName.MUSIC_DETAILS_SCREEN, { trackData: item })} item={item} />)}
                        keyExtractor={item => item.id}
                        contentContainerStyle={HomeStyle.FlatListStyles}
                    />
                </View>
            }
            {(!trackData || trackData.length === 0) && Data.length === 0 &&
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        fontFamily: Fonts.Montserrat_Medium,
                        fontSize: SH(20),
                        color: Colors.white_text_color,
                        marginTop: SH(90),
                        textAlign: 'center',
                        paddingHorizontal: SH(20),
                        alignSelf: 'center',
                    }}>{t('No_Saved_Audiobooks')}</Text>
                    <View style={{
                        width: SW(40),
                        height: SW(40),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: SH(1),
                        borderColor: Colors.white_text_color,
                        borderRadius: SH(100),
                        marginTop: SH(20),
                    }}
                    ><VectorIcons icon="FontAwesome" name="bookmark" size={SF(20)} color={Colors.white_text_color} />
                    </View>
                </View>
            }
        </View>
    );
};
export default MyLibraryTab;
