import {StyleSheet} from 'react-native';

export const ContainerStyles = StyleSheet.create({
  modal: (backgroundOpacity?: number) => {
    return {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundOpacity
        ? `rgba(0, 0, 0, ${backgroundOpacity})`
        : 'rgba(0, 0, 0, 0.5)',
    };
  },
  center: {
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
