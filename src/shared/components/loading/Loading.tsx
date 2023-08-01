import { Spin, SpinProps } from 'antd';

import { LoadingTestIdEnum } from './__tests__/Loading.spec';

const Loading = ({ ...props }: SpinProps) => {
  return <Spin data-testid={LoadingTestIdEnum.LOADING} {...props} />;
};

export default Loading;
