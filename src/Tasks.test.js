import renderer from 'react-test-renderer';
import { Tasks } from './Tasks';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import { lightTheme } from './theme/lightTheme';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Given Tasks', () => {
  let tree;
  beforeEach(() => {
    const component = renderer.create(
      <ThemeProvider theme={lightTheme}>
        <Tasks />
      </ThemeProvider>
    );
    tree = component.toJSON();
  });

  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
