import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black h-[100vh] flex items-center">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="text-white">About Us</h4>
                        <p className="text-gray-300">IMSEC College is dedicated to providing quality education and fostering personal development among its students.</p>
                    </div>
                    <div>
                        <h4 className="text-white">Contact Us</h4>
                        <p className="text-gray-300">Address: [Your Address]</p>
                        <p className="text-gray-300">Email: info@imsec.edu</p>
                        <p className="text-gray-300">Phone: +1234567890</p>
                    </div>
                    <div>
                        <h4 className="text-white">Quick Links</h4>
                        <ul>
                            <li><a href="/" className="text-gray-300">Home</a></li>
                            <li><a href="http://imsec.ac.in/academics/courses" className="text-gray-300">Courses</a></li>
                            <li><a href="http://imsec.ac.in/admissions/admission-procedure" className="text-gray-300">Admissions</a></li>
                            <li><a href="http://imsec.ac.in/about/contact-us" className="text-gray-300">Contact</a></li>
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
