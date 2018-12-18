import React from 'react';
import { WebBrowser } from 'expo';

import {
  Container, Content, List, ListItem, Text, Body, Icon, Left,
} from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Library Services',
  };

  handlePressBookStudySpace = () => {
    WebBrowser.openBrowserAsync('https://calendar.lib.uwo.ca/reserve/taylor');
  };

  handlePressPrintCopyScan = () => {
    WebBrowser.openBrowserAsync('https://www.lib.uwo.ca/services/printingandphotocopying.html');
  };

  handleProvideFeedback = () => {
    // TODO: add option to provide feedback
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem icon button onPress={this.handlePressBookStudySpace}>
              <Left>
                <Icon active name="md-book" color="#ccc" />
              </Left>
              <Body>
                <Text>Book Study Space</Text>
              </Body>
            </ListItem>
            <ListItem icon button onPress={this.handlePressPrintCopyScan}>
              <Left>
                <Icon active name="md-print" color="#ccc" />
              </Left>
              <Body>
                <Text>Print, Copy, Scan</Text>
              </Body>
            </ListItem>
            <ListItem icon button onPress={this.handleProvideFeedback}>
              <Left>
                <Icon active name="ios-chatboxes" color="#ccc" />
              </Left>
              <Body>
                <Text>Provide feedback</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
