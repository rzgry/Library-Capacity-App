import React from 'react';
import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import Touchable from 'react-native-platform-touchable';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
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
          {this.libraries.map(libName => (
            <Touchable
              key={libName}
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={() => this.handlePressLibrary(libName)}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionText}>{libName}</Text>
                </View>
              </View>
            </Touchable>
          ))}
        </View>
      </ScrollView>
    );
  }
}
