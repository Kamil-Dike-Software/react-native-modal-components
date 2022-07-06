/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import {fireEvent, render, screen} from '@testing-library/react-native';
import Prompt from '../src/components/Prompt/Prompt';

let handleClose: jest.Mock;
let handleSubmit: jest.Mock;

beforeEach(() => {
  handleClose = jest.fn();
  handleSubmit = jest.fn();

  render(
    <Prompt
      title="Some test title"
      visibilityState={[true, handleClose]}
      description="Some test message"
      onSubmit={handleSubmit}
      language="PL"
    />,
  );
});

it('Prompt renders correctly', () => {
  const testTitle = screen.getByText('Some test title');
  const testMessage = screen.getByText('Some test message');
  const testSubmitButton = screen.getByText('OK');
  const testExitButton = screen.getByText('Anuluj');

  expect([
    testTitle,
    testMessage,
    testExitButton,
    testSubmitButton,
  ]).toBeDefined();
});

it('Prompt closes correctly with button', () => {
  const exitButton = screen.getByText('Anuluj');
  fireEvent.press(exitButton);

  expect(handleClose).toBeCalled();
});

it('Prompt submits correctly', () => {
  const exitButton = screen.getByText('OK');
  fireEvent.press(exitButton);

  expect(handleSubmit).toBeCalled();
});
