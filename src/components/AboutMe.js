import React from 'react'

const AboutMe = () => {
    return (
        <div name='about' className='h-[100%] px-6 flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 divide-y mt-[80px] md:mt-[120px]'>About Me</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' />
                <div className='m-0 box_shadow'>
                    <p className='text-xl mb-5 mt-[20px] '>A motivated full-stack developer with 1+ years of experience, adept at quickly learning new languages and technologies. I am
responsible, thrive in team environments, and am committed to contributing to organizational goals. My strengths include
strong analytical and problem-solving skills, the ability to work independently under pressure. I am seeking a role that allows
me to grow professionally while aligning with the organization’s objectives.</p>
                    {/* <p className='text-xl mb-5'>Currently, I'm enhancing my expertise in backend programming with Node.js and exploring frontend development. My goal is to progress into a full-stack developer, combining both backend and frontend expertise.</p> */}
                    {/* <p className='text-xl mb-5'>I proudly align myself with various prominent global Open Source communities, such as EddieHub, DEVs Dungeon, and The Lively Developers Community.</p> */}
                </div>
            </div>
        </div>
    )
}

export default AboutMe
