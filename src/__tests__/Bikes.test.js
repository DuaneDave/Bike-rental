import React from 'react';
import renderer from 'react-test-renderer';
import Bike from '../__mock__/Bike';

describe('Bikes', () => {
  test('if bikes mocked automatically', () => {
    const component = renderer.create(
      <Bike />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
