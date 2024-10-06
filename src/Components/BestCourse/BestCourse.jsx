import { BestcourseCardApi } from "../../assets/Api/BestCourseCardApi"
import BestCourseCard from "./BestCourseCard/BestCourseCard"

const BestCourse = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[90%] mx-auto">
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Best Course</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Featured Course On This Month</h1>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-20 md:gap-y-10">
                    {
                        BestcourseCardApi.map((e,index)=>(
                            <>
                                <div key={index}>
                                    <BestCourseCard float={e.float} review={e.review} image={e.image} title={e.title} profile={e.profile} name={e.name} domain={e.domain} lesson={e.lesson} price={e.price} /> 
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

export default BestCourse