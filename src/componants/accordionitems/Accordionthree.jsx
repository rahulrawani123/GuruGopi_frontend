
import React, { useState } from 'react';
import img1 from '../../../public/images/img1.png'
import img32 from '../../../public/images/img32.png';
import img33 from '../../../public/images/img33.png';
import { IoIosArrowUp } from "react-icons/io";

const AccordionItem = ({ title, imageSrc, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 lg:hidden md:hidden block">
      <button
        className="w-full bg-white p-4 text-left rounded-md border-b border-gray-700 focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span className={`ml-auto transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition duration-300 ease-in-out`}><IoIosArrowUp /></span>
      </button>
      <div className={`mt-2  rounded-md overflow-hidden transition-max-height duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className='flex justify-center'>
        <img src={imageSrc} alt="Accordion Image" className="w-48 mt-4" />
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

const Accordionthree = () => {
  return (
    <div className="mx-5  mt-8">
      <AccordionItem
        title="Sports Injuries "
        content="Sports injuries cover a range of conditions, such as 
        knee sports
        injuries, including ACL (Anterior Cruciate 
        Ligament), PCL (Posterior
        Cruciate Ligament), and 
        MPFL (Medial Patellofemoral Ligament)
        issues."
        imageSrc={img32} 
       
      />
      <AccordionItem
        title="Joint Replacement"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img33} 

      />
      <AccordionItem
        title="Arthroscopy"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img32} 
      />
    

    <AccordionItem
        title="Paediatric Orthopaedics"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc={img32} 
      />

    </div>
    
  );
};

export default Accordionthree;



