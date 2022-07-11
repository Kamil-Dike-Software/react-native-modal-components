import {StyleSheet} from 'react-native';
import {applyAlpha} from '../utils/applyAlpha';

export const ContainerStyles = StyleSheet.create({
  /**
   * Modal container style
   * @param backgroundOpacity <0;1>
   * @param backgroundColor hex color value e.g. #ff0000(red)
   */
  modal: (backgroundOpacity = 0.2, backgroundColor = '#000000') => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: applyAlpha(backgroundColor, backgroundOpacity),
    };
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
