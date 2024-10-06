import { Star, Heart, UserRound, Folders } from "lucide-react";

const FeatureCourse2Card = ({float,review,image,title,profile,name,domain,lesson,price,}) => {
  return (
    <>
        <div>
            <div className="">
                <div className=" bg-white shadow-2xl border-2 rounded-3xl flex md:flex-row flex-col group transition-all hover:border-[#F57005]">
                    <div className="">
                        <img src={image} alt="Course_image" className="w-full md:h-full md:rounded-l-3xl rounded-t-3xl" />
                    </div>
                    <div className="p-5">
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
                        <div className=" bg-[#F1F2FD] px-3 py-3 rounded-lg flex items-center justify-between">
                            <div className=" flex items-center gap-2">
                                <img src={profile} alt="Course_profile_image" className="" />
                                <div>
                                <p className=" font-[poppins] text-base font-bold">{name}</p>
                                <p className=" font-[poppins] text-slate-600 text-sm">{domain}</p>
                                </div>
                            </div>
                            <div>
                            <p className=" font-[poppins] font-bold text-lg text-[#2682F9]">{price}</p>
                            <p className=" font-[poppins] text-base text-[#F57005]">{lesson}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FeatureCourse2Card