import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiJava, SiMysql, SiGithub, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiDocker, SiTypescript, SiNestjs, SiGraphql, SiCplusplus, SiPostgresql } from 'react-icons/si'
import rest from '../assests/rest.png'
import Zoom from 'react-reveal/Zoom';

const Technology = () => {
    return (
        <div name='technology' className='h-[100%] flex flex-col items-center mb-[35px] '>
            <div className='md:w-[90%] lg:w-[80%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-4 mt-[80px] md:mt-[120px]'>Technology</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[140px] sm:w-[180px] mb-[50px]' />
                <div className='flex flex-col'>
                    <div className=' mt-[10px] grid grid-cols-2 gap-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5'>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJavascript color='#FFD600' style={{ background: 'black' }} />
                                <p>JavaScript</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiHtml5 color='#E44D26' style={{ background: 'white' }} />
                                <p>HTML</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiCss3 color='#0170BA' style={{ background: 'white' }} />
                                <p>CSS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJava color='#0170BA' style={{ background: 'white' }} />
                                <p>Java</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiTypescript color='#3178c6' style={{ background: 'white' }} />
                                <p>Typescript</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiCplusplus color='#61dafb' style={{ background: 'white' }} />
                                <p>C/C++</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiGithub color='#24292f' style={{ background: 'white' }} />
                                <p>Git and Github</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiNodedotjs color='#43853d' style={{ background: 'white' }} />
                                <p>Node.js</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiNestjs color='#764abc' style={{ background: 'white' }} />
                                <p>NestJs</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiExpress color='#353535' style={{ background: 'white' }} />
                                <p>ExpressJS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiMongodb color='#FFFFFF' style={{ background: '#00684A' }} />
                                <p>Mongo DB</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiPostgresql color='#3b76c3' style={{ background: 'white' }} />
                                <p>Postgresql</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiMysql color='#F29111' style={{ background: 'white' }} />
                                <p>Mysql</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiPostman color='#E44D26' style={{ background: 'white' }} />
                                <p>Postman</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiDocker color='#3b76c3' style={{ background: 'white' }} />
                                <p>Docker</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiGraphql alt='' style={{ height: '1em', width: '1em' }} />
                                <p>Graphql</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={rest} alt='' style={{ height: '1em', width: '1em' }} />
                                <p>Rest API</p>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
