import { render } from '@testing-library/react';

import Breadcrumb from '../Breadcrumb';
import { BreadcrumbTestEnum } from '../enums/BreadcrumbTestEnum';

jest.mock('react-router-dom');

describe('test Breadcrumb', () => {
  it('should render success', () => {
    const { getByTestId } = render(<Breadcrumb listBreadcrumb={[]} />);

    expect(getByTestId(BreadcrumbTestEnum.CONTAINER)).toBeDefined();
  });
});
