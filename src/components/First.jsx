import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight, FaRegArrowAltCircleRight } from "react-icons/fa";

const First = () => {

    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.9' className="first ">
            <div className="main flex w-[100%] h-[100%] items-center">

                <div className='font-bold h-[100vh] text-[18vh] sm:text-[18vh] leading-none flex flex-col justify-center ml-[5vw]'>
                    <div className="first">
                        <h1>WE CREATE</h1>
                    </div>

                    <div className="second flex h-fit ">
                        <motion.div initial={{ width: 0 }} animate={{ width: "12vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className="img w-[12vw] bg-red-800 rounded-md ">

                        </motion.div>
                        <h1>SUCCESSFUL</h1>
                    </div>

                    <div className="third">

                        <h1>CAREERS</h1>
                    </div>



                </div>
                <div className="img border rounded-lg relative top-0"><img src="https://lh3.googleusercontent.com/proxy/G9iwWOBBGOjcByltFWjvkr7rp2E_XHL7Mju1-L5yDzpbc3R29Qvl7HVemzhgS8ZLaxNI-Kfa82CNzu_Nvzu_H6GZAwUaHwtkO_UUhy23" alt="" /></div>
            </div>
            <div className="line w-[100vw] bg-black h-[0.1vh] relative -top-[20vh]"></div>
            <div className="bottom relative -top-[18vh] flex justify-between items-center ">
                {["100 % PLACEMENTS", ""].map((item, index) => (
                    <h6 className='sm:text-[2vh]'>{item}</h6>


                ))}
                <div className="right flex items-center  ">
                    <button className='border border-black rounded-full h-[5vh] mx-5 flex items-center justify-center p-5 hover:bg-black hover:text-white'> <a href="http://imsec.ac.in/admissions/admission-procedure">ForAdmission</a>  </button>
                    <FaRegArrowAltCircleRight className='h-[8vh] w-[8vh] -rotate-45 hover:bg-gray-700  border rounded-full hover:text-white ' />
                </div>

            </div>
        </div>
    )
}

export default First
