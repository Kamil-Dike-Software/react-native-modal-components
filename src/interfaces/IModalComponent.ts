import {Dispatch} from 'react';
import {ModalProps, StyleProp, TextStyle} from 'react-native';

export interface IModalComponent {
  title: string;
  visibilityState: [visible: boolean, setVisibility: Dispatch<boolean>];
  message?: string;
  titleTextStyle?: StyleProp<TextStyle>;
  messageTextStyle?: StyleProp<TextStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  animationType?: ModalProps['animationType'];
  backgroundOpacity?: number;
  backgroundColor?: string;
}
