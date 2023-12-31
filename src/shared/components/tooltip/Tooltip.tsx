import { Tooltip as TooltipAntd } from 'antd';

import { TooltipTestIds } from './enums/TooltipTestIdEnum';
import { ContainerExternal, ContainerTooltip } from './tooltip.styles';

interface TooltipProps {
  children: React.ReactNode;
  tooltip?: React.ReactNode;
  title?: string;
}
const Tooltip = ({ children, tooltip, title }: TooltipProps) => {
  if (title) {
    return <TooltipAntd title={title}>{children}</TooltipAntd>;
  }

  return (
    <ContainerTooltip data-testid={TooltipTestIds.CONTAINER_TOOLTIP}>
      <ContainerExternal data-testid={TooltipTestIds.INFO_TOOLTIP}>{tooltip}</ContainerExternal>
      {children}
    </ContainerTooltip>
  );
};

export default Tooltip;
