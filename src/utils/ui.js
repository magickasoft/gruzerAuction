import { Dimensions, Platform } from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export function isIphoneX() {
  const dimen = Dimensions.get('window');

  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}
