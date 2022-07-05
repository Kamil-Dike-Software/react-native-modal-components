import {StyleSheet} from 'react-native';
import {Colors} from '../styles/Colors';

export const PromptStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray,
    borderRadius: 20,
    width: '80%',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.darkGray,
    borderTopWidth: 1,
    paddingVertical: 20,
  },
  buttonLeft: {
    borderRightWidth: 0.5,
  },
  buttonRight: {
    borderLeftWidth: 0.5,
  },
  textInputContainer: {
    borderColor: Colors.darkGray,
    borderWidth: 1,
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 5,
    marginTop: 10,
  },
  textInput: {
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
