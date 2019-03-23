import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import LibraryHomeScreen from '../screens/LibraryHomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LibraryDetailsScreen from '../screens/LibraryDetailsScreen';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#441087',
  },
  headerTintColor: '#fff',
};

export const HomeStack = createStackNavigator(
  {
    Home: LibraryHomeScreen,
    LibraryDetails: LibraryDetailsScreen,
  },
  {
    navigationOptions: defaultNavigationOptions,
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Libraries',
  tabBarIcon: (
    { focused }, // eslint-disable-line react/prop-types
  ) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  {
    navigationOptions: defaultNavigationOptions,
  },
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: (
    { focused }, // eslint-disable-line react/prop-types
  ) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
});
