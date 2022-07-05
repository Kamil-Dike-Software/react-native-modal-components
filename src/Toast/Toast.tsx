import React, {Dispatch} from 'react';
import {
  Modal,
  ModalProps,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ToastStyles} from './ToastStyles';
import {TextStyles} from '../styles/TextStyles';
import {ContainerStyles} from '../styles/ContainerStyles';

interface ToastProps {
  title: string;
  visibilityState: [visible: boolean, setVisibility: Dispatch<boolean>];
  message?: string;
  titleTextStyle?: StyleProp<TextStyle>;
  messageTextStyle?: StyleProp<TextStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  animationType?: ModalProps['animationType'];
  backgroundOpacity?: number;
}

const Toast = ({
  title,
  message,
  visibilityState: [visible, setVisibility],
  titleTextStyle,
  messageTextStyle,
  buttonTextStyle,
  animationType,
  backgroundOpacity,
}: ToastProps) => {
  const hide = () => setVisibility(false);

  return !visible ? null : (
    <Modal transparent={true} animationType={animationType || 'fade'}>
      <TouchableOpacity
        onPressIn={hide}
        style={ContainerStyles.modal(backgroundOpacity)}>
        <TouchableWithoutFeedback>
          <View style={[ToastStyles.container, ContainerStyles.shadow]}>
            <View style={ToastStyles.content}>
              <Text style={[TextStyles.header, titleTextStyle]}>{title}</Text>
              {message && (
                <Text style={[TextStyles.basic, messageTextStyle]}>
                  {message}
                </Text>
              )}
            </View>
            <TouchableOpacity
              style={[ContainerStyles.center, ToastStyles.closeButton]}
              onPress={hide}>
              <Text style={[TextStyles.highlight, buttonTextStyle]}>OK</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default Toast;
