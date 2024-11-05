import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar />

      <div className=" flex flex-col lg:flex-row items-center justify-between px-4  max-w-screen-lg mx-auto ">
        <div className="flex-1 text-center lg:text-left space-y-6   lg:w-[50%]">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold lg:w-[596px] lg:h-[189px] leading-snug">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className=" text-lg text-[#787054] mx-auto lg:mx-0 mt-4 mb-6 leading-snug   ">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          <button className="bg-[#A29875] text-white font-bold w-[288px] h-[50px] mt-4 rounded-[10px] p-[10px] gap-[10px] text-lg mx-auto lg:mx-0  ">
            Explore Now
          </button>
        </div>
        <div className="flex-1 mt-6 lg:mt-0 flex justify-center lg:justify-end py-16">
        <div className="relative w-[421.38px] h-auto max-w-full lg:h-[500px]">
          <Image
            src={"/images/hero.png"}
            alt="Manzzari necklace"
            width={421.38}
            height={400}
            className=" max-w-full h-auto "
          />
        </div>
      </div>
    </div>
    </div>
  );
}
