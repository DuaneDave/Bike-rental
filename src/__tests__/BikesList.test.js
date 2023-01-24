import renderer from 'react-test-renderer';
import React from 'react';
import BikesList from '../__mock__/BikesList';

describe('Bikes', () => {
  test('if bikes mocked automatically', () => {
    const component = renderer.create(
      <BikesList />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
