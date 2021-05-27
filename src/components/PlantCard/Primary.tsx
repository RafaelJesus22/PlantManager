import React from 'react';
import {
  StyleSheet, 
  View,
  Text
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}


export const Primary = ({ data, ...rest }: PlantProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      {/* PAROU EM 59H11 */}
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {

  }
})