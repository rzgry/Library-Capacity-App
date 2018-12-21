import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform, StatusBar, StyleSheet, View,
} from 'react-native';
import {
  AppLoading, Asset, Font, Icon,
} from 'expo';
import { observer, Provider } from 'mobx-react';
import { observable, configure, action } from 'mobx';

import stores from './stores/index';
import AppNavigator from './navigation/AppNavigator';

configure({
  enforceActions: 'observed',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

@observer
class App extends React.Component {
  @observable
  isLoadingComplete = false;

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'), // eslint-disable-line global-require
      require('./assets/images/robot-prod.png'), // eslint-disable-line global-require
    ]),
    Font.loadAsync({
      ...Icon.Ionicons.font,
      Roboto: require('native-base/Fonts/Roboto.ttf'), // eslint-disable-line global-require
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line global-require
    }),
  ]);

  handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error); // eslint-disable-line no-console
  };

  @action
  handleFinishLoading = () => {
    this.isLoadingComplete = true;
  };

  render() {
    const { isLoadingComplete } = this;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <Provider {...stores}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

App.defaultProps = {
  skipLoadingScreen: false,
};

export default App;
