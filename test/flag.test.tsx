import React from 'react';
import { render } from '@testing-library/react';
import FLag from '../src/index';

describe('it', () => {
  it('renders SVG component without crashing', done => {
    const flag = render(<FLag country="MA" />);
    expect(flag).toMatchSnapshot();
    done();
  });
});
