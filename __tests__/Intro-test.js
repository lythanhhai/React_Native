import React from 'react';
import rerender from 'rerender';
import Intro from '../Component/Utils/Intro'

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});