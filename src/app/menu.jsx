'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import welding from '../../public/welding.png';
import CANTILEVER from '../../public/CANTILEVER.png';
import LFSearchBar from '../../public/LuckyFetchSearchBar.png';
import LFBooks from '../../public/LF_Books.png';
import Carousel from './carusel.jsx';
import Cetys2 from '../../public/Cetys2.jpg';

import Cetys from '../../public/Cetys.jpg';

function NavigationButtons ({}) {
  const [activeButton, setActiveButton] = useState('Experience');

  const handleButtonClick = (buttonName) => {
    // Perform actions based on the clicked button
    if (buttonName !== activeButton) {
      // Update the active button only if it's different from the current active button
      console.log(buttonName)
      setActiveButton(buttonName);}
  };

  return (
   
    <section className="bg-black dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Profile
          </h1>

        {/* buttons menu */}
          <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
              <button onClick={() => handleButtonClick('Experience')}
                    className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                      activeButton === 'Experience'
                        ? 'text-blue-600 border-b-2 border-blue-500'
                        : 'text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400'
                    } sm:text-base whitespace-nowrap focus:outline-none`}
                  >
                  Experience
              </button>

              <button  onClick={() => handleButtonClick('Projects')}
                  className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                    activeButton === 'Projects'
                    ? 'text-blue-600 border-b-2 border-blue-500'
                    : 'text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400'
                } sm:text-base whitespace-nowrap focus:outline-none`}>
                  Projects
              </button>

              <button onClick={() => handleButtonClick('Skills')}
                  className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                    activeButton === 'Skills'
                    ? 'text-blue-600 border-b-2 border-blue-500'
                    : 'text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400'
                } sm:text-base whitespace-nowrap focus:outline-none`}>
                  Skills
              </button>

              <button onClick={() => handleButtonClick('Education')}
                 className={`h-12 px-8 py-2 -mb-px text-sm text-center ${
                  activeButton === 'Education'
                  ? 'text-blue-600 border-b-2 border-blue-500'
                  : 'text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400'
              } sm:text-base whitespace-nowrap focus:outline-none`}>
                  Education
              </button>
          </div>
          
          {/* Experience */}
          {activeButton === 'Experience' &&  <section className="mt-8 space-y-8 lg:mt-12">
              <section className="lg:flex lg:items-center">
                    <div className="lg:w-1/2 ">
                          <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">2023-2024</p>
                          <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">PRODUCT ENGINEER</h2>
                          <p className="max-w-5xl mt-6 text-left text-gray-500 dark:text-gray-300 ">
                            As a Product Engineer at Merchants Metals, my tasks were related to processing the customer's requirements from different locations in the US. 
                            </p>
                            <p className="max-w-5xl mt-6 text-left text-gray-500 dark:text-gray-300 px-5">

                            1.  Generating <span className="font-medium text-blue-500">CAD</span> drawings for the products required and getting customer approvals. 
                            <br></br>
                            2.  Reviewing with the production and materials departments the lead time for each specific order and provide a delivery date to the customer. 
                            <br></br>
                            3.  Upload the orders in the<span className="font-medium text-blue-500"> ERP system</span> and follow up on daily basis with the team. </p>
                    </div>

                    <div className="mt-4 lg:w-1/2 lg:mt-0">
                        <Image className="object-cover w-full h-64 rounded-lg md:h-96"
                                  src= {CANTILEVER}
                                  alt="Oscar Garcia Welding"

                              />
                    </div>
              </section>
                      <section className="lg:flex lg:items-center">
                          <div className="lg:w-1/2 ">
                              <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">2022-2023 (Internship)</p>
                              <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">MAINTENANCE DEPARTMENT </h2>

                              <p className="max-w-5xl mt-6 text-left text-gray-500 dark:text-gray-300 px-5">
                              In this area I work as a Maintenance Technician for Merchants Metals, helping fix multiple types of machines and systems around the plant.  Also got the opportunity to rebuild a mechanical machine with a team  and turning it into a digital one adding servos, sensors and helping out with the ladder program for the <span className="font-medium text-blue-500">PLC.</span> </p>
                          
                          
                          </div>

                          <div className="mt-4 lg:w-1/2 lg:mt-0">
                              <Image className="object-cover w-full h-64 rounded-lg md:h-96"
                                  src= {welding}
                                  alt="Oscar Garcia Welding"

                              />
                          </div>
                      </section>
          
          </section>}
            
       

            {/* Projects */}
            {activeButton === 'Projects' &&  <section className="mt-8 space-y-8 lg:mt-12">
              <section className="lg:flex lg:items-center">
                    <div className="lg:w-2/2 pr-10">
                          <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">2023-2024</p>
                          <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">YOUTUBE API WEBSITE</h2>
                          <p className="max-w-5xl mt-6 text-left text-gray-500 dark:text-gray-300 ">
                            This project consist on a website build upon Next.js framework, a database on MongoDB and a Flask server. The users who access this site sign-in using there google account and lets them visualize in a clearer format statistics of youtube videos and channel and compare them in personalize tables and graphs. 
                          </p>
                          <p className="max-w-5xl mt-6 text-left text-gray-500 dark:text-gray-300 ">
                            This website can be access by pressing this <a className="font-medium text-blue-500" href='https://luckyfetch.vercel.app/'>link</a>, there is a possibility of not working correctly because of the free hosting site that has the server running.  
                          </p>
                            
                    </div>

            
              </section>
                  
                  <Carousel  />


                      {/* <section className="lg:flex lg:items-center">
                      <div className="mt-4 lg:w-1/2 lg:mt-0">
                              <Image className="object-cover w-full h-64 rounded-lg md:h-96"
                                  src= {LFBooks}
                                  alt="Oscar Garcia Welding"

                              />
                          </div>
                          <div className="mt-4 lg:w-1/2 lg:mt-0">
                              <Image className="object-cover w-full h-64 rounded-lg md:h-96"
                                  src= {welding}
                                  alt="Oscar Garcia Welding"

                              />
                          </div>
                      </section> */}
          
          </section>}


            {/* Skills */}
            {activeButton === 'Skills' &&  <section className="mt-8 space-y-8 lg:mt-12">
              <section className="lg:flex lg:items-center ">
                    <div className="lg:w-1/2 mx-auto  ">
                         
                          <h2 className="mt-2 mb-3 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Computer-aided design</h2>

                          <div className='mx-auto flex flex-wrap'>
                            <span 
                              className=" m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
                              SolidWorks
                            </span>

                            <span 
                              className=" m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                CATIA
                            </span>   
                            <span 
                              className=" m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rose-600 rounded-lg hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-80">
                                AutoCAD
                            </span>  
                            <span 
                              className=" m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-500 focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">
                                MULTISIM
                            </span>   
                            </div>
                          
                     </div>
                    
              </section>

              <section className="lg:flex lg:items-center justify-items-center">

                <div className="lg:w-1/2 mx-auto ">

                          <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Programming languages</h2>
                          <div className='mx-auto flex flex-wrap'>
                             <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-400 rounded-lg hover:bg-emerald-500 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-80">
                                Ladder programming 
                            </span>  
                              
                              <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                                MATLAB
                            </span>  
                              
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                                Python
                            </span> 

                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-80">
                                 C++ 
                            </span>  
                              
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                                 JavaScript
                            </span> 
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                                 HTML
                            </span> 
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-lg hover:bg-pink-500 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-opacity-80">
                                 CSS
                            </span> 
                        </div>

                            
                </div>
              </section>

              <section className="lg:flex lg:items-center">
                    <div className="lg:w-1/2 mx-auto ">

                          <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Other tools</h2>
                          <div className='mx-auto flex flex-wrap'>
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">
                              Mircrosoft Office package
                            </span>
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-amber-600 rounded-lg hover:bg-amber-500 focus:outline-none focus:ring focus:ring-amber-300 focus:ring-opacity-80">
                                Git
                            </span>  
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                                Postman
                            </span>   
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
                                VisualStudio
                            </span>  
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
                                MongoDB
                            </span>  
                            <span 
                              className="m-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-80">
                                FireBase
                            </span>  
                          </div>
                          
                     </div>
                    
              </section>

                  
          
          </section>}

            {/* Education */}
            {activeButton === 'Education' &&  <section className="mt-8 space-y-8 lg:mt-12">
              <section className="lg:flex lg:items-center">
                    <div className="lg:w-1/2 ">
                          <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">2019-2023</p>
                          <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">CETYS University </h2>
                          <p className="max-w-5xl mt-6 text-left text-gray-500 dark:text-gray-300 ">
                          Mechatronic Engineering
                            </p>
                           
                    </div>

                    <div className="mt-4 lg:w-4/5 lg:mt-0">
                        <Image className="object-cover w-full h-64 rounded-lg md:h-96"
                                  src= {Cetys2}
                                  alt="Oscar Garcia Welding"

                              />
                    </div>
              </section>

          
          </section>}

       </div>
    </section>



  );
};

export default NavigationButtons;
