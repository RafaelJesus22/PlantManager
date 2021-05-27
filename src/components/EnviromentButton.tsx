import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export const EnviromentButton = ({
  title,
  active = false,
  ...rest
}: EnviromentButtonProps) => {
  return (
    <RectButton style={[styles.container, active && styles.activeContainer]}>
      <Text style={[styles.text, active && styles.activeText]}>
        { title }
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    height: 40,
    width: 76,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,     
  },
  activeContainer: {
    backgroundColor: colors.green_light,
  },
  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },
  activeText: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
})