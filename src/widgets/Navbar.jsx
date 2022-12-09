import { FaApple } from "react-icons/fa";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Navbar.css";
import useMediaQuery from "beautiful-react-hooks/useMediaQuery";
import { useState } from "react";

const Navbar = () => {
  const isSmallView = useMediaQuery("(max-width: 830px)");
  const [isExpand, setIsExpand] = useState(false);

  const openMenu = () => {
    setIsExpand(!isExpand);
  };

  return isSmallView ? (
    <nav className={isExpand ? "smallViewNavbar" : "navbar"}>
      <ul className="h-11 flex justify-between items-center navbar-list">
        <li className="px-4 text-xl cursor-pointer">
          {isExpand ? (
            <AiOutlineClose onClick={openMenu} />
          ) : (
            <RxHamburgerMenu onClick={openMenu} />
          )}
        </li>
        <li className="px-4 text-xl cursor-pointer">
          <FaApple />
        </li>
        <li className="px-4 text-xl cursor-pointer">
          <BiShoppingBag />
        </li>
      </ul>

      {isExpand && (
        <>
          <div className="px-2.5 mb-2 flex justify-center search-wrapper">
            <div className="search-container mb-3.5">
              <AiOutlineSearch className="search-icon" />
              <input
                type="search"
                className="search-box"
                placeholder="搜索 apple.com.cn"
              />
            </div>
          </div>

          <ul className="smallView-list mx-auto my-0 px-10">
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              商店
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              Mac
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              iPad
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              iPhone
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              Watch
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              AirPods
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              家居
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              Apple 独家
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              配件
            </li>
            <li className="w-full h-11 relative text-gray-300 inline-flex items-center hover:cursor-pointer hover:text-white">
              技术支持
            </li>
          </ul>
        </>
      )}
    </nav>
  ) : (
    <nav className="h-11 navbar">
      <div
        className="h-full max-w-5xl mx-auto my-0"
        style={{ padding: "0 22px" }}
      >
        <ul className="h-full flex justify-between items-center text-xs navbar-list">
          <li className="px-2 cursor-pointer text-base">
            <FaApple />
          </li>
          <li className="px-2 cursor-pointer">商店</li>
          <li className="px-2 cursor-pointer">Mac</li>
          <li className="px-2 cursor-pointer">iPad</li>
          <li className="px-2 cursor-pointer">iPhone</li>
          <li className="px-2 cursor-pointer">Watch</li>
          <li className="px-2 cursor-pointer">AirPods</li>
          <li className="px-2 cursor-pointer">家居</li>
          <li className="px-2 cursor-pointer">Apple 独家</li>
          <li className="px-2 cursor-pointer">配件</li>
          <li className="px-2 cursor-pointer">技术支持</li>
          <li className="px-2 cursor-pointer text-base">
            <AiOutlineSearch />
          </li>
          <li className="px-2 cursor-pointer text-base">
            <BiShoppingBag />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
