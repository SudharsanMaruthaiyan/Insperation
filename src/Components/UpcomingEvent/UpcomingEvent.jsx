import { UpcomingCardApi } from "../../assets/Api/UpcomingCardApi"
import UpcomingEventCard from "./UpcomingEventCard/UpcomingEventCard"


const UpcomingEvent = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[90%] mx-auto">
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>Event & Program</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Upcoming Events & program</h1>
                </div>
                <div className=' grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-12'>
                    {
                        UpcomingCardApi.map((e,index)=>(
                            <>
                                <div key={index} className="">
                                    <UpcomingEventCard image={e.image} month={e.month} location={e.location} head={e.head} day={e.day} year={e.year} viewdetails={e.viewdetails}/>
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

export default UpcomingEvent