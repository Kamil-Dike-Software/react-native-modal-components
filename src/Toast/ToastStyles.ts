import {StyleSheet} from 'react-native';
import {Colors} from '../styles/Colors';

export const ToastStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  closeButton: {
    borderTopWidth: 1,
    borderColor: Colors.darkGray,
    padding: 10,
  },
});
