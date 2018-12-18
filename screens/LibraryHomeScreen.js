import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, ListItem, Text, Body, Right, Icon,
} from 'native-base';
import { RefreshControl } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('libraryStore')
@observer
class LibraryHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Libraries',
  };

  componentDidMount() {
    const { libraryStore } = this.props;
    libraryStore.fetchLibraries();
  }

  handlePressLibrary = (libraryName) => {
    const { navigation } = this.props;
    navigation.navigate('LibraryDetails', {
      name: libraryName,
    });
  };

  render() {
    const { libraryStore } = this.props;

    return (
      <Container>
        <Content
          refreshControl={(
            <RefreshControl
              refreshing={libraryStore.loadingLibraries}
              onRefresh={() => libraryStore.fetchLibraries()}
            />
)}
        >
          {libraryStore.libraries.map(lib => (
            <ListItem icon button onPress={() => this.handlePressLibrary(lib.name)} key={lib.name}>
              <Body>
                <Text>{lib.name}</Text>
              </Body>
              <Right>
                <Text>{`${lib.overallCapacity * 100}%`}</Text>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
}

LibraryHomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LibraryHomeScreen;
