import React, { useState } from 'react';
import img51 from '../../../public/images/img51.png';
import { MdPhoneInTalk } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Contact = () => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [mobile_no, setMobileNo] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};
        if (!first_name) {
            errors.first_name = "First name is required";
        }
        if (!last_name) {
            errors.last_name = "Last name is required";
        }
        if (!email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Email address is invalid";
        }
        if (!mobile_no) {
            errors.mobile_no = "Mobile number is required";
        }
        if (!message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const handleContactUs = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        axios.post('http://localhost:5000/contactus_data', { first_name, last_name, mobile_no, email, message })
            .then(response => {
                alert("Thank you for contacting us!");
                navigate("/");
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <>
            <div className='mt-4 relative'>
                <img className='w-full' src={img51} alt='' />
                <h1 className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 text-white text-3xl'>Contact Us</h1>
                <p className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-20 text-black lg:w-[35%] w-64 lg:text-sm text-xs'>
                    We would love to hear from you! Please fill in the required details and our team will get in touch with you.
                </p>
            </div>

            <div className='max-w-screen-xl lg:mx-48 mx-8 2xl:mx-auto'>
                <div className='mt-8 lg:flex md:flex lg:flex-row md:flex-row flex-col justify-center gap-10 lg:absolute lg:top-80 transform'>
                    <div className='shadow-2xl rounded-2xl lg:w-fit lg:h-96 md:h-fit py-20 px-6 w-fit bg-[#FFFFFF]'>
                        <h1 className='text-xl mx-8 -mt-10'>Contact Details</h1>
                        <div className='flex mt-4 mx-6'>
                            <MdPhoneInTalk className='text-2xl text-white border rounded-full bg-[#086AAE] border-blue-900 mt-3' />
                            <h1 className='mx-4'>Phone Number</h1>
                        </div>
                        <h1 className='mx-16 -mt-3'>+91 111 222 4689</h1>

                        <div className='flex mx-6'>
                            <CiShare2 className='text-2xl text-white border rounded-full bg-[#086AAE] border-[#086AAE] mt-10' />
                            <h1 className='mt-6 mx-4'>Follow us</h1>
                        </div>
                        <div className='flex mx-[57px] gap-4 -mt-2 text-[#086AAE]'>
                            <FaFacebookF />
                            <FaInstagram />
                            <FiYoutube />
                            <FaLinkedin />
                        </div>
                    </div>

                    <div className='shadow-2xl rounded-2xl lg:text-xl bg-white py-3 mt-10 px-6 md:px-28 lg:px-0 mb-20 lg:mb-0 lg:mt-0 md:mt-0'>
                        <div className='mt-5 flex gap-5 items-center justify-center'>
                            <button className='bg-[#086AAE] text-white text-xs py-2 px-4 rounded-2xl'>Enquiry</button>
                            <button className='text-[#086AAE] bg-white border border-blue-500 text-xs py-2 px-4 rounded-2xl'>Feedback</button>
                            <button className='text-[#086AAE] bg-white border border-blue-500 text-xs py-2 px-4 rounded-2xl'>Other</button>
                        </div>

                        <form onSubmit={handleContactUs}>
                            <div className='lg:flex lg:flex-row flex-col lg:gap-20 lg:mx-10 mt-10'>
                                <div>
                                    <h1 className='text-sm'>First Name</h1>
                                    <input type='text' placeholder='Enter your first name' className='border-b-2 border-gray-700 text-sm w-52' value={first_name} onChange={(e) => setFirstName(e.target.value)} />
                                    {errors.first_name && <p className="text-red-500 text-xs italic">{errors.first_name}</p>}
                                </div>

                                <div>
                                    <h1 className='text-sm'>Last Name</h1>
                                    <input type='text' placeholder='Enter your last name' className='border-b-2 border-gray-700 text-sm w-52' value={last_name} onChange={(e) => setLastName(e.target.value)} />
                                    {errors.last_name && <p className="text-red-500 text-xs italic">{errors.last_name}</p>}
                                </div>
                            </div>

                            <div className='lg:flex lg:flex-row flex-col lg:gap-20 lg:mx-10 mt-10'>
                                <div>
                                    <h1 className='text-sm'>Mobile No.</h1>
                                    <input type='text' placeholder='Enter your mobile number' className='border-b-2 border-gray-700 text-sm w-52' value={mobile_no} onChange={(e) => setMobileNo(e.target.value)} />
                                    {errors.mobile_no && <p className="text-red-500 text-xs italic">{errors.mobile_no}</p>}
                                </div>

                                <div>
                                    <h1 className='text-sm'>E-mail</h1>
                                    <input type='email' placeholder='Enter your email' className='border-b-2 border-gray-700 text-sm w-52' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                                </div>
                            </div>

                            <div className='lg:mx-10 mt-4'>
                                <h1 className='text-sm'>Your Message</h1>
                                <div className="border rounded-md">
                                    <textarea placeholder="Enter your message here" className="py-2 text-sm outline-none w-full" value={message} onChange={(e) => setMessage(e.target.value)} />
                                    {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                                </div>
                            </div>

                            <div className='mt-4 text-center'>
                                <button type='submit' className='bg-[#086AAE] text-white text-xs py-2 px-7 rounded-2xl' onClick={handleContactUs}>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
