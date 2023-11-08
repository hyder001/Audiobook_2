import { Alert } from 'react-native';

export const showAlert = (title, message, callback) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: 'OK',
        onPress: () => {
          if (typeof callback === 'function') {
            callback();
          }
        },
      },
    ],
    { cancelable: false }
  );
};
