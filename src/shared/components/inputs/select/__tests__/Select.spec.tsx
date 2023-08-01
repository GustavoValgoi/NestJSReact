import { render } from '@testing-library/react';

import Select from '../Select';

export enum SelectTestIdEnum {
  BOX_SELECT = 'BOX_SELECT',
  SELECT_ANTD = 'SELECT_ANTD',
  TITLE = 'TITLE',
}

describe('test Select', () => {
  it('should render select', () => {
    const { getByTestId } = render(<Select />);

    expect(getByTestId(SelectTestIdEnum.BOX_SELECT)).toBeDefined();
    expect(getByTestId(SelectTestIdEnum.SELECT_ANTD)).toBeDefined();
  });

  it('should not render title if empty', () => {
    const { queryAllByTestId } = render(<Select />);

    expect(queryAllByTestId(SelectTestIdEnum.TITLE).length).toEqual(0);
  });

  it('should render title', () => {
    const mockTitle = 'mockTitle';
    const { queryAllByTestId, getByText } = render(<Select title={mockTitle} />);

    expect(queryAllByTestId(SelectTestIdEnum.TITLE).length).toEqual(1);
    expect(getByText(mockTitle)).toBeDefined();
  });

  it('should render props margin', () => {
    const mockMargin = '10px 15px 0px 5px';
    const { getByTestId } = render(<Select margin={mockMargin} />);

    expect(getByTestId(SelectTestIdEnum.BOX_SELECT)).toHaveAttribute(
      'style',
      `margin: ${mockMargin};`,
    );
  });
});
