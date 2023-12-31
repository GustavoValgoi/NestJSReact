import { fireEvent, render } from '@testing-library/react';

import { mockProductInsert } from '../../__mocks__/productInsert.mock';
import { ProductInsertTestIdEnum } from '../../enums/productInsertTestId.enum';
import ProductInsert from '../ProductInsert';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  Link: () => mockNavigate,
}));

jest.mock('../../../category/hooks/useCategory', () => ({
  useCategory: () => ({
    categories: [],
  }),
}));

const value = '';
// const type = '';
const mockButtonInsert = jest.fn();

jest.mock('../../hooks/useInsertProduct', () => ({
  useInsertProduct: () => ({
    product: mockProductInsert,
    loading: false,
    disabledButton: false,
    handleSubmit: mockButtonInsert,
    handleSelect: jest.fn(),
  }),
}));

describe.skip('Test Product Insert', () => {
  it('should render', () => {
    const { getByTestId } = render(<ProductInsert />);

    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_SELECT)).toBeDefined();
    expect(getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_CONTAINER)).toBeDefined();
  });

  it('should call onChangeInput in change name', () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_NAME);

    fireEvent.change(input, { target: { value: 'MOCK_VALUE' } });

    expect(value).toEqual('MOCK_VALUE');
  });

  it('should call onChangeInput in change price', () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_PRICE);

    fireEvent.change(input, { target: { value: '543' } });

    expect(value).toEqual('5.43');
  });

  it('should call onChangeInput in change image', () => {
    const { getByTestId } = render(<ProductInsert />);

    const input = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_INPUT_IMAGE);

    fireEvent.change(input, { target: { value: 'http-image' } });

    expect(value).toEqual('http-image');
  });

  it('should call handleInsertProduct in click insert button', () => {
    const { getByTestId } = render(<ProductInsert />);

    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_INSERT);

    fireEvent.click(button);

    expect(mockButtonInsert).toBeCalled();
  });

  it('should call navigate in click cancel button', () => {
    const { getByTestId } = render(<ProductInsert />);

    const button = getByTestId(ProductInsertTestIdEnum.PRODUCT_INSERT_BUTTON_CANCEL);

    fireEvent.click(button);

    expect(mockNavigate).toBeCalled();
  });
});
