import { render } from '@testing-library/react';

import Loading from '../Loading';

export enum LoadingTestIdEnum {
  LOADING = 'LOADING',
}

describe('test Loading', () => {
  it('should render select', () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId(LoadingTestIdEnum.LOADING)).toBeDefined();
  });
});
