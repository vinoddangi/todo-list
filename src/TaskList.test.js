import renderer from 'react-test-renderer';
import React from 'react';
import { TaskList } from './TaskList';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
afterAll(() => jest.clearAllMocks());
describe('Given TaskList', () => {
  let tree;

  beforeEach(() => {
    const component = renderer.create(<TaskList />);
    tree = component.toJSON();
  });

  test('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
