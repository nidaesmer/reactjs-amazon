import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";
import "swiper/css";
//import "swiper/css/navigation";
import { Link } from "react-router-dom";

const CarouselProduct = () => {
  return (
    <div className="bg-white m-3 p-4 rounded">
      <div className="text-2xl font-semibold pl-4 py-2 ">Best Sellers</div>
      <Swiper
        slidesPerView={7} //sayfada gorunen 7 adet olsun
        spaceBetween={10}
        //navigation={true}
        //modules={[Navigation]}
      >
        {/* caruosel category'deki gibi <SwiperSlide>ile eklemek yerıne array.fromu kullandık. 2 farklı yontem */}

        {Array.from({ length: 9 }, (_, i) => (
          // 9 elemanlı bir dizi oluşturur. bu olayların amacı slyat gosterısı gibi gorunmesidir.
          // (_, i) => fonksiyonu, dizi elemanlarını oluştururken her bir elemanın indeksini (i) kullanır.

          // _ elemanları getirir

          //   <SwiperSlide key={i}> bu Swiper kütüphanesi için bir slayt öğesini temsil eden bir JSX öğesini oluşturur. Her slayt, kendine özgü bir anahtar (key) değeri ile belirlenir.

          //  <img src={`../images/product_${i}_small.jpg`} alt="" /> ifadesi, her slayt içinde bir resim öğesi oluşturur. Resmin yolu (src) i değeri kullanılarak dinamik olarak belirlenir. Örneğin, ilk slayt için ../images/product_0_small.jpg, ikinci slayt için ../images/product_1_small.jpg gibi.

          // Dinamik olarak resim yolu belirlemek, genellikle aynı türdeki farklı içerikleri temsil eden çok sayıda öğeyi (örneğin, ürün resimleri) göstermek için kullanılır. Bu yöntem, tekrarlayan yapıları daha verimli bir şekilde oluşturmanıza ve bakımını yapmanıza olanak tanır.

          // Link to={`/product/${i}`}>  Bu kısım, React Router tarafından sağlanan Link bileşenini kullanarak bir bağlantı oluşturur. Bu bağlantı, "/product" yoluna giden bir URL'yi temsil eder ve bu URL'nin sonuna i değeri eklenir. Yani, her slayt bir ürünü temsil eder ve bu ürünün detaylarına yönlendiren bir bağlantı oluşturulur.

          <SwiperSlide className="first:pl-4" key={i}>
            <Link to={`/product/${i}`}>
              <img src={`../images/product_${i}_small.jpg`} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
