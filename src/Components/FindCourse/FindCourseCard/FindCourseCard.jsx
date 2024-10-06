import { Folders,UserRound, Heart, Star, ArrowRight } from "lucide-react"
import { course1 } from "../../../assets/Api/image"

const FindCourseCard = ({float,name,lesson,price,cart,rating,student,profile,image,domain,title}) => {
  return (
    <>
        <div>
            <div className=" pt-32">
                <div className=" bg-white shadow-2xl border rounded-3xl px-8 pb-4 pt-44 relative">
                    <div className=" absolute -top-36 left-0 ">
                        <div className=" relative p-3">
                            <img src={image} alt="Course_image" className=" rounded-2xl" />
                            <p className=" bg-[#2682F9] text-white px-2 py-1 w-fit rounded-md font-bold  font-[poppins] text-sm absolute top-8 left-8">{float}</p>
                        </div>
                        <div className=" absolute w-full -bottom-1">
                            <div className=" flex items-center gap-2 justify-between px-8">
                                <div className=" flex items-center shadow-lg border px-3 py-1 rounded-3xl bg-white gap-1">
                                    <div className=" flex items-center ">
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                        <Star className=" w-4 stroke-[#ED9700] fill-[#ED9700]"/>
                                    </div>
                                    <p>{rating}</p>
                                </div>
                                <div className=" hover:cursor-pointer">
                                    <Heart className=" w-9 h-9 bg-white shadow-lg border p-2 rounded-full"/>    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" flex items-center gap-2">
                        <img src={profile} alt="Course_profile_image" className=" rounded-full w-8" />
                        <p className=" font-[poppins]"> <span className=" text-[#2682f9]">{name}</span> {domain}</p>
                    </div>
                    <div>
                        <h1 className=" font-[poppins] md:text-xl text-lg font-bold py-3">{title}</h1>
                        <div className=" flex items-center gap-4">
                            <div className=" flex items-center gap-1">
                                <UserRound className=" w-5 fill-[#2682F9] stroke-[#2682F9]"/>
                                <p className=" font-[poppins] text-slate-600">{student}</p>
                            </div>
                            <div className=" flex items-center gap-1">
                                <Folders className=" w-5 fill-[#2682F9] stroke-[#2682F9]"/>
                                <p className=" font-[poppins] text-slate-600">{lesson}</p>
                            </div>
                        </div>
                        <div className=" py-4">
                            <div className=" flex items-center bg-[#F5F6FA] rounded-md shadow-2xl justify-between py-3 px-5  relative">
                                <h3 className=" font-[poppins] font-bold text-sm">{price}</h3>
                                <div className=" absolute -top-2 right-0">
                                    <button className=" flex items-center font-[poppins] font-bold bg-[#14C88C] hover:bg-[#2682F9] px-3 py-2 transition-colors rounded-lg text-white text-sm">{cart}<ArrowRight className=" w-5"/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FindCourseCard