import React from 'react';
import { WebBrowser } from 'expo';

import {
  Container, Content, List, ListItem, Text, Body, Icon, Left,
} from 'native-base';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Library Services',
  };

  render() {
    const links = [
      {
        text: 'Book study space',
        icon: 'md-calendar',
        href: 'https://calendar.lib.uwo.ca/reserve/taylor',
      },
      {
        text: 'Print, Copy, Scan',
        icon: 'md-print',
        href: 'https://www.lib.uwo.ca/services/printingandphotocopying.html',
      },
      {
        text: 'Library catalog',
        icon: 'md-book',
        href: 'https://alpha.lib.uwo.ca',
      },
      {
        text: 'Western Libraries Twitter',
        icon: 'logo-twitter',
        href: 'https://twitter.com/westernulibs',
      },
    ];

    return (
      <Container>
        <Content>
          <List>
            {links.map(link => (
              <ListItem
                key={link.href}
                icon
                button
                onPress={() => WebBrowser.openBrowserAsync(link.href)}
              >
                <Left>
                  <Icon active name={link.icon} color="#ccc" />
                </Left>
                <Body>
                  <Text>{link.text}</Text>
                </Body>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
