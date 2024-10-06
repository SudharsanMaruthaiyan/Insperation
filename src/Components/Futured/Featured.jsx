
import { FeaturedCourseCardApi } from '../../assets/Api/FeaturedCourseCardApi'
import FeatureCard from './FeatureCard/FeatureCard'

const Featured = () => {
  return (
    <>
        <div className=' max-w-[100%] mx-auto overflow-hidden'>
            <div className=' w-[90%] mx-auto'>
                <div className=' flex flex-col items-center justify-center py-10 flex-wrap'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em]'>FEATURED COURSES</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Our Top Courses to learn</h1>
                    <div className=' py-10'>
                        <ul className=' flex items-center gap-5 flex-wrap justify-center'>
                            <li className='  '><a href="" className='hover:bg-[#FFDD74] bg-[#F6F4EF] py-2 px-4 rounded-md transition-colors'>All</a></li>
                            <li className='hover:bg-[#FFDD74] bg-[#F6F4EF] py-2 px-4 rounded-md transition-colors'>Web Development</li>
                            <li className='hover:bg-[#FFDD74] bg-[#F6F4EF] py-2 px-4 rounded-md transition-colors'>Business Manage</li>
                            <li className='hover:bg-[#FFDD74] bg-[#F6F4EF] py-2 px-4 rounded-md transition-colors'>Data Science</li>
                            <li className='hover:bg-[#FFDD74] bg-[#F6F4EF] py-2 px-4 rounded-md transition-colors'>Marketing</li>
                            <li className='hover:bg-[#FFDD74] bg-[#F6F4EF] py-2 px-4 rounded-md transition-colors'>Art & Design</li>
                        </ul>
                    </div>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7'>
                    {
                        FeaturedCourseCardApi.map((e,index)=>{
                            return(
                                <>
                                    <div key={index}>
                                        <FeatureCard image={e.image} head={e.head} buyer={e.buyer} price={e.price} 
                                        enroll={e.enroll}/>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Featured