import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Style } from '../../styles';
import { Colors, SF } from '../../utils';
import { VectorIcons } from '../../components';

function HeaderLeftMenuIcon(props) {
    const { navigation } = props;
    return (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingStart:10}}>
            <VectorIcons
                color={Colors.white_text_color}
                name="navicon"
                icon="EvilIcons"
                size={SF(35)}
            />
        </TouchableOpacity>
    );
};

export default HeaderLeftMenuIcon;