import { render } from '@testing-library/react';

import Breadcrumb from '../Breadcrumb';

export enum BreadcrumbTestEnum {
  CONTAINER = 'CONTAINER',
}

jest.mock('react-router-dom');

describe('test Breadcrumb', () => {
  it('should render success', () => {
    const { getByTestId } = render(<Breadcrumb listBreadcrumb={[]} />);

    expect(getByTestId(BreadcrumbTestEnum.CONTAINER)).toBeDefined();
  });
});
