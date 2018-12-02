import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import LibraryNameTouchable from '../components/LibraryNameTouchable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  libraries = ['Taylor Library', 'Weldon Library'];

  handlePressLibrary = (libraryName) => {
    console.log(libraryName);
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          {this.libraries.map(libraryName => (
            <LibraryNameTouchable
              libraryName={libraryName}
              key={libraryName}
              onPress={() => this.handlePressLibrary(libraryName)}
            />
          ))}
        </View>
      </ScrollView>
    );
  }
}
