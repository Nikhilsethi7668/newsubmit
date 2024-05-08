import React from 'react'

function Nav() {
    return (
        <div className='navbar h-[8vh] bg-black text-white flex  items-center sticky justify-between'>
            <div className="left flex  w-[100%] gap-4">
                <img className='h-[8vh] border rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aXKcidZMuikmuvOr57Vi4iUDZdiHHeVL8ITtqIcSVg&s" alt="" />
                <h1 className='text-[6vh]'>IMSEC </h1>
            </div>
            <div className="second mid flex gap-6 underline">
                <div className="mid flex gap-6 underline nowrap ">
                    <h1 className='hover:text-black hover:bg-white hover:rounded-lg hover:cursor-pointer'> <a href="http://imsec.ac.in/about/about-imsec">About IMSEC</a>   </h1>
                    <h1 className='hover:text-black hover:bg-white hover:rounded-lg hover:cursor-pointer'><a href="http://imsec.ac.in/placements/placement-department/2021-2022">Placements</a> </h1>
                    <h1 className='hover:text-black hover:bg-white hover:rounded-lg hover:cursor-pointer'><a href="http://imsec.ac.in/admissions/admission-procedure">Admission</a> </h1>


                </div>
                <div className="right">
                    <button className='mt-1 border rounded-lg h-[6vh] w-[7vw] hover:text-black hover:bg-white'> <a href="http://imsec.ac.in/about/contact-us">Contact Us</a> </button>

                </div>
            </div>


        </div>
    )
}

export default Nav
