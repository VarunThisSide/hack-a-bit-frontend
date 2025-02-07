import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Image from "next/image";

export default function Home() {
  return (
    <>

      <div className="flex justify-between items-center px-16 mb-32 max-lg:flex-col">
        <div className="flex flex-col  justify-center items-center gap-20 w-[50vw] ">
          <Image src='/optimized_hackabit_logo.svg' width={627} height={627} alt='hackAbit_logo' className=" max-lg:mt-11"></Image>
          <div className="text-center text-2xl max-sm:text-lg">POWERED BY <span className="font-bold">ACM BIT MESRA</span>,<span className='font-[roboto] text-3xl max-sm:text-xl'> hackAbit</span> IS WHERE INNOVATION MEETS CREATIVITY. LET'S CODE, COLLABORATE, AND CREATE THE FUTURE TOGETHER!</div>
          <button className="bg-[#4197C8] relative rounded-full -none px-11 py-3 font-bold hover:scale-105 flex justify-center items-center">
            <div className="glowing-effect"></div>
            REGISTER HERE</button>
        </div>
        <div className="flex justify-center items-center relative h-[740px] w-[740px] max-sm:h-[350px] max-sm:w-[350px] max-xl:h-[650px] max-xl:w-[650px] max-2xl:h-[740px] max-2xl:w-[740px]">
          <div className="absolute bg-[#9747FF] h-[580px] w-[580px] max-sm:h-[280px] max-sm:w-[280px] max-xl:h-[505px] max-xl:w-[505px] max-2xl:h-[580px] max-2xl:w-[580px] rounded-full -z-10 bottom-0 opacity-65"></div>
          <Image className="" src='/Mask-group.svg' alt='mask' fill></Image>
        </div>
      </div>

      <Sponsors/>
      <Gallery/>
    </>
  );
}