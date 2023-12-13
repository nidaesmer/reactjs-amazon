import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Search } from ".";
import { useSelector } from "react-redux";

// üst kısım ozellikleri

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]  ">
        {/* left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[35px] w-[100px]"
              src={"../images/amazon.png"}
              alt=""
            />
          </Link>
          <div className="pr-3 pl-3 flex flex-col p-2 hover:border rounded-sm border-white max-w-xs ">
            <div className="text-xs xl:text-sm  ">deliver to</div>
            <div className="text-sm xl:text-base font-bold">united kingdom</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex grow relative items-center ">
          <Search />
        </div>
        {/* right */}
        <div className="flex items-center m-4  ">
          <div className="pr-4 pl-4 pr-3 pl-3 flex flex-col p-2 hover:border rounded-sm border-white max-w-xs">
            <div className="text-xs xl:text-sm ">hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              accounts & lists
            </div>
          </div>
          <div className="pr-4 pl-4 pr-3 pl-3 flex flex-col p-2 hover:border rounded-sm border-white max-w-xs">
            <div className="text-xs xl:text-sm">returns</div>
            <div className="text-sm xl:text-base font-bold">& orders</div>
          </div>
          {/* alısveris cartına basınca bızı checkout sayfasına yonlendırmesı ıcın */}
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3 ">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                <div className="absolute right-[9px] font-bold m-2 text-orange-400 ">
                  {" "}
                  {/* sepeti ayarladık*/}
                  {cart}
                </div>
              </div>
              <div className="mt-7 text-xs xl:text-sm font-bold ">cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 ">
        <div className="cursor-pointer hover:underline">Today's Deals</div>
        <div className="cursor-pointer hover:underline">Customer Service</div>
        <div className="cursor-pointer hover:underline">Registry</div>
        <div className="cursor-pointer hover:underline">Gift Cards</div>
        <div className="cursor-pointer hover:underline">Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
