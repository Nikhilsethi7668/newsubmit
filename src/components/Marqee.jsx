import { motion } from 'framer-motion';
import React from 'react';

function Marqee() {
    return (
        <div data-scroll data-scroll-speed='0.1' className="marquee h-[50vh] overflow-hidden">
            <div className="start bg-black h-[100%] flex whitespace-nowrap leading-none">

                <motion.h1
                    initial={{ x: "-100" }}
                    animate={{ x: "0" }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
                    className='text-[35vh]  text-white relative top-5'>
                    CHOOSE A RIGHT PATH CHOOSE A RIGHT PATH
                </motion.h1>


            </div>
        </div>
    );
}

export default Marqee;
