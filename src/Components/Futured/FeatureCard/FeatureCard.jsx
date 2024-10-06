import { ArrowRight } from "lucide-react"

const FeatureCard = (props) => {
  return (
    <>
        <div className="">
            <div className=' relative overflow-hidden group'>
                    <img src={props.image} alt="Course_image" className=" rounded-[40px] h-[400px]"/>
                    <div className=' absolute lg:top-[51.5%] top-[52.9%] group-hover:lg:top-[32.8%] group-hover:top-[35%] transition-all ease-in-out delay-100'>
                        <div className="bg-[#F6F4EF] p-6 rounded-[40px] group-hover:rounded-b-none transition-all group-hover:delay-0  delay-200">
                            <h1 className=" lg:text-2xl text-xl font-[poppins] font-bold py-7 ">{props.head}</h1>
                            <div className=' flex items-center justify-between'>
                                <p className=" font-[poppins]">{props.buyer}</p>
                                <p className=" text-[#09A074] font-[poppins] font-bold text-xl">{props.price}</p>
                            </div>
                        </div>
                        <div className=" border-t-2 p-6 border-white bg-[#F6F4EF] rounded-b-3xl">
                            <button className=" text-[#2A1DF3] flex items-center gap-2">{props.enroll} <ArrowRight className=" w-5"/> </button>
                        </div>
                    </div>
            </div>
        </div>
    </>
  )
}

export default FeatureCard