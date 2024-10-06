import { OpportunityCardApi } from "../../assets/Api/OpportunityCardApi"
import OpportunityCard from "./OpportunityCard/OpportunityCard"


const Opportunity = () => {
  return (
    <>
        <div className=" max-w-[100%] mx-auto">
            <div className=" w-[90%] mx-auto">
                <div className=' flex flex-col items-center justify-center py-20'>
                    <h1 className=' text-[#5147F5] font-[poppins] font-bold text-sm tracking-[.25em] uppercase py-2'>How About Learn Us</h1>
                    <h1 className=' md:text-[35px] text-2xl font-[poppins] font-bold'>Opportunity for Online Learning</h1>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-12'>
                    {
                        OpportunityCardApi.map((e,index)=>(
                            <>
                                <div key={index}>
                                    <OpportunityCard image={e.image} ctn={e.ctn} course={e.course} readmore={e.readmore}/> 
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

export default Opportunity