import React, { useMemo } from "react";
import { Text, View, Image } from "react-native";
import { LibraryStyles } from '../../styles';
import { SH } from '../../utils';
import { Lottie, Spacing } from '../../components';
import images from "../../index";
import { useTranslation } from "react-i18next";
import { useTheme } from '@react-navigation/native';
import AnimatedLottieView from "lottie-react-native";

const LibararyTab = () => {
    const { t } = useTranslation();
    const { Colors } = useTheme();
    const LibraryStyle = useMemo(() => LibraryStyles(Colors), [Colors]);

    return (
        <View>
            <Spacing space={SH(40)} />
            <View style={LibraryStyle.ImageViewStyle}>
                <View>
                    <View style={LibraryStyle.ImageCenter}>
                        <AnimatedLottieView source={images.DownloadAnim} style={
                            {
                                width: SH(150),
                                height: SH(150),
                            }
                        } autoPlay loop/>
                    </View>
                    <Spacing space={SH(64)} />
                    <Text style={LibraryStyle.NotDownloadTextStyl}>{t("Not_Downloaded")}</Text>
                    <Spacing space={SH(25)} />
                    <Text style={LibraryStyle.NotDownloadTextStylTwo}>{t("Not_Downloaded_2")}</Text>
                </View>
            </View>
        </View>
    );
};
export default LibararyTab;
