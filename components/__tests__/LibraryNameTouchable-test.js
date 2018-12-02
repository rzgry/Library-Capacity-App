import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LibraryNameTouchable from '../LibraryNameTouchable';

it('renders correctly', () => {
  const tree = renderer.create(<LibraryNameTouchable libraryName="Test library" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('handles being pressed correctly', () => {
  let pressed = false;

  const wrapper = shallow(
    <LibraryNameTouchable
      libraryName="Test library"
      onPress={() => {
        pressed = true;
      }}
    />,
  );

  wrapper.props().onPress();

  expect(pressed).toBe(true);
});
