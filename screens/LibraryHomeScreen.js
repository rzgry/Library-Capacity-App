import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, ListItem, Text, Body, Right, Icon,
} from 'native-base';
import { RefreshControl } from 'react-native';
import { observer, inject } from 'mobx-react';
import CapacityBadge from '../components/CapacityBadge';

@inject('libraryStore')
@observer
class LibraryHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Libraries',
  };

  componentDidMount() {
    this.handleRefresh();
  }

  handlePressLibrary = (libraryName) => {
    const { navigation } = this.props;
    navigation.navigate('LibraryDetails', {
      name: libraryName,
    });
  };

  handleRefresh = () => {
    const { libraryStore } = this.props;
    libraryStore.fetchLibraries();

    libraryStore.fetchAverageLibraries();
  };

  render() {
    const { libraryStore } = this.props;

    return (
      <Container>
        <Content
          refreshControl={(
            <RefreshControl
              refreshing={libraryStore.loadingLibraries}
              onRefresh={this.handleRefresh}
            />
)}
        >
          {libraryStore.error !== '' && <Text style={{ margin: 10 }}>{libraryStore.error}</Text>}
          {libraryStore.sortedLibraries.map(lib => (
            <ListItem icon button onPress={() => this.handlePressLibrary(lib.name)} key={lib.name}>
              <Body>
                <Text>{lib.name}</Text>
              </Body>
              <Right>
                <CapacityBadge capacity={lib.overallCapacity} />
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
