import { render } from '@testing-library/react';

import { LoadingTestIdEnum } from '../enums/LoadingTestIdEnum';
import Loading from '../Loading';

describe('test Loading', () => {
  it('should render select', () => {
    const { getByTestId } = render(<Loading />);

    expect(getByTestId(LoadingTestIdEnum.LOADING)).toBeDefined();
  });
});
