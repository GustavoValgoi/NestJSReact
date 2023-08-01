import { Select as SelectAntd, SelectProps as SelectPropsAntd } from 'antd';

import { SelectTestIdEnum } from './__tests__/Select.spec';
import { BoxSelect, TitleSelect } from './select.styles';

interface SelectProps extends SelectPropsAntd {
  title?: string;
  margin?: string;
}

const Select = ({ title, margin, ...props }: SelectProps) => {
  return (
    <BoxSelect data-testid={SelectTestIdEnum.BOX_SELECT} style={{ margin }}>
      {title && <TitleSelect data-testid={SelectTestIdEnum.TITLE}>{title}</TitleSelect>}
      <SelectAntd data-testid={SelectTestIdEnum.SELECT_ANTD} style={{ width: '100%' }} {...props} />
    </BoxSelect>
  );
};

export default Select;
