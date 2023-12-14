import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, createSearchParams } from "react-router-dom";
// import { Navigation } from "swiper";
import "swiper/css";
//import "swiper/css/navigation";

// ürüne tıklandıgında detaya gidilmesi için. shop by category ıcın
const CarouselCategory = () => {
  const navigate = useNavigate();

  const searchCategory = (category) => {
    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: ``,
      })}`,
    });
  };

  return (
    <div className="bg-white m-3 p-4  rounded ">
      <div className="text-2xl font-semibold pl-4 py-2 ">Shop By Category</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        //navigation={true}
        //modules={[Navigation]}
      >
        <SwiperSlide
          onClick={() => searchCategory("Deals")}
          className="cursor-pointer"
        >
          <img src={"../images/category_0.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Amazon")}
          className="cursor-pointer"
        >
          <img src={"../images/category_1.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Fashion")}
          className="cursor-pointer"
        >
          <img src={"../images/category_2.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Computers")}
          className="cursor-pointer"
        >
          <img src={"../images/category_3.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Home")}
          className="cursor-pointer"
        >
          <img src={"../images/category_4.jpg"} alt="" />
        </SwiperSlide>
        <SwiperSlide
          onClick={() => searchCategory("Mobiles")}
          className="cursor-pointer"
        >
          <img src={"../images/category_5.jpg"} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselCategory;
