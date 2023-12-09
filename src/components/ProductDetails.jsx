import { PorductBadge } from "./";

const ProductDetails = ({ product, ratings }) => {
  //brand:marka avgrating:ort derecelendırme attribute:nitelik badge:rozet
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        {product.title}
      </div>
      <div className="text-sm xl:text-base mb-1">{product.brand}</div>
      <div className="text-sm xl:text-base mb-1">{product.avgRating}</div>
      <div className="text-xs xl:text-sm font-bold mb-1">
        {product.attribute}
      </div>
      <div>
        <PorductBadge badge={product.badge} />
      </div>
    </div>
  );
};

export default ProductDetails;
