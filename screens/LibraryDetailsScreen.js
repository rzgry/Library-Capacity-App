import React from 'react';
import {
  Container, Content, View, Text,
} from 'native-base';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { RefreshControl } from 'react-native';
import CapacityBadge from '../components/CapacityBadge';
import { Heading, SubHeading } from '../components/StyledText';

@inject('libraryStore')
@observer
class LibraryDetailsScreen extends React.Component {
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
          <View style={{ marginBottom: 8 }}>
            <Heading>{`${libName}`}</Heading>
          </View>
          {/* Overall Capacity */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 8,
              marginLeft: 8,
            }}
          >
            <Text>Total: </Text>
            <CapacityBadge capacity={lib.overallCapacity} />
          </View>

          {/* Capacity by floor */}
          <View>
            <SubHeading>Floors: </SubHeading>
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
