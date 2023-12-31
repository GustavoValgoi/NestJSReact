import { render } from '@testing-library/react';

import { TooltipTestIds } from '../enums/TooltipTestIdEnum';
import Tooltip from '../Tooltip';

const mockChildren = 'mockChildren';
const mockTitle = 'mockTitle';

describe('Test Tooltip', () => {
  it('should render success', () => {
    const { getByTestId } = render(<Tooltip>{mockChildren}</Tooltip>);

    expect(getByTestId(TooltipTestIds.CONTAINER_TOOLTIP)).toBeDefined();
  });

  it('should render children', () => {
    const { getByText } = render(<Tooltip>{mockChildren}</Tooltip>);

    expect(getByText(mockChildren)).toBeDefined();
  });

  it('should render antd tooltip', () => {
    const { getByText, queryAllByTestId } = render(
      <Tooltip title={mockTitle}>{mockChildren}</Tooltip>,
    );

    expect(getByText(mockChildren)).toBeDefined();
    expect(queryAllByTestId(TooltipTestIds.CONTAINER_TOOLTIP).length).toEqual(0);
  });
});
