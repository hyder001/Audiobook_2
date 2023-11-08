import React, { useMemo } from "react";
import ReadMore from 'react-native-read-more-text';
import { Text, TouchableOpacity, } from 'react-native';
import { useTranslation } from "react-i18next";
import { HomeStyles } from '../../styles';
import { useTheme } from '@react-navigation/native';

function ReadMores(props) {
    const { t } = useTranslation();
    const { children, numberOfLines } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

    const _renderTruncatedFooter = (handlePress, index) => {
        return (
            <TouchableOpacity onPress={handlePress}>
                <Text style={HomeStyle.ReadMoreTextStyle}>{t("Read_More")}</Text>
            </TouchableOpacity>
        );
    }
    const _renderRevealedFooter = (handlePress) => {
        return (
            <TouchableOpacity onPress={handlePress}>
                <Text style={HomeStyle.ReadMoreTextStyle}>{t("Read_Less")}</Text>
            </TouchableOpacity>
        );
    }
    const _handleTextReady = () => {
    }
    return (
        <ReadMore
            numberOfLines={numberOfLines}
            renderTruncatedFooter={_renderTruncatedFooter}
            renderRevealedFooter={_renderRevealedFooter}
            onReady={_handleTextReady}>
            {children}
        </ReadMore>
    );
};
export default ReadMores;