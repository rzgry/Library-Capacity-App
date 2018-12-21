import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  heading: { fontWeight: '800', fontSize: 24 },
  subheading: { fontWeight: '800', fontSize: 20 },
});

export const MonoText = ({ style, ...rest }) => (
  <Text {...rest} style={[style, { fontFamily: 'space-mono' }]} />
);

export const Heading = ({ style, ...rest }) => <Text {...rest} style={[style, styles.heading]} />;

export const SubHeading = ({ style, ...rest }) => (
  <Text {...rest} style={[style, styles.subheading]} />
);
