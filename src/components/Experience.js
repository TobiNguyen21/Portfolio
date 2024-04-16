import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='h-[100%] flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className=' text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Experience</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[130px] sm:w-[170px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 px-6'>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Job Experience :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[50px] p-[30px]'>
                        <h1 className='text-[20px]  sm:text-[25px] font-bold mb-[10px]'>Back-end Developer</h1>
                        <div className='flex justify-between mb-[30px]'>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>Wata Corp - Ho Chi Minh city</p>
                            <p className='text-[15px] sm:text-[18px] font-[500]'>Jul, 2023 - Present</p>
                        </div>
                        <p className='text-[14px] sm:text-[17px]'>
                            Currently, I am a Back-end Developer at Wata, working on a live project using Node.js. This project is a complex application carefully designed to offer a complete solution for 
                            Enterprise Resource Planning (ERP). It seeks to create a thorough, integrated, and flexible system to help 
                            businesses effectively oversee their operations. System using NextJs, NestJs, Graphql, Postgresql, Docker, AWS ,...</p>
                    </div>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Education Qualification :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>Major- Computer Science and Embedded Systems</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>Ho Chi Minh University of Science</p>
                            <p className='text-[15px] sm:text-[18px]'>2020 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
