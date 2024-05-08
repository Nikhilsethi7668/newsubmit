import { motion } from 'framer-motion';
import React from 'react';

function Marqee() {
    return (
        <div data-scroll data-scroll-speed='0.1' className="marquee h-[50vh] overflow-hidden relative top-[10vh] ">
            <div className="start bg-blue-300 h-[100%] flex whitespace-nowrap leading-none absolute top-[10vh]">

                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
                    className='text-[35vh]  text-red-800'>
                    JOIN US TO GET BRIGHT FUTURE || IMSEC ||
                </motion.h1>

            </div>
        </div>
    );
}

export default Marqee;
