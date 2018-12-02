import React from 'react';
import Touchable from 'react-native-platform-touchable';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
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

const LibraryNameTouchable = ({ libraryName, onPress }) => (
  <Touchable style={styles.option} background={Touchable.Ripple('#ccc', false)} onPress={onPress}>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.optionTextContainer}>
        <Text style={styles.optionText}>{libraryName}</Text>
      </View>
    </View>
  </Touchable>
);

LibraryNameTouchable.propTypes = {
  libraryName: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

LibraryNameTouchable.defaultProps = {
  onPress: () => {},
};

export default LibraryNameTouchable;
