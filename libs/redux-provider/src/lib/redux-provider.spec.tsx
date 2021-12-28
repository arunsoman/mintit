import { render } from '@testing-library/react';

import ReduxProvider from './redux-provider';

describe('ReduxProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReduxProvider />);
    expect(baseElement).toBeTruthy();
  });
});
