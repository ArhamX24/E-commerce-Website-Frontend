import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeStore } from "./ThemeContext";
import { useSelector } from "react-redux";
import '../CSS for Components/navbar.css'

const Navbar = () => {
  const { Theme, setTheme } = useContext(ThemeStore);

  let darkTheme = "navbar bg-slate-950";
  let lightTheme = "navbar bg-slate-300 text-black flex items-center";

  let changeTheme = () => {
    setTheme(Theme == 'light' ? 'dark' : 'light');
  }

  const wishlistData = useSelector((Store)=> Store.wishlist.wishlist);

  console.log(wishlistData);
  
  const cartData = useSelector((Store)=> Store.cart.cart)
  console.log(cartData);
  

  return (
    <div id="navbar">
      <div className={Theme == 'light' ? lightTheme : darkTheme}>
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost text-3xl text-navColor font-medium">
          <img src="/images/shopping-cart.png" alt="Logo" width={40} />
            SHOPIFY
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/food"}>Food</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/wishlist"}>WishList<sup className="text-sm">{wishlistData.length}</sup></Link>
            </li>
            <li>
              <Link to={"/cart"}>Cart<sup className="text-sm">{cartData.length}</sup></Link>
            </li>
            <label className="grid cursor-pointer place-items-center">
  <input
  onClick={changeTheme}
    type="checkbox"
    value="synthwave"
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
