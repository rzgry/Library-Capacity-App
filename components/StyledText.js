import React from 'react';
import { Text } from 'react-native';

// eslint-disable-next-line import/prefer-default-export
export const MonoText = ({ style, ...rest }) => (
  <Text {...rest} style={[style, { fontFamily: 'space-mono' }]} />
);
