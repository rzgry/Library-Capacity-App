import React from 'react';
import {
  Container, Content, View, Text, ListItem,
} from 'native-base';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { RefreshControl } from 'react-native';
import { Heading, SubHeading } from '../components/StyledText';

import { ProgressBar, ProgressCircle } from '../components/CapacityProgress';

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
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 8,
              marginLeft: 8,
            }}
          >
            <View style={{ marginBottom: 8 }}>
              <Heading>{`${libName}`}</Heading>
            </View>
            <View>
              <ProgressCircle
                animated={false} // temp until https://github.com/oblador/react-native-progress/issues/67 is fixed
                showsText
                size={100}
                progress={lib.overallCapacity}
              />
            </View>
          </View>

          {/* Capacity by floor */}
          <View>
            <SubHeading>Floors: </SubHeading>
            {lib.floorCapacities.map(({ name, capacity }) => (
              <ListItem
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 8,
                  marginLeft: 8,
                }}
                key={name}
              >
                <Text
                  style={{
                    marginRight: 8,
                  }}
                >
                  {name}
                </Text>
                <ProgressBar progress={capacity} width={200} />
              </ListItem>
            ))}
          </View>
          <Text
            style={{ color: 'gray' }}
          >
            {`Last updated: ${libraryStore.lastUpdated.toLocaleString()}`}
          </Text>
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
