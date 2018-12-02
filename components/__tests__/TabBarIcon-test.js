import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import { Icon } from 'expo';
import TabBarIcon from '../TabBarIcon';
import Colors from '../../constants/Colors';

describe('<TabBarIcon />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TabBarIcon name="md-information-circle" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('changes color when focused', () => {
    const wrapper = shallow(<TabBarIcon name="md-information-circle" />);
    expect(wrapper.find(Icon.Ionicons)).toHaveLength(1);

    expect(wrapper.find(Icon.Ionicons).props().color).toBe(Colors.tabIconDefault);
    wrapper.setProps({ focused: true });
    expect(wrapper.find(Icon.Ionicons).props().color).toBe(Colors.tabIconSelected);
  });
});
