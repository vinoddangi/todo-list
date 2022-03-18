import renderer from 'react-test-renderer';
import { Tabs } from './Tabs';
import React from 'react';

describe('Given Tabs', () => {
  let tree;
  beforeEach(() => {
    const component = renderer.create(<Tabs />);
    tree = component.toJSON();
  });

  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
