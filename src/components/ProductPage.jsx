import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductDetails } from "./";
import { callAPI } from "./utils/CallApi";

// useParams kullanılarak URL'deki parametreleri alır. Burada, id adında bir parametre alınır. Eğer URL şu şekildeyse: "/product/123", id değeri 123 olacaktır.

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  //Eğer product durumu henüz gelmemişse veya title özelliği yoksa, kullanıcıya "Loading Product.." yazısı gösterilir. Bu, ürün verileri yüklenene kadar beklenen bir durumu temsil eder.
  if (!product?.title) return <h1>Loading Product..</h1>;

  // varsa produtcun titlesi gelir
  return (
    product && (
      <div className="h-screen bg-amazonclone-background ">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-orange-400">
          <div className="grid grid-cols-10 gap-2">
            {/* left*/}
            <div className="col-span-3 p-8 rounded bg-white m-auto">
              <img src={`${product.image}`} alt="" />
            </div>
            {/* middle*/}
            <div className="col-span-5 p-4 rounded  bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails product={product} ratings={false} />
              </div>
              <div></div>
            </div>
            {/* right*/}
            <div className="col-span-2 bg-green-500"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
