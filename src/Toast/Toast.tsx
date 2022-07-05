import React from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ToastStyles} from './ToastStyles';
import {TextStyles} from '../styles/TextStyles';
import {ContainerStyles} from '../styles/ContainerStyles';
import {IModalComponent} from '../interfaces/IModalComponent';

const Toast = ({
  title,
  message,
  visibilityState: [visible, setVisibility],
  titleTextStyle,
  messageTextStyle,
  buttonTextStyle,
  animationType,
  backgroundOpacity,
}: IModalComponent) => {
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
