import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Hero = ({productsData}) => {

    console.log(productsData);

    let {id} = productsData;

    let thumbnailArray = []

    productsData.map((product) => {
        thumbnailArray.push(product.thumbnail)
    });

    // console.log(thumbnailArray);

    let navigate = useNavigate();

    const handleNavigation = () => {
      navigate(`/product/${id}`)
    }
    

  return (
    <div className='flex justify-around items-center m-4'>
        <div className='w-1/2 h-72 bg-[url("/images/hero-sale.jpg")] bg-cover bg-center bg-no-repeat '>
        </div>
        <div className="carousel carousel-center cursor-pointer">

  <div className="carousel-item relative ">
  <Link onClick={handleNavigation}><img src={thumbnailArray[9]} alt="Pizza" /></Link>
        <div className='absolute left-10 top-32 bg-red-500 text-white'>On 75% Discount</div>
  </div>
  <div className="carousel-item relative cursor-pointer">
      <Link onClick={handleNavigation}><img src={thumbnailArray[14]} alt="Pizza"/></Link>
      <div className='absolute left-10 top-32 bg-red-500 text-white'>On 50% Discount</div>
  </div>
  <div className="carousel-item relative cursor-pointer">
    <Link onClick={handleNavigation}>
    <img
      src={thumbnailArray[7]}
      alt="Pizza" />
    </Link>
      <div className='absolute left-10 top-32 bg-red-500 text-white'>On 25% Discount</div>
  </div>
  </div>
    </div>
  )
}

export default Hero
