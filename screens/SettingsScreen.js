import React from 'react';
import { Container, Content, Text } from 'native-base';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>Setting screen</Text>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
