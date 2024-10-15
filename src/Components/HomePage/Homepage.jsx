import { ArrowRight, CalendarRange, CuboidIcon, Search, Star, User } from "lucide-react";
import {badge, hero_img, heroimg, home_img,home_img2,home_img3,suganth,} from "../../assets/Api/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow/SamplePrevArrow";
export const Homepage = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 25601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1026,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <div className=" max-w-[100%] mx-auto">
        <div className=" w-[90%] mx-auto z-50">
          <div className=" grid grid-cols-1 xl:grid-cols-3 gap-4 z-50">
            <div className=" xl:col-span-2">
              <div className=" bg-[rgb(255,221,116)] lg:pt-24 lg:pb-44 rounded-2xl md:px-12 px-5 py-10 z-40">
                <h1 className=" font-[poppins] font-bold leading-tight lg:text-[50px] text-2xl">
                  Start distant learning <br /> free from the world’s <br />{" "}
                  best institutions
                </h1>
                <p className=" font-[poppins] text-slate-800 py-8 lg:pr-48 text-sm md:text-base relative z-40">
                  Flexible easy to access learning opportunities can bring a
                  significant change in how individuals prefer to learn! The
                  Edvik can offer you to enjoy the beauty of eLearning!
                </p>
                <div className=" relative z-40">
                  <input
                    type="text"
                    className=" w-full bg-white border-none  outline-none py-5 shadow-2xl px-3 rounded-md "
                    placeholder="what do you want to learn today?"
                  />
                  <div className=" absolute top-2 right-2 ">
                    <button className=" flex items-center font-bold font-[poppins] bg-[#987BEF] px-5 py-3 hover:bg-[#EC7937] hover:text-white transition-colors gap-2 rounded-md">
                      Search Now <Search className=" w-5" />
                    </button>
                  </div>
                </div>
                <div className=" flex items-center gap-5 md:space-x-[70px] space-x-[70px] py-8 z-40 relative">
                  <div className=" flex items-center relative">
                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px]">
                      <img
                        src={suganth}
                        className=" md:w-12 md:h-12 w-14 h-11 rounded-full p-1 hover:scale-105 transition bg-white"
                        alt="student"
                      />
                    </div>
                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px] absolute top-0 -right-10 md:-right-10">
                      <img
                        src={suganth}
                        className=" md:w-12 w-11 rounded-full bg-white p-1  hover:scale-105 transition"
                        alt="student"
                      />
                    </div>
                    <div className=" bg-[#014BAE] w-fit rounded-full p-[1.2px] absolute top-0 md:-right-20 -right-20 ">
                      <img
                        src={suganth}
                        className=" md:w-12 w-11 rounded-full hover:scale-105 transition bg-[#fff] p-1 "
                        alt="student"
                      />
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <p className=" font-[poppins] text-slate-800 text-wrap md:text-base text-sm">
                        Need help? Contact our{" "}
                        <span className=" underline font-black">
                          Edvik support
                        </span>{" "}
                        <br /> Tell us about your query.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <button className=" flex items-center gap-2 hover:bg-[] font-[poppins] border border-white px-5 py-4 rounded-md text-[#2A1DF3] move">
                    Explore All Courses <ArrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className=" xl:col-span-1">
              <div className=" bg-[#D3C9FF] p-5 rounded-lg">
                <h1 className=" pb-5 font-[poppins] font-bold lg:text-[23px] text-base">
                  Featured Course
                </h1>
                <div className="slider-container pt-3">
                  <Slider {...settings} className="">
                    <div className="relative overflow-hidden group transition p-2">
                      <div className="">
                        <img
                          src={home_img}
                          alt="Home_image"
                          className=" rounded-t-xl"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <div className=" flex items-center justify-between ">
                          <div className=" flex items-center gap-1">
                            <User className=" stroke-[#014bae] w-4 " />
                            <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">
                              Smit Samus
                            </p>
                          </div>
                          <h2 className=" font-bold text-[#014bae] text-xl font-[poppins]">
                            $22
                          </h2>
                        </div>
                        <p className=" font-bold font-[poppins] text-black text-lg py-3">
                          Innovative Leadership in <br /> Digital Age:Navigating{" "}
                          <br /> Change & Driving Growth
                        </p>
                      </div>
                      <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                        <div className=" flex items-center gap-1">
                          <CalendarRange className=" w-5 stroke-stone-600" />
                          <p>15/07/2024</p>
                        </div>
                        <div className=" flex items-center gap-1">
                          <User className=" w-5 stroke-stone-600" />
                          <p>1Students</p>
                        </div>
                      </div>
                      <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                        <div>
                          <div className=" flex items-center gap-1 pt-20 ">
                            <User className=" stroke-[#014bae] w-4 " />
                            <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">
                              Smit Samus
                            </p>
                          </div>
                          <p className=" font-bold font-[poppins] text-black text-lg py-6">
                            Innovative Leadership in <br /> Digital Age:Navigating{" "}
                            <br /> Change & Driving Growth
                          </p>
                        </div>

                        <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                          <div className=" flex items-center gap-1">
                            <CalendarRange className=" w-5 stroke-stone-600" />
                            <p>15/07/2024</p>
                          </div>
                          <div className=" flex items-center gap-1">
                            <User className=" w-5 stroke-stone-600" />
                            <p>1Students</p>
                          </div>
                        </div>
                        <div className=" w-full pt-5">
                          <button
                            className="py-5 font-bold text-white my-5 w-full"
                            id="H-btn"
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden group transition p-2">
                      <div className="">
                        <img
                          src={home_img}
                          alt="Home_image"
                          className=" rounded-t-xl"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <div className=" flex items-center justify-between ">
                          <div className=" flex items-center gap-1">
                            <User className=" stroke-[#014bae] w-4 " />
                            <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">
                              Smit Samus
                            </p>
                          </div>
                          <h2 className=" font-bold text-[#014bae] text-xl font-[poppins]">
                            $22
                          </h2>
                        </div>
                        <p className=" font-bold font-[poppins] text-black text-lg py-3">
                          Innovative Leadership in <br /> Digital Age:Navigating{" "}
                          <br /> Change & Driving Growth
                        </p>
                      </div>
                      <div className=" flex items-center justify-between border-t-[1px] rounded-b-xl bg-white p-4">
                        <div className=" flex items-center gap-1">
                          <CalendarRange className=" w-5 stroke-stone-600" />
                          <p>15/07/2024</p>
                        </div>
                        <div className=" flex items-center gap-1">
                          <User className=" w-5 stroke-stone-600" />
                          <p>1Students</p>
                        </div>
                      </div>
                      <div className=" absolute w-full h-full top-0 rounded-xl bg-white hover:transition-all group-hover:right-[0px] transition-all duration-500 -right-[570px] px-5">
                        <div>
                          <div className=" flex items-center gap-1 pt-20 ">
                            <User className=" stroke-[#014bae] w-4 " />
                            <p className=" text-[#014bae] font-[poppins] font-bold text-sm ">
                              Smit Samus
                            </p>
                          </div>
                          <p className=" font-bold font-[poppins] text-black text-lg py-6">
                            Innovative Leadership in <br /> Digital Age:Navigating{" "}
                            <br /> Change & Driving Growth
                          </p>
                        </div>

                        <div className=" flex items-center justify-between border-t-[1px] border-b-[1px] bg-white py-3">
                          <div className=" flex items-center gap-1">
                            <CalendarRange className=" w-5 stroke-stone-600" />
                            <p>15/07/2024</p>
                          </div>
                          <div className=" flex items-center gap-1">
                            <User className=" w-5 stroke-stone-600" />
                            <p>1Students</p>
                          </div>
                        </div>
                        <div className=" w-full pt-5">
                          <button
                            className="py-5 font-bold text-white my-5 w-full"
                            id="H-btn"
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className=" relative">
                <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-3 gap-1 md:mt-2 mt-2">
                  <div className=" bg-[#EC7937] p-5 py-10 w-fit rounded-lg h-fit">
                    <CuboidIcon className=" w-14 h-14 stroke-white stroke-1"/>
                    <h1 className=" font-[poppins] font-bold text-[28px] text-white pt-4">1.2k+</h1>
                    <p className=" font-[poppins] py-3 text-white">Career Development Certification Couse For Future Career</p>
                    <div className=" group ">
                      <button className=" flex items-center text-[#FFCA4B] font-bold font-[poppins] gap-1">Learn More <ArrowRight className=" group-hover:translate-x-3 transition-all w-5"/> </button>
                    </div>
                  </div>
                  <div className="">
                    <div className=" h-fit">
                      <img src={heroimg} alt="" className=" rounded-lg lg:w-[] md:w-[]"/>
                    </div>
                  </div>
                </div>
                {/* badge container  */}
                <div className=" absolute md:top-10 md:left-52 lg:top-10 lg:left-28 top-80">
                  <div className=" flex items-center gap-4 px-4 py-4 bg-white shadow-2xl rounded-lg">
                    <img src={badge} alt="" />
                    <p className=" text-wrap font-[poppins] text-sm">Congratulations! You’ve <br /> earned a certification.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" absolute top-[27.5%] right-5 md:top-40 md:right-[8%] lg:right-[14%] lg:top-40 xl:top-40 xl:right-[40%] 2xl:top-32 z-10">
            <img src={hero_img} alt="home_image" className=" w-[200px] lg:w-full -z-10"/>
          </div>
        </div>
      </div>
    </>
  );
};
