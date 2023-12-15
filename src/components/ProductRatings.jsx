import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;

  //starNumber yıldız simgesi vercek
  //kac tane yıldız gorunmesı ıcın derecelendırmek ıcın array kullanıyoruz

  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] fill-[#F1B61F] 
    h-[20px]"
        />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-[#F1B61F] 
    h-[20px]"
        />
      ))}
      <span className="ml-3 text-blue-500">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;
