import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { MonoText, Heading, SubHeading } from '../StyledText';

describe('<MonoText />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Heading />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Heading>Snapshot test!</Heading>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('<Subheading />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SubHeading>Snapshot test!</SubHeading>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
