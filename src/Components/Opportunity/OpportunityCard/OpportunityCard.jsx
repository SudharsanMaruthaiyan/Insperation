import { ArrowRight } from "lucide-react"


const OpportunityCard = ({image,ctn,readmore,course}) => {
  return (
    <>
        <div className=" bg-[#F5F6FA] rounded-2xl relative pb-36 pt-48 overflow-hidden group" id="bg">
            <div className=" absolute -right-5 -top-8">
                <img src={image} alt="Opportunity_image" className=" rounded-full w-[180px] group-hover:scale-125 transition ease-in-out group-hover:translate-y-5 group-hover:-translate-x-5 duration-700"/>
            </div>
            <div className=" absolute -bottom-10 group-hover:bottom-0 transition-all ease-in-out duration-300 px-8">
                <div >
                    <h1 className=" font-[poppins] font-bold text-xl group-hover">{course}</h1>
                    <p className=" font-[poppins] text-slate-600 py-6 text-wrap change group-hover:text-slate-200 transition-all">{ctn}</p>
                </div>
                <div className=" pb-5">
                    <button  className=" font-[poppins] flex gap-1 font-bold hover:text-[#14C88C]">{readmore} <ArrowRight className=" w-5"/></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default OpportunityCard