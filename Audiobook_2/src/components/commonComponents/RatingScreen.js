import React from "react";
import { Rating } from 'react-native-ratings';

function RatingScreen(props) {
  const {ratingColor,ratingBackgroundColor,tintColor,imageSize,startingValue} = props;
  return (
    <Rating
      type='custom'
      ratingColor={ratingColor}
      ratingBackgroundColor={ratingBackgroundColor}
      ratingCount={5}
      tintColor={tintColor}
      imageSize={imageSize}
      startingValue={startingValue}
      isDisabled={false}
    />
  );
};
export default RatingScreen;