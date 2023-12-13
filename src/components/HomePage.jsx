import { Link } from "react-router-dom";
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-gray-400">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80 cursor-pointer">
          <HomePageCard
            title={"Create unforgettable memories this Christmas!"}
            img={"../images/happy.jpg "}
            link={"more information"}
          />
          <HomePageCard
            title={"Festive Phones, Joyful Connections!"}
            img={"../images/telephone2.jpg "}
            link={"see all deals"}
          />
          <HomePageCard
            title={"Spellbinding moments in every frame, vibrant memories."}
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
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"We have a surprise for you!"}
            img={"../images/home_grid_8.jpg "}
            link={"see terms and conditions"}
          />
          <div className="m-3 pt-8">
            <img
              className="xl:hidden"
              src={"../images/banner_image_2.jpg"}
              alt=""
            />
          </div>
        </div>
        <CarouselProduct />
        <CarouselCategory />
      </div>
      <div className="h-[200px]">
        <div className="flex justify-center bg-blue-600 pb-2 pt-2 tracking-wide text-sm">
          <Link to={"/"}> Başa Dön</Link>
        </div>
        <div className="bg-blue-800 text-white mt-4">
          <div className="grid grid-cols-3">
            <div className="font-bold flex ml-32 ">Hakkımızda </div>
            <div className="ml-32">
              <div>Kariyer</div>
              <div>İletişim</div>
              <div>Bilgi Toplumu Hizmetleri</div>
              <div>Amazon Science</div>
            </div>
            <div className="basis 1/4">
              <div>Bizimle Para Kazanın</div>
            </div>
          </div>
        </div>

        <div className="container flex pb-8"></div>
      </div>
    </div>
  );
};

export default HomePage;
