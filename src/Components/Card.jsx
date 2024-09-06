import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { ThemeStore } from "./ThemeContext";
import { useDispatch } from "react-redux";
import { addCart } from "../Store/CartSlice";

const Card = ({Obj}) => {
  let dispatch = useDispatch()
  let { title, category, price, thumbnail, rating , id} = Obj;
  let {Theme} = useContext(ThemeStore)


  let navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/product/${id}`)
  }

  const handleAddCart = (event) => {
    event.stopPropagation()
    dispatch(addCart(Obj))
  }

  return (
    <div>
      <div className={ Theme == 'light' ? 'card bg-slate-100 w-72 m-2 text-black cursor-pointer border-x-4 rounded-md' :  "card bg-slate-800 w-72 m-2 text-white cursor-pointer rounded-md"} onClick={handleNavigation}>
        <div className="">
        <figure>
          <img
            src={thumbnail}
            alt={title}
            width={250}
          />
        </figure>
        </div>
        <div className={Theme == "light" ? "card-body w-full bg-slate-200" : "card-body w-full bg-slate-700"}>
          <div className={Theme == 'light' ? "flex flex-col justify-center items-center" : "flex flex-col justify-center items-center"}>
          <p className="card-title text-center text-sm">{title}</p>
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}/5</p>
          <div className="card-actions justify-end">
            <button className={ Theme == 'light' ?  "btn btn-active mt-3" : "btn btn-outline mt-3"} onClick={handleAddCart}>Add to Cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
