/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {fireEvent, render, screen} from '@testing-library/react-native';
import Toast from '../src/Toast/Toast';

let handleClose: jest.Mock;

beforeEach(() => {
  handleClose = jest.fn();

  render(
    <Toast
      title="Some test title"
      visibilityState={[true, handleClose]}
      message="Some test message"
    />,
  );
});

it('Toast renders correctly', () => {
  const testTitle = screen.getByText('Some test title');
  const testMessage = screen.getByText('Some test message');
  const testExitButton = screen.getByText('OK');
  expect([testTitle, testMessage, testExitButton]).toBeDefined();
});

it('Toast closes correctly with button', () => {
  const exitButton = screen.getByText('OK');
  fireEvent.press(exitButton);

  expect(handleClose).toBeCalled();
});
