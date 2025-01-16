import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Max U",
    text: "I ordered a few shirts for my kids, and they absolutely loved them! The fabric is soft and comfortable, and the designs are so trendy. The delivery was super quick too. This is my new favorite shop for kids' clothing!",
    img: "https://bit.ly/3PE61BW",
  },
  {
    id: 2,
    name: "Jeruz A",
    text: "This shop has the best women’s wear collection! I ordered a summer dress, and it was exactly as pictured. The material feels premium, and the fit is so flattering. I'll definitely shop here again!",
    img: "https://bit.ly/4jlQMey",
  },
  {
    id: 3,
    name: "Mary Rose A",
    text: "I bought a pair of wireless earbuds from the electronics section, and they work like a dream. The sound quality is amazing, and they were reasonably priced. This shop has a great selection of products for everyone",
    img: "https://bit.ly/4gViSvq",
  },
  {
    id: 5,
    name: "Ronnel V",
    text: "The men's wear collection here is fantastic! I got a couple of casual shirts for myself, and the quality is outstanding. The fit is perfect, and I received lots of compliments. Highly recommended for stylish yet affordable clothing!",
    img: "https://bit.ly/4jeE6Wx",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center  mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Our customers love our products and service! Here's what they have to say about their experiences shopping with us. From trendy fashion to top-quality electronics, we take pride in delivering exceptional products and making every shopping experience memorable.
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
