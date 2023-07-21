import Tooltip from '../../../shared/components/tooltip/Tooltip';
import { ProductType } from '../../../shared/types/ProductType';
import { ImageProduct } from '../styles/tooltipImage.styles';

interface TooltipImageProps {
  product: ProductType;
}

const TooltipImage = ({ product }: TooltipImageProps) => {
  return (
    <Tooltip tooltip={<ImageProduct src={product.image} alt={product.name} />}>
      <span>{product.id}</span>
    </Tooltip>
  );
};

export default TooltipImage;
