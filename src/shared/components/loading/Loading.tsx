import { Spin, SpinProps } from 'antd';

import { LoadingTestIdEnum } from './enums/LoadingTestIdEnum';

const Loading = ({ ...props }: SpinProps) => {
  return <Spin data-testid={LoadingTestIdEnum.LOADING} {...props} />;
};

export default Loading;
