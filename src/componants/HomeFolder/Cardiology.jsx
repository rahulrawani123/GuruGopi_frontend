import React from "react";
import img42 from "../../../public/images/img42.png";
import img6 from "../../../public/images/img6.png";
import img5 from "../../../public/images/img5.png";
import img7 from "../../../public/images/img7.png";
import img8 from "../../../public/images/img8.png";
import img9 from "../../../public/images/img9.png";
import img10 from "../../../public/images/img10.png";
import img11 from "../../../public/images/img11.png";
import img13 from "../../../public/images/img13.png";
import img14 from "../../../public/images/img14.png";
import img15 from "../../../public/images/img15.png";
import img28 from "../../../public/images/img28.png";
import img29 from "../../../public/images/img29.jpeg";
import img30 from "../../../public/images/img30.jpeg";
import img31 from "../../../public/images/img31.jpeg";
import img32 from "../../../public/images/img32.png";
import img33 from "../../../public/images/img33.png";
import img39 from "../../../public/images/img39.png";
import img40 from "../../../public/images/img40.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiNumberCircleZeroLight } from "react-icons/pi";
import img41 from "../../../public/images/img41.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation } from "swiper/modules";
import AccordionItem from "../accordionitems/AccordionItem";
import Accordiontwo from "../accordionitems/Accordiontwo";
import { NavLink } from "react-router-dom";

const Cardiology = () => {
  return (
    <>
      <div className="bg-gray-50 h-fit">
        <div
          className=" max-w-screen-xl lg:mx-auto mx-5 gap-32  justify-center items-center mt-5  
     lg:flex md:flex sm:hidden hidden p-7"
        >
          <div className="">
            <img src={img42} alt="" className="h-6 ml-2 " />
            <NavLink to='/contact'>
            <button className="mt-8 bg-[#086AAE] text-white text-xs py-2.5 px-7 rounded-2xl ">
              Enquiry Now
            </button>
            </NavLink>
           
            <button className="text-[#086AAE] ml-5 border-[#086AAE] border text-xs py-2.5 px-7 rounded-2xl bg-white">
              Find A Doctor
            </button>
          </div>

          <div className=" ">
            <img src={img28} alt="" className=" w-[450px] mt-10" />
          </div>

          {/* import code bad me pic ke place me code ko fix krna hai */}

          {/* <div className='text-xs mr-28'>

<p className='w-80 -ml-48 mt-16'>Among India's leading centres for end-to-</p>
<p className='w-80 -ml-[158px] '> end care Of all musculoskeletal and</p>
<p className='w-80 -ml-[185px] '>orthopaedic conditions</p>

<p  className='w-80 -ml-72 mt-10'>Dedicated specialists for each joint</p>
<p  className='w-80 -ml-[204px]'>of the human body</p>

<p className='w-80 -ml-80 mt-10'>World-renowned expertise in joint</p>
<p   className='w-80 -ml-[316px]'>replacement surgery, with success</p>
<p   className='w-80 -ml-72'>rates on par with global best</p>

<p className='w-80 -ml-[320px] mt-10'> Multidisciplinary team of orthopaedic</p>
<p  className='w-80 -ml-[294px]'>surgeons for comprehensive and</p>
<p  className='w-80 -ml-[332px]'>personalised treatment plans backed by</p>
 <p className='w-80 -ml-[262px]'>state-of-the-art technology</p>

 <p className='w-80 -ml-[200px] mt-10'>Holistic care achieved with</p>
<p className='w-80 -ml-[220px]'>anaesthesia and pain medicine</p>
<p className='w-80 -ml-[252px]'>specialists, physical and occupational</p>
<p className='w-80 -ml-[106px]'>therapists</p> 
<img src={img5} alt='' className='h-96 -mt-[430px] ' />
</div> */}
        </div>
      </div>

      <div
        className="mt-16  justify-center text-center 
    lg:flex md:flex sm:hidden hidden"
      >
        <h1 className="">
          Mastering the Complexity of Neurological Health with Specialized Care
        </h1>
      </div>

      <div className=" max-w-screen-xl mx-auto mt-11 ">
        <div className="hidden justify-center items-center lg:flex md:flex lg:flex-row md:flex-row lg:gap-14 gap-10">
          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img src={img29} alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              At Guru, experts from across disciplines and specialities come
              together to comprehensively assess patients and offer the best
              possible treatment plan using the most advanced medical
              technology, techniques and protocols
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64   shadow-2xl rounded-2xl border ">
            <img src={img30} alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Our doctors — among the pioneers of bilateral procedure and
              minimally invasive total knee replacement surgery in India — have
              designed and developed patented instruments for MIS total knee
              replacement surgeries, now used by surgeons worldwide
            </p>
          </div>

          <div className="flex flex-col h-[340px] lg:w-72 md:w-64    shadow-2xl rounded-2xl border ">
            <img src={img31} alt="" className="     w-96 -mt-4 " />
            <p className="lg:w-72 text-sm  p-3 mt-0.5">
              Dedicated experts for each joint of the body are backed by
              specially trained nurses and occupational therapists work together
              to ensure complete patient well-being pre and post surgery for
              optimal outcome
            </p>
          </div>
        </div>
      </div>

      <div
        className="mt-12  justify-center text-center 
   lg:flex md:flex sm:hidden hidden "
      >
        <img src={img11} alt="" className="h-10" />
      </div>

      <div
        className="mt-1  justify-center text-center
lg:flex md:flex sm:hidden hidden "
      >
        <p className="mt-3 w-full">
          Team approach and compassionate care for holistic heart health{" "}
        </p>
      </div>

      <div className="max-w-screen-xl lg:mx-auto mx-5 mt-5  ">
        <div className="lg:flex md:flex hidden lg:flex-row md:flex-row justify-center items-center gap-10">
          <div>
            <hr className="lg:w-60 md:w-36 border-t-2 border-[#aea9a9] my-1 mx-auto " />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className="text-xs">TAVI</h1>
              <MdOutlineKeyboardArrowRight className="" />
            </div>

            <hr className="lg:w-60 md:w-36  border-t-2 border-[#086AAE] my-1 mx-auto" />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className="">Peripheral Angioplasty</h1>
              <MdOutlineKeyboardArrowRight className=" " />
            </div>

            <hr className="lg:w-60 md:w-36 border-t-2 border-[#aea9a9] my-1 mx-auto" />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className=""> CABG</h1>
              <MdOutlineKeyboardArrowRight className="  " />
            </div>

            <hr className="lg:w-60 md:w-36  border-t-2 border-[#aea9a9] my-1 mx-auto" />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className="">Aneurysm Repair</h1>
              <MdOutlineKeyboardArrowRight className="  " />
            </div>

            <hr className="lg:w-60 md:w-36  border-t-2 border-[#716e6e] my-1 mx-auto" />
          </div>

          <div>
            <img src={img32} alt="" className="lg:w-52 md:w-40 mt-6" />
          </div>
          <div>
            <p className="lg:w-96 md:w-80 text-xs mt-6">
            TAVI is a surgical procedure performed to replace a 
blocked or
narrowed aortic valve in people who are at 
greater risk or too sick for
open heart surgery. The 
TAVR(TAVI) procedure involves the
implantation of aortic 
valve without even eliminating the old,
damaged valve with 
the help of a catheter.
            </p>
          </div>
        </div>
      </div>

      {/* AILMENTS */}

      <div className="lg:bg-[#D9D9D9] md:bg-[#D9D9D9]   p-1 mt-10">
        <div
          className="  justify-center text-center
   lg:flex md:flex sm:hidden hidden  "
        >
          <img src={img14} alt="" className="h-10 mt-6" />
        </div>

        <div
          className="mt-1  justify-center text-center lg:flex md:flex sm:hidden hidden 
 "
        >
          <p
            className="mt-3 w-full
"
          >
            The successful treatment of orthopaedic & musculoskeletal disorders
            and{" "}
          </p>
        </div>

        <div className="justify-center text-center lg:flex md:flex sm:hidden hidden ">
          <p className="">diseases requires team approach and care.</p>
        </div>
     

      <div className="max-w-screen-xl lg:mx-auto mx-5 mt-5 mb-10 ">
        <div className="lg:flex md:flex hidden lg:flex-row md:flex-row justify-center items-center gap-10">
          <div>
            <hr className="lg:w-60 md:w-36 border-t-2 border-[#aea9a9] my-1 mx-auto " />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className="text-xs">Coronary Artery Disease</h1>
              <MdOutlineKeyboardArrowRight className="" />
            </div>

            <hr className="lg:w-60 md:w-36  border-t-2 border-[#086AAE] my-1 mx-auto" />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className="">Rheumatic Heart Disease</h1>
              <MdOutlineKeyboardArrowRight className=" " />
            </div>

            <hr className="lg:w-60 md:w-36 border-t-2 border-[#aea9a9] my-1 mx-auto" />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className=""> Heart Failure</h1>
              <MdOutlineKeyboardArrowRight className="  " />
            </div>

            <hr className="lg:w-60 md:w-36  border-t-2 border-[#aea9a9] my-1 mx-auto" />
            <div className="flex justify-between text-[#086AAE]">
              <h1 className="">Hypertension</h1>
              <MdOutlineKeyboardArrowRight className="  " />
            </div>

            <hr className="lg:w-60 md:w-36  border-t-2 border-[#716e6e] my-1 mx-auto" />
          </div>

          <div>
            <img src={img33} alt="" className="lg:w-52 md:w-40 mt-6" />
          </div>
          <div>
            <p className="lg:w-96 md:w-80 text-xs mt-6">
              Coronary artery disease (CAD) is a common cardiovascular condition
              characterized by the narrowing or blockage of the coronary
              arteries, which supply blood and oxygen to the heart muscle. It
              can lead to various complications, such as angina (chest pain),
              heart attack, or heart failure. Lifestyle modifications,
              medications, and medical procedures like angioplasty or bypass
              surgery are often used to manage CAD. It is important to consult
              with a healthcare professional for accurate diagnosis and
              personalized treatment options.
            </p>
          </div>
        </div>
      </div>


      </div>




      {/* Mobile device */}

      
<div className="bg-[#D9D9D9] lg:hidden md:hidden p-6 -mt-8 ">


      
     <h1 className="text-center lg:hidden md:hidden block font-semibold text-xl ">Cardiology</h1>
      <div className="lg:hidden md:hidden mt-3 flex justify-center items-center ">
        <img src={img40} alt="" />
      </div>

      {/* MOBILE DEVICE SLIDER */}

      <div className="flex mt-2 lg:hidden md:hidden  mx-6  items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex">
              <PiNumberCircleZeroLight className="w-20 h-5 mt-1.5 text-[#086AAE]" />
              <p>
                Among India's largest and one of the world's most successful
                Heart Care teams led by pioneers
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex">
              <PiNumberCircleZeroLight className="w-12 h-5 mt-1.5 text-[#086AAE]" />
              <p>Dedicated specialists for each joint of the human body</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex">
              <PiNumberCircleZeroLight className="w-28 h-5 mt-1.5 text-[#086AAE]" />
              <p>
                World-renowned expertise in joint replacement surgery, with
                success rates on par with global best
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex">
              <PiNumberCircleZeroLight className="w-24 h-5 mt-1.5 text-[#086AAE]" />
              <p>
                Multidisciplinary team of orthopaedic surgeons for comprehensive
                and personalised treatment plans backed by state-of-the-art
                technology
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex">
              <PiNumberCircleZeroLight className="w-20 h-5 mt-1.5 text-[#086AAE]" />
              <p>
                Holistic care achieved with anaesthesia and pain medicine
                specialists, physical and occupational therapists
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="text-center justify-center flex gap-6 lg:hidden md:hidden">
       <NavLink to='/contact'>
       <button className="bg-[#086AAE] text-white text-xs py-2.5 px-7 rounded-2xl ">
          Enquiry Now
        </button>
       </NavLink>
        <button className="text-[#086AAE] border-[#086AAE] border text-xs py-2.5 px-7 rounded-2xl bg-white">
          Find A Doctor
        </button>
      </div>

     
      </div>











      <div className="mt-14 mx-12  text-sm text-center justify-center flex lg:hidden md:hidden">
        <h1>
          {" "}
          Mastering the Complexity of Neurological Health with Specialized Care
        </h1>
      </div>

      {/* SLIDEA */}

      <div className="flex mt-4 lg:hidden md:hidden  mx-6  items-center  justify-center   ">
        <Swiper
          slidesPerView={1}
          spaceBetween={80}
          freeMode={true}
          loop={true}
          // navigation={true}
          modules={[EffectCoverflow, Navigation]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src={img41} alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                A team of cardiac surgeons, interventional cardiologists and
                interventional cardiologist works seamlessly to ensure that each
                patient receives the benefit of comprehensive advice that is
                free of individual bias.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src={img29} alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                A team of cardiac surgeons, interventional cardiologists and
                interventional cardiologist works seamlessly to ensure that each
                patient receives the benefit of comprehensive advice that is
                free of individual bias.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-[356px]     rounded-2xl border ">
              <img src={img31} alt="" className="    rounded-t-2xl  -mt-4  " />
              <p className="w-72 text-sm ml-2 p-3 mt-0.5">
                A team of cardiac surgeons, interventional cardiologists and
                interventional cardiologist works seamlessly to ensure that each
                patient receives the benefit of comprehensive advice that is
                free of individual bias.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className="mt-4  justify-center flex text-center
    md:hidden lg:hidden  "
      >
        <img src={img11} alt="" className="h-9 mt-6" />
      </div>

      <div
        className="mt-3  justify-center flex text-center
    md:hidden lg:hidden mx-16 "
      >
        <p className="text-sm ">
          Team approach and compassionate care for holistic heart health
        </p>
      </div>

      <hr className="  md:hidden lg:hiddCoronary artery disease (CAD) is a common 
      cardiovascular condition characterized by the narrowing or blockage of the coronary 
      arteries, which supply blood and oxygen to the heart muscle. It can lead to various 
      complications, such as angina (chest pain), heart attack, or heart failure. Lifestyle modifications,
       medications, and medical procedures like angioplasty or bypass surgery are often used to manage CAD.
        It is important to consult with a healthcare professional for accurate diagnosis and personalized 
        treatment options.en mt-5 w-[340px] border-black  mx-auto " />

      <AccordionItem />


      <div
        className="mt-4  justify-center flex text-center
    md:hidden lg:hidden  "
      >
        <img src={img14} alt="" className="h-9 mt-6" />
      </div>


      <div
        className="mt-3  justify-center flex text-center
    md:hidden lg:hidden  mx-auto"
      >
        <p className="text-sm ">
        The successful treatment of orthopaedic & 
musculoskeletal disorders and diseases requires 
team approach and care.
        </p>
      </div>
      <Accordiontwo />
    </>
  );
};

export default Cardiology;