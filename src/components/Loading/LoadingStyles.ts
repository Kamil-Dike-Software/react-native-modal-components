import {StyleSheet} from 'react-native';

export const LoadingStyles = StyleSheet.create({
  text: (color: string) => {
    return {
      color: color,
      fontWeight: 'bold',
    };
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  loadingTextContainer: {
    marginLeft: '28%',
  },
  dotsContainer: {
    width: '30%',
  },
});
