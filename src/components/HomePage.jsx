import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from "./";
const HomePage = () => {
  return (
    <div className="bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto bg-gray-400">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_1.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_2.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_3.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_4.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_5.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_6.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
            img={"../images/home_grid_7.jpg "}
            link={"see terms and conditions"}
          />
          <HomePageCard
            title={"we have a surprise for you"}
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
        <img
          className="h-[100%] m-auto"
          src={"../images/banner_image.jpg"}
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
