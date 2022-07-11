import React from 'react';
import {ActivityIndicator, Modal, ModalProps, View} from 'react-native';
import {ContainerStyles} from '../../styles/ContainerStyles';

interface LoadingProps {
  visible: boolean;
  animationType?: ModalProps['animationType'];
  backgroundOpacity?: number;
  backgroundColor?: string;
  indicatorColor?: string;
  CustomIndicator?: React.ReactNode;
  size?: 'small' | 'large';
}

const Loading = ({
  visible,
  animationType,
  backgroundOpacity,
  backgroundColor,
  indicatorColor = 'white',
  CustomIndicator,
  size = 'large',
}: LoadingProps) => {
  return (
    <Modal
      transparent={true}
      animationType={animationType || 'fade'}
      visible={visible}
      testID="loadingModal">
      <View style={ContainerStyles.modal(backgroundOpacity, backgroundColor)}>
        {CustomIndicator ? (
          CustomIndicator
        ) : (
          <ActivityIndicator size={size} color={indicatorColor} />
        )}
      </View>
    </Modal>
  );
};

export default Loading;
