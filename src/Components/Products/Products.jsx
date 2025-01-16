import React from 'react'
import Img1 from "../../assets/women/women.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import {FaStar} from "react-icons/fa6";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        ratings: 5.0,
        color: "White",
        asdDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women Western",
        ratings: 4.0,
        color: "Red",
        asdDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Shades",
        ratings: 4.5,
        color: "Brown",
        asdDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Women Ethnic",
        ratings: 4.7,
        color: "Yellow",
        asdDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Women Ethnic",
        ratings: 4.2,
        color: "Black",
        asdDelay: "800",
    },
];
const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products for you</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>Discover the perfect blend of style, comfort, and elegance with our exclusive collection of women's fashion. From chic ethnic designs to stunning western outfits, each piece is thoughtfully selected to complement your unique style. Whether you're dressing up for a special occasion or adding a touch of flair to your everyday wardrobe, our top-selling products are sure to leave you feeling confident and fabulous. Find your next favorite look today!</p>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {ProductsData.map((data)=>(
                        <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                            <img src={data.img} alt="Cover Image" className='h-[220px] w-[150px] object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold'>{data.title}</h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.ratings}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products