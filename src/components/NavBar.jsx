import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

import { Search } from "./";

// üst kısım ozellikleri

const NavBar = () => {
  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]  ">
        {/* left */}
        <div className="flex items-center m-4  ">
          <img
            className="h-[35px] w-[100px]"
            src={"../images/amazon.png"}
            alt=""
          />

          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">deliver to</div>
            <div className="text-sm xl:text-base font-bold">united kingdom</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex grow relative items-center ">
          <Search />
        </div>
        {/* right */}
        <div className="flex items-center m-4 ">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              accounts & lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">returns</div>
            <div className="text-sm xl:text-base font-bold">& orders</div>
          </div>
          {/* alısveris cartına basınca bızı checkout sayfasına yonlendırmesı ıcın */}
          <Link to={"/checkout"}>
            <div className="flex pr-3 pl-3">
              <ShoppingCartIcon className="h-[48px]" />
              <div className="mt-7 text-xs xl:text-sm font-bold">cart</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 ">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
