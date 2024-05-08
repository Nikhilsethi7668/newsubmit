import React from 'react';

const Footer = () => {

    return (
        <footer data-scroll data-scroll-speed='0.01' className="bg-black h-[100vh] flex items-center">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-white">About Us</h4>
                        <p className="text-gray-300">IMSEC College is dedicated to providing quality education and fostering personal development among its students.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h4 className="text-white hover:bg-white hover:border rounded-xl hover:text-black">Contact Us</h4>
                        <p className="text-gray-300 hover:bg-white hover:border rounded-xl hover:text-black">Address: IMSEC Adhyatmik Nagar Ghaziabad</p>

                        <p className="text-gray-300 hover:bg-white hover:border rounded-xl hover:text-black">Email: IMSEC.info@gmail.com</p>
                        <p className="text-gray-300 hover:bg-white hover:border rounded-xl hover:text-black">Phone:+91 1234567890</p>
                    </div>
                    <div>
                        <h4 className="text-white underline font-bold">Quick Links</h4>
                        <ul>
                            <li className='hover:bg-white hover:font-black hover:border rounded-xl hover:text-black'><a href="http://www.imsec.ac.in/" className="text-gray-300">Home</a></li>
                            <li className='hover:bg-white hover:border hover:font-black rounded-xl hover:text-black'><a href="http://imsec.ac.in/academics/courses" className="text-gray-300">Courses</a></li>
                            <li className='hover:bg-white hover:border rounded-xl hover:text-black'><a href="http://imsec.ac.in/admissions/admission-procedure" className="text-gray-300 hover:font-black">Admissions</a></li>
                            <li><a href="http://imsec.ac.in/about/contact-us" className="text-gray-300 hover:bg-white hover:border rounded-xl hover:text-black hover:font-black">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-300">
                    <p>© {new Date().getFullYear()} IMSEC College. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


