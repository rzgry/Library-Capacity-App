import React from 'react';
import { Container, Content, View } from 'native-base';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { RefreshControl } from 'react-native';
import CapacityBadge from '../components/CapacityBadge';
import { SubHeading } from '../components/StyledText';

@inject('libraryStore')
@observer
class LibraryDetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('name', 'unknown'),
  });

  render() {
    const { libraryStore, navigation } = this.props;

    // library name is passed to details screen as a parameter
    const libName = navigation.getParam('name', 'unknown');

    const lib = libraryStore.getLibrary(libName);

    return (
      <Container>
        <Content
          padder
          refreshControl={(
            <RefreshControl
              refreshing={libraryStore.loadingLibraries}
              onRefresh={() => libraryStore.fetchLibraries()}
            />
)}
        >
          {/* Overall Capacity */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
            }}
          >
            <SubHeading>Overall Capacity: </SubHeading>
            <CapacityBadge capacity={lib.overallCapacity} />
          </View>

          {/* Capacity by floor */}
          <View>
            <SubHeading>Capacity by floor: </SubHeading>
          </View>
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
