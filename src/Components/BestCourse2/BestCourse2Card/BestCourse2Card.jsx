import { Star, Heart, UserRound, Folders } from "lucide-react";
const BestCourse2Card = ({float,review,image,title,profile,name,domain,lesson,price,}) => {
  return (
    <>
        <div>
            <div className="">
                <div className=" bg-white shadow-2xl border rounded-3xl pb-5 relative group transition-all">
                    <div className="  -top-36 left-0 w-full">
                        <div className=" relative z-50">
                            <img src={image} alt="Course_image" className="w-full rounded-t-3xl rounded-b-[60%] z-50" />
                            <div className=" absolute w-full h-full  bg-[#F57005] group-hover:bg-[#4F5DE4] top-[20px] rounded-b-full -z-10 left-0 transition-colors rounded-t-3xl">
                            </div>
                            <div className=" hover:cursor-pointer absolute top-5 left-5">
                                <Heart className=" w-11 h-11 shadow-lg border p-2 rounded-full stroke-white bg-[#F57005] hover:bg-[#4F5DE4] transition-colors" />
                            </div>
                        </div>
                    </div>

                    <div className=" px-8 pt-10 ">
                        <p className=" bg-[#4F5DE4] text-white px-2 py-1 w-fit rounded-md font-bold  font-[poppins] text-sm">
                            {float}
                        </p>
                        <div className=" flex items-center gap-2 justify-between">
                            <div className=" flex items-center pt-7 gap-1">
                            <div className=" flex items-center ">
                                <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                                <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                                <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                                <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                                <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                            </div>
                            <p className=" font-[poppins] text-sm">{review}</p>
                            </div>
                        </div>
                        <h1 className=" font-[poppins] md:text-lg lg:text-xl  text-base font-bold py-3 group-hover:underline transition-all hover:text-[#2682F9]">
                            {title}
                        </h1>
                        <div className=" bg-[#F1F2FD] px-3 py-3 rounded-lg flex items-center justify-between gap-2">
                            <div className=" flex items-center gap-2">
                                <img src={profile} alt="Course_profile_image" className=" hidden md:block" />
                                <div>
                                <p className=" font-[poppins] md:text-base font-bold">{name}</p>
                                <p className=" font-[poppins] text-slate-600 text-sm">{domain}</p>
                                </div>
                            </div>
                            <div>
                            <p className=" font-[poppins] font-bold text-lg text-[#2682F9]">{price}</p>
                            <p className=" font-[poppins] md:text-base text-sm text-[#F57005]">{lesson}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BestCourse2Card