import { Cuboid, Star } from "lucide-react"


const Reviewc = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[90%] mx-auto">
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>How About Learn Us</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Opportunity for Online Learning</h1>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 shadow-2xl border p-5 rounded-lg'>
                    <div className=" flex flex-col justify-center items-center">
                        <h1 className=" font-[poppins] text-[35px] font-bold">4.8</h1>
                        <div className=" flex items-center gap-1">
                            <Star className=" w-4 fill-[#FF9800] stroke-[#FF9800]"/>
                            <Star className=" w-4 fill-[#FF9800] stroke-[#FF9800]"/>
                            <Star className=" w-4 fill-[#FF9800] stroke-[#FF9800]"/>
                            <Star className=" w-4 fill-[#FF9800] stroke-[#FF9800]"/>
                            <Star className=" w-4 fill-[#FF9800] stroke-[#FF9800]"/>
                        </div>
                        <p className=" font-[poppins] font-medium">3,272 Rating</p>
                    </div>
                    <div className=" flex items-center gap-4">
                        <div className=" bg-[#FFEDE7] p-2 rounded-full border-dotted border-2 border-[#FF5722]">
                            <Cuboid className=" fill-[#FF5722] stroke-white  w-8 h-8"/>
                        </div>
                        <div>
                            <h1 className="  font-[poppins] font-bold text-slate-800 lg:text-lg text-base text-wrap">Best Online <br /> Tutoring</h1>
                        </div>
                    </div>
                    <div className=" flex items-center gap-4">
                        <div className=" bg-[#F2EDFA] p-2 rounded-full border-dotted border-2 border-[#906AD4]">
                            <Cuboid className=" fill-[#906AD4] stroke-white  w-8 h-8"/>
                        </div>
                        <div>
                            <h1 className="  font-[poppins] font-bold text-slate-800 lg:text-lg text-base text-wrap">
                            Fully Lifetime<br /> Access</h1>
                        </div>
                    </div>
                    <div className=" flex items-center gap-4">
                        <div className=" bg-[#E1F6F6] p-2 rounded-full border-dotted border-2 border-[#09B9B1]">
                            <Cuboid className=" fill-[#09B9B1] stroke-white  w-8 h-8"/>
                        </div>
                        <div>
                            <h1 className="  font-[poppins] font-bold text-slate-800 lg:text-lg text-base text-wrap">
                            200+ Cources <br /> Students</h1>
                        </div>
                    </div>
                    <div className=" flex items-center gap-4">
                        <div className=" bg-[#EFF7E6] p-2 rounded-full border-dotted border-2 border-[#87C252]">
                            <Cuboid className=" fill-[#87C252] stroke-white  w-8 h-8"/>
                        </div>
                        <div>
                            <h1 className="  font-[poppins] font-bold text-slate-800 lg:text-lg text-base text-wrap">
                            800k+ Enrolled<br /> Available</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reviewc