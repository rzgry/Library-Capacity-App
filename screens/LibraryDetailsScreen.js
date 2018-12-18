import React from 'react';
import { Container, Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('libraryStore')
@observer
class LibraryDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'unknown'),
  });

  render() {
    const { libraryStore, navigation } = this.props;

    const libName = navigation.getParam('name', 'unknown');

    const lib = libraryStore.getLibrary(libName);

    return (
      <Container>
        <Content>
          <Text>{lib.name}</Text>
          <Text>{`Overall Capacity ${lib.overallCapacity * 100}%`}</Text>
        </Content>
      </Container>
    );
  }
}

LibraryDetailsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LibraryDetailsScreen;
