import React from 'react';

jest.mock(
  'shell/components/styles/SkeletonLoading',
  () => {
    return {
      SkeletonLoading: (props) => <div {...props} />,
    };
  },
  {
    virtual: true,
  }
);

jest.mock(
  'shell/Services',
  () => {
    return {
      endpoint: '',
    };
  },
  {
    virtual: true,
  }
);

beforeEach(() => {
  jest.spyOn(console, 'error');
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockImplementation(() => null);
});

afterEach(() => {
  // @ts-ignore jest.spyOn adds this functionallity
  console.error.mockRestore();
});
