import { render } from '@testing-library/react';

import AppFeatures from './app-features';

describe('AppFeatures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< AppFeatures />);
    expect(baseElement).toBeTruthy();
  });
});
