import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SH, SW,SF,Fonts } from '../../utils';

const Achievements = ({ achievement }) => {
    return (
        <View style={styles.container}>
            <Image source={achievement.Image} style={styles.image} />
            <Text style={styles.name}>{achievement.Text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: SW(13),
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },
    image: {
        width: SW(100),
        height: SH(100),
        borderRadius: SH(50),
    },
    name: {
        fontSize: SF(12),
        color: '#fff',
        fontFamily: Fonts.Montserrat_Medium,
        marginTop: SH(10),
    },
});

export default Achievements;
