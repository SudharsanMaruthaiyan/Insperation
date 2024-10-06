import { BestCourseCard2Api } from "../../assets/Api/BestCourseCard2Api"
import BestCourse2Card from "./BestCourse2Card/BestCourse2Card"


const BestCourse2 = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[90%] mx-auto">
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Best Course</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Featured Course On This Month</h1>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12'>
                    {
                        BestCourseCard2Api.map((e,index)=>(
                            <>
                                <div key={index}>
                                    <BestCourse2Card float={e.float} review={e.review} image={e.image} title={e.title} profile={e.profile} name={e.name} domain={e.domain} lesson={e.lesson} price={e.price} /> 
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default BestCourse2