import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { ProgressBar, ProgressCircle } from '../CapacityProgress';

describe('<ProgressBar />', () => {
  it('renders correctly with 0 progress', () => {
    const tree = renderer.create(<ProgressBar progress={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 0 progress', () => {
    const tree = renderer.create(<ProgressBar progress={50} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 100 progress', () => {
    const tree = renderer.create(<ProgressBar progress={100} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<ProgressCircle />', () => {
  it('renders correctly with 0 progress', () => {
    const tree = renderer.create(<ProgressCircle progress={0} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 0 progress', () => {
    const tree = renderer.create(<ProgressCircle progress={50} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with 100 progress', () => {
    const tree = renderer.create(<ProgressCircle progress={100} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
