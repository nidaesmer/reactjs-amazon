import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselCategory,
  CarouselProduct,
  HomePageCard,
} from "../components";
//homePagenın ıcınde goruntuleneceklerı ımport edıyoruz

const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      {" "}
      {/*en dış sarman*/}
      <div className="min-w-[1000px] max-w-[2500px] m-auto bg-gray-400">
        {" "}
        {/*cartların arkası*/}
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 cursor-pointer">
          <HomePageCard
            title={"Unforgettable Christmas memories!"}
            img={"../images/happy.jpg "}
            link={"more information"}
          />
          <HomePageCard
            title={"Festive Phones, Joyful Connections!"}
            img={"../images/telephone2.jpg "}
            link={"see all deals"}
          />
          <HomePageCard
            title={"Enjoy Movies, Ignite Your Imagination!"}
            img={"../images/movie.jpg "}
            link={"discover now"}
          />
          <HomePageCard
            title={"Get 4, Pay for 3 on Supermarket Items."}
            img={"../images/cart.jpg "}
            link={"start shopping"}
          />
          <HomePageCard
            title={"All for pets, everything here!"}
            img={"../images/dog1.jpg "}
            link={"make them happy"}
          />
          <HomePageCard
            title={"Year-End Fashion Deals!"}
            img={"../images/moda.jpg "}
            link={"discover now"}
          />
          <HomePageCard
            title={"Explore New Tech Wonders!"}
            img={"../images/techo4.jpg "}
            link={"see all deals"}
          />
          <HomePageCard
            title={"We have a surprise for you!"}
            img={"../images/home_grid_8.jpg "}
            link={"see terms and conditions"}
          />
  
        </div>
        {/* gorunmesini istediklerim burda */}
        <CarouselProduct />
        <CarouselCategory />
      </div>
      <div className="h-[200px]">
        <div className="flex justify-center bg-blue-900 pb-4 pt-4 tracking-wide text-sm text-white">
          <Link to={"/"}> Başa Dön</Link>
        </div>

        <div>
          <div className="grid grid-cols-4 bg-blue-950   ">
            <div className="flex justify-center  pb-8 pt-8">
              <ul className="text-white ">
                <li className="font-bold cursor-pointer hover:underline ">
                  Hakkımızda
                </li>
                <li className="cursor-pointer hover:underline">Kariyer</li>
                <li className="cursor-pointer hover:underline">İletişim</li>
                <li className="cursor-pointer hover:underline">
                  Bilgi toplumu hizmetleri
                </li>
                <li className="cursor-pointer hover:underline">
                  {" "}
                  Amazon science
                </li>
              </ul>
            </div>

            <div className="flex justify-center pb-8 pt-8">
              <div>
                <ul className="text-white">
                  <li className="font-bold cursor-pointer hover:underline">
                    Bizimle Para Kazanın
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Markanızı Koruyun ve Oluşturun
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Amazon'da Satış Yapın
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Ürünlerinizin Reklamını Yapın
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center pb-8 pt-8">
              <div>
                <ul className="text-white">
                  <li className="font-bold cursor-pointer hover:underline">
                    Amazon Ödeme Araçları
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Kredi Kartı
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Taksitli Ödeme
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center pb-8 pt-8">
              <div>
                <ul className="text-white">
                  <li className="font-bold cursor-pointer hover:underline">
                    Size Yardımcı Olalım
                  </li>
                  <li className="cursor-pointer hover:underline">
                    {" "}
                    COVID-19 ve Amazon{" "}
                  </li>
                  <li className="cursor-pointer hover:underline">İadeler</li>
                  <li className="cursor-pointer hover:underline">
                    Geri Dönüşüm
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Müşteri Hizmetleri
                  </li>
                  <li className="cursor-pointer hover:underline">
                    Erişilebilirlik
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
