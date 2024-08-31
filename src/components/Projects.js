import React, { useState } from 'react'
import Ecomerce from '../assests/ecom.png'
import hcmusThesis from '../assests/hcmus-thesis.png'
import { CgClose } from 'react-icons/cg'
import { SiGoogle } from 'react-icons/si'
import { Transition } from '@headlessui/react'
import Slide from 'react-reveal/Slide';

const Projects = () => {
    const [showEcoomerce, setShowEcommerce] = useState(false);
    const [showHcmusThesis, setShowHcmusThesis] = useState(false);

    return (
        <div name='projects' className='h-[100%] flex flex-col items-center'>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Projects</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[110px] sm:w-[140px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 gap-y-5 md:grid-cols-2'>
                    <Slide left>
                        <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowEcommerce(true)}>
                            <div className='project_img'>
                                <img className='rounded-[10px] ' src={Ecomerce} alt='Ecommerce' />
                            </div>
                            <p className='text-[25px] font-[700] mt-[20px]'>Ecommerce Hub </p>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className='box_shadow rounded-[10px] mx-6 mb-[30px] p-[30px] cursor-pointer' onClick={() => setShowHcmusThesis(true)}>
                            <div className='project_img'>
                                <img className='rounded-[10px] ' src={hcmusThesis} alt='Ecommerce' />
                            </div>
                            <p className='text-[25px] font-[700] mt-[20px]'>Block-based C programming environment web/app</p>
                        </div>
                    </Slide>
                </div>
            </div>
            <Transition
                show={showEcoomerce}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowEcommerce(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={Ecomerce} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Ecommerce Hub</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• This is an Ecommerce project where we have implemented full-fledged Ecommerce functionalities. We developed this project using NodeJs. Below, I describe some of the functionalities of this project.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[20px]'>• The project includes user authentication such as login and signup. It also has two views, one for the users and another for the admin. The admin can add products and view statistics, while the users can buy products by placing orders at their given address. Additionally, the project includes chatBox integration with Tawkto.</p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> EJS, Bootrap, Ajax, Jquery, Node.js, Express.js, Socket.io, MongoDb, Cloudinary</p>

                                        <div className='grid grid-cols-1 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://shoptech.onrender.com/' alt="" target='_blank' rel="noreferrer"><SiGoogle className='mr-[10px]' color='black' />Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
            <Transition
                show={showHcmusThesis}
                enter="transition-opacity duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="relative z-10 h-[100%] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-[#eff9ff] bg-opacity-160 transition-opacity h-[100%]"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto h-[100%] mt-[30px]">
                        <div className="flex justify-center p-0 text-center items-center sm:p-0 h-[100%] " >
                            <div className="bg-white p-[20px] md:p-[40px] m-0 h-[80%] pt-[30px] w-[80%] relative transform overflow-y-auto rounded-lg bg-white-700 text-left shadow-xl transition-all box_shadow">
                                <CgClose className='close_model ml-[auto] mr-[0]  cursor-pointer' onClick={() => setShowHcmusThesis(false)} />
                                <div className=' mt-[10px] grid grid-cols-1 md:grid-cols-2'>
                                    <img className='rounded-[10px] h-[100%] w-[100%] lg:h-[450px] lg:w-[550px] ' src={hcmusThesis} alt='Ecommerce' />
                                    <div className='md:ml-8 '>
                                        <h1 className='text-[25px] lg:text-[35px] font-[600] mb-[10px] mt-[20px] md:mt-[0px]'>Block-based C programming environment web/app</h1>
                                        <p className='text-[16px] lg:text-[18px] font-[400] mb-[10px]'>• This project is my graduation thesis at the university. Web app C is a static web consisting of only js,
                                            html, css files with a very small size. It runs entirely on the browser environment without needing a
                                            backend server. The syntax elements of the C language are represented by blocks to help learners better understand the
                                            syntax components and their roles in a programming statement.
                                        </p>
                                        <p className='text-[16px] lg:text-[18px] font-[400]'><span className='text-[16px] lg:text-[18px] font-[600]'>Tech :</span> Google Blockly, Javascript, HTML, CSS, C</p>
                                        <div className='grid grid-cols-1 mt-[30px]'>
                                            <a className='box_shadow lg:w-[200px] text-[#fd7014] flex items-center cursor-pointer' href='https://tobinguyen21.github.io/Graduation-thesis/' alt="" target='_blank' rel="noreferrer"><SiGoogle className='mr-[10px]' color='black' />Website</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    )
}

export default Projects
