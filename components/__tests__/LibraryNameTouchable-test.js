import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LibraryNameTouchable from '../LibraryNameTouchable';

describe('<LibraryNameTouchable />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<LibraryNameTouchable libraryName="Test library" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles being pressed correctly', () => {
    const onPress = jest.fn();

    const wrapper = shallow(<LibraryNameTouchable libraryName="Test library" onPress={onPress} />);
    wrapper.props().onPress();

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
