import React from "react";
import Slider from '@react-native-community/slider';

function Sliders(props) {
    const { maximumValue, minimumValue, thumbTintColor, minimumTrackTintColor, maximumTrackTintColor, step, value, onValueChange } = props;
    return (
        <Slider
            maximumValue={maximumValue}
            minimumValue={minimumValue}
            thumbTintColor={thumbTintColor}
            minimumTrackTintColor={minimumTrackTintColor}
            maximumTrackTintColor={maximumTrackTintColor}
            step={step}
            value={value}
            onValueChange={onValueChange}
        />
    );
};
export default Sliders;