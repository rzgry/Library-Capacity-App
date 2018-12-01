import React from 'react';
import {
  StyleSheet, Text, View, ScrollView,
} from 'react-native';
import { WebBrowser } from 'expo';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';

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

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Library Services',
  };

  handlePressBookStudySpace = () => {
    WebBrowser.openBrowserAsync('https://calendar.lib.uwo.ca/reserve/taylor');
  };

  handlePressPrintCopyScan = () => {
    WebBrowser.openBrowserAsync('https://www.lib.uwo.ca/services/printingandphotocopying.html');
  };

  handleProvideFeedback = () => {
    // TODO: add option to provide feedback
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this.handlePressBookStudySpace}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="md-book" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Book study space</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            background={Touchable.Ripple('#ccc', false)}
            style={styles.option}
            onPress={this.handlePressPrintCopyScan}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="md-print" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Print, Copy, Scan</Text>
              </View>
            </View>
          </Touchable>

          <Touchable
            style={styles.option}
            background={Touchable.Ripple('#ccc', false)}
            onPress={this.handleProvideFeedback}
          >
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>Provide feedback</Text>
              </View>
            </View>
          </Touchable>
        </View>
      </ScrollView>
    );
  }
}
