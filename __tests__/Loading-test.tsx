/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {render, screen} from '@testing-library/react-native';
import Loading from '../src/components/Loading/Loading';

it('Loading renders correctly', () => {
  render(<Loading visible={true} />);

  const loadingModal = screen.getByTestId('loadingModal');

  expect(loadingModal).toBeDefined();
});
