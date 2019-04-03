import React from 'react';
import {
  Container, Content, View, Text, ListItem, Right, Body,
} from 'native-base';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { RefreshControl } from 'react-native';
import { Heading, SubHeading } from '../components/StyledText';
import CapacityBadge from '../components/CapacityBadge';

import { ProgressBar, ProgressCircle } from '../components/CapacityProgress';

@inject('libraryStore')
@observer
class LibraryDetailsScreen extends React.Component {
  onRefresh = () => {
    const { libraryStore } = this.props;
    libraryStore.fetchLibraries();
    libraryStore.fetchAverageLibraries();
  };

  render() {
    const { libraryStore, navigation } = this.props;

    // library name is passed to details screen as a parameter
    const libName = navigation.getParam('name', 'unknown');

    const lib = libraryStore.getLibrary(libName);

    return (
      <Container>
        <Content
          padder
          refreshControl={
            <RefreshControl refreshing={libraryStore.loadingLibraries} onRefresh={this.onRefresh} />
          }
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
            {lib.floors.map(({ name, capacity, volume_level: volumeLevel }) => (
              <ListItem key={name}>
                <Body>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}
                  >
                    <Text
                      style={{
                        marginRight: 8,
                      }}
                    >
                      {name}
                    </Text>
                    <ProgressBar progress={capacity} width={175} />
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, color: 'darkgray' }}>
                      {`Volume Level: ${volumeLevel}`}
                    </Text>
                  </View>
                </Body>

                <Right>
                  <CapacityBadge capacity={capacity} />
                </Right>
              </ListItem>
            ))}
          </View>
          <Text style={{ color: 'gray', marginTop: 10 }}>
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
