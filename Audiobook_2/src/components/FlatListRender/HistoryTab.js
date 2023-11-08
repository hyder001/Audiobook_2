import React, { useMemo } from "react";
import { View, FlatList, } from "react-native";
import { HomeStyles } from '../../styles';
import { SH, HistoryData } from '../../utils';
import { Spacing, HistoryView } from '../../components';
import { useTheme } from '@react-navigation/native';

const LibararyTab = (props) => {
    const { onPress } = props;
    const { Colors } = useTheme();
    const HomeStyle = useMemo(() => HomeStyles(Colors), [Colors]);

    return (
        <View>
            <Spacing space={SH(20)} />
            <FlatList
                data={HistoryData}
                numColumns={1}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<HistoryView onPress={() => onPress()}
                    item={item}
                />)}
                keyExtractor={item => item.id}
                contentContainerStyle={HomeStyle.FlatListStyles}
            />
        </View>
    );
};
export default LibararyTab;
