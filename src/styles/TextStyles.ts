import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const TextStyles = StyleSheet.create({
  basic: {
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  header: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  highlight: {
    color: Colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
