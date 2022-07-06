import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Modal, ModalProps, Text, View} from 'react-native';
import {ContainerStyles} from '../../styles/ContainerStyles';
import {LoadingStyles} from './LoadingStyles';
import {LanguageType} from '../../types/LanguageType';
import {LoadingTranslation} from '../../consts/Translations';

interface LoadingProps {
  visible: boolean;
  animationType?: ModalProps['animationType'];
  backgroundOpacity?: number;
  color?: string;
  animated?: boolean;
  language?: LanguageType;
  CustomIndicator?: React.ReactNode;
  textVisible?: boolean;
  size?: 'small' | 'large';
}

const Loading = ({
  visible,
  animationType,
  backgroundOpacity,
  color = 'white',
  animated = true,
  language = 'EN',
  CustomIndicator,
  textVisible = true,
  size = 'small',
}: LoadingProps) => {
  const [dots, setDots] = useState(animated ? 1 : 3);

  useEffect(() => {
    if (!animated) return;
    const intervalId = setInterval(() => {
      dots < 3 ? setDots(dots + 1) : setDots(1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dots, animated]);

  return (
    <Modal
      transparent={true}
      animationType={animationType || 'fade'}
      visible={visible}>
      <View style={ContainerStyles.modal(backgroundOpacity)}>
        {CustomIndicator ? (
          CustomIndicator
        ) : (
          <ActivityIndicator size={size} color={color} animating={animated} />
        )}
        {textVisible && (
          <View style={LoadingStyles.textContainer}>
            <Text
              style={[
                LoadingStyles.text(color),
                LoadingStyles.loadingTextContainer,
              ]}>
              {LoadingTranslation[language]}
            </Text>
            <Text
              style={[LoadingStyles.text(color), LoadingStyles.dotsContainer]}>
              {' '}
              {Array.from({length: dots}).map(() => '. ')}
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default Loading;
