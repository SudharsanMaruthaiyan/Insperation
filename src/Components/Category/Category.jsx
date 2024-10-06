import { ArrowRight, ArrowUpRight,Boxes } from "lucide-react"

const Category = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[90%] mx-auto overflow-hidden">
                <div className=' flex flex-col items-center justify-center  xl:mt-32 py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Admission</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Admission Process</h1>
                </div>
                <div className="">
                    <div className=' grid grid-cols-1 md:grid-cols-8 md:gap-12 lg:items-center items-start'>
                        <div className=" md:col-span-4 col-span-8">
                            <h1 className=" bg-[#2682F9] text-white font-[poppins] py-1 px-3 w-fit rounded-lg text-nowrap">Which Category Intrest You</h1>
                            <div>
                                <h1 className=" font-[poppins] text-wrap lg:text-[48px] text-[28px] py-8 font-bold leading-none">Browse Our Online Course Categories</h1>
                                <p className=" text-slate-600 font-[poppins] text-wrap">Sit amet consectetur adipiscing sed eiusmod tempore labore dolore magna aliuaes suspendisse ultrice gravida commodo viverra maecenas lacus.</p>
                                <button className=" font-[poppins] font-bold text-[#14C88C] hover:text-[#2682F9] flex items-center gap-1 py-6">View Categories <ArrowRight className=" w-5"/> </button>
                            </div>
                        </div>
                        <div className="col-span-8 md:col-span-4 mb-20">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
                            <div className=" hover:bg-[#2682F9] bg-white border py-6 relative flex flex-col items-center transition-colors group">
                                <Boxes className=" stroke-1 lg:w-20 lg:h-20 w-10 h-10 group-hover:text-white transition-colors"/>
                                <h1 className=" font-[poppins] lg:text-lg text-base font-bold pt-8 group-hover:text-white transition-colors">Art & Design</h1>
                                <ArrowUpRight className="absolute right-4 top-4 group-hover:text-white transition-colors"/>
                            </div>
                            <div className=" hover:bg-[#2682F9] bg-white border py-6 relative flex flex-col items-center group">
                                <Boxes className="  lg:w-20 lg:h-20 w-10 h-10 group-hover:text-white stroke-1"/>
                                <h1 className=" font-[poppins] lg:text-lg text-base font-bold pt-8 group-hover:text-white">Web Development</h1>
                                <ArrowUpRight className=" absolute right-4 top-4 group-hover:text-white"/>
                            </div>
                            <div className=" hover:bg-[#2682F9] bg-white border py-6 relative flex flex-col items-center group">
                                <Boxes className="  lg:w-20 lg:h-20 w-10 h-10 stroke-1 group-hover:text-white"/>
                                <h1 className=" font-[poppins] lg:text-lg text-base font-bold pt-8 group-hover:text-white">Business</h1>
                                <ArrowUpRight className=" absolute right-4 top-4 group-hover:text-white"/>
                            </div>
                            <div className=" hover:bg-[#2682F9] bg-white border py-6 relative flex flex-col items-center group">
                                <Boxes className="  lg:w-20 lg:h-20 w-10 h-10 stroke-1 group-hover:text-white"/>
                                <h1 className=" font-[poppins] lg:text-lg text-base font-bold pt-8 group-hover:text-white">Marketing</h1>
                                <ArrowUpRight className=" absolute right-4 top-4 group-hover:text-white"/>
                            </div>
                            <div className=" hover:bg-[#2682F9] bg-white border py-6 relative flex flex-col items-center group">
                                <Boxes className="  lg:w-20 lg:h-20 w-10 h-10 stroke-1 group-hover:text-white"/>
                                <h1 className=" font-[poppins] lg:text-lg text-base font-bold pt-8 group-hover:text-white">Web Design</h1>
                                <ArrowUpRight className=" absolute right-4 top-4 group-hover:text-white"/>
                            </div>
                            <div className=" hover:bg-[#2682F9] bg-white border py-6 relative flex flex-col items-center group">
                                <Boxes className="  lg:w-20 lg:h-20 w-10 h-10 stroke-1 group-hover:text-white"/>
                                <h1 className=" font-[poppins] lg:text-lg text-base font-bold pt-8 group-hover:text-white">Photography</h1>
                                <ArrowUpRight className=" absolute right-4 top-4 group-hover:text-white"/>
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

export default Category