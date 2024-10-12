import { Star, Heart, UserRound, Folders } from "lucide-react";
const BestCourseCard = ({
  float,
  review,
  image,
  title,
  profile,
  name,
  domain,
  lesson,
  price,
}) => {
  return (
    <>
      <div>
        <div className=" pt-32">
          <div className=" bg-white shadow-2xl border rounded-3xl px-8 pb-4 py-5 relative group hover:border-[#4F5DE4] transition-all">
            <div className=" absolute -top-48 right-0 md:-top-36 md:right-0 ">
              <div className=" relative bg-[#e6e6e899] rounded-full p-3">
                <img src={image} alt="Course_image" className=" rounded-2xl" />
                <div className=" hover:cursor-pointer absolute top-[30%] -left-5">
                  <Heart className=" w-11 h-11 shadow-lg border p-2 rounded-full stroke-white bg-[#F57005] hover:bg-[#4F5DE4] transition-colors" />
                </div>
              </div>
            </div>

            <div>
              <p className=" bg-[#4F5DE4] text-white px-2 py-1 w-fit rounded-md font-bold  font-[poppins] text-sm">
                {float}
              </p>
              <div className=" flex items-center gap-2 justify-between">
                <div className=" flex items-center pt-7 gap-1">
                  <div className=" flex items-center ">
                    <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                    <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                    <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                    <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                    <Star className=" w-4 stroke-[#F57005] fill-[#F57005]" />
                  </div>
                  <p className=" font-[poppins] text-sm">{review}</p>
                </div>
              </div>
              <h1 className=" font-[poppins] md:text-lg lg:text-xl text-base font-bold py-3 group-hover:underline transition-all hover:text-[#2682F9]">
                {title}
              </h1>
              <div className=" bg-[#F1F2FD] px-3 py-3 rounded-lg flex items-center justify-between gap-2">
                <div className=" flex items-center gap-2">
                    <img src={profile} alt="Course_profile_image" className=" hidden md:block" />
                    <div>
                      <p className=" font-[poppins] text-base font-bold">{name}</p>
                      <p className=" font-[poppins] text-slate-600 text-sm">{domain}</p>
                    </div>
                </div>
                <div>
                  <p className=" font-[poppins] font-bold text-lg text-[#2682F9]">{price}</p>
                  <p className=" font-[poppins] md:text-base text-sm text-[#F57005]">{lesson}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestCourseCard;
