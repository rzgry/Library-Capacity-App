import React from 'react';
import { Text } from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <React.Fragment>
        <Text>Settings go here</Text>
      </React.Fragment>
    );
  }
}

export default SettingsScreen;
