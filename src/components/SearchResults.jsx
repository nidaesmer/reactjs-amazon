import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { ProductDetails } from "./";
import { callAPI } from "../utils/CallApi";
import { GB_CURRENCY } from "../utils/constants";
// tamamilye amaç arama kısmına harf yazıp gelen secenege tıklayıp onun sayfasına gitme
const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    //search.jsondan verileri cekıyoruz bu yzuden api cagryırouz
    callAPI(`data/search.json`).then((SearchResults) => {
      const categoryResults = SearchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults(); //get le gösteriyor 2.
  }, [searchParams]); //search paremtlerını kavrıyor ve 1.
//searchParams yazmasak sonuclar lıstelenmez, bu bır bagımlılık, degıstıgınde guncellemeler aktıflesır
  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto pt-4">
      {products &&
        products.map((product, key) => {
          return (
            // harf yazıp gelene tıklayıp sayfaya gıdıo tıklayıp detay sayfasına gıtmek ıcın
            <Link key={key} to={`/product/${product.id}`}>
              <div className="h-[250px] grid grid-cols-12 rounded mt-1 mb-1 ">
                <div className="col-span-2 p-4 bg-gray-200">
                  <img className="m-auto" src={product.image_small} alt="" />
                </div>
                <div className="col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100 ">
                  <div className="font-medium text-black p-2">
                    <ProductDetails product={product} ratings={true} /> 
                    {/* props ile gorunmesını istediklerimi cekıyorum */}
                    <div className="text-xl xl:text-2xl pt-1">
                      {GB_CURRENCY.format(product.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
