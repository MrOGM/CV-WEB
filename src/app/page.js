
import Image from 'next/image';
import email from '../../public/email.svg';
import github from '../../public/github.svg';
import sms from '../../public/sms.svg';
import phone from '../../public/phone.svg';
import welding from '../../public/welding.png';
import CANTILEVER from '../../public/CANTILEVER.png';
import indeed from "../../public/indeed.svg";
import NavigationButtons from './menu.jsx';
import robot2 from "../../public/robot2.png";

import auto from "../../public/auto.jpg"
import robot from "../../public/robot.jpg";
export default function Home() {

  return (

    <div>
      <header className="bg-white dark:bg-gray-900">
        <nav className="border-t-4 border-blue-500">
          <div className="container flex items-center justify-between px-6 py-3 mx-auto">
          </div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-3xl font-semibold text-gray-800 lg:text-6xl"> Engineer <span className="text-blue-500">Oscar Garcia</span></h1>

                        <p className="mt-3 text-gray-600 dark:text-gray-400"><span className="font-medium text-blue-500">Hi,</span> welcome to my resume</p>

                        <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
    
                            <button className="w-full px-4 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-gray-500 rounded-lg lg:w-auto lg:mx-4 hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                            <a href="https://drive.google.com/file/d/16B6SoBbWN2XHeYst60xS151HUJjtWKKa/view?usp=sharing">Download CV</a>
                            </button>

                            <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <a href="#Contact">Contact</a> 
                            </button>

                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 mb-6 pb-4">
                    <Image className="w-full h-full max-w-md" src={auto}alt="email illustration vector art"/>
                </div>
            </div>
        </div>
      </header>
      

      
      <section className="bg-gray dark:bg-gray-900">
        <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
            <h2 className="max-w-2xl mx-auto text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white ">
               Profesional  <span className="text-blue-500">Statement</span>
            </h2>

            <p className="max-w-5xl mt-6 text-center text-gray-500 dark:text-gray-300">
            Mechatronic Engineer with experience in the industrial field, capable of working as a part of a team to achieve common goals. Developing skills for the industrial sector such as programming in multiple languages, CAD software, Offices package and the necessary soft skills to excel on the jobsite.
            </p>


        </div>
      </section>


      <NavigationButtons />

      <section id="Contact" className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <div>
                    <p className="font-medium text-blue-500 dark:text-blue-400">Contact me</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl ">Get in touch</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400"></p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3 align-center">
                    <div>
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 ">Email</h2>
                        <p className="mt-2 text-gray-500">Will answer back I promise</p>
                        <p className="mt-2 text-blue-500 "><a href="mailto:ogarcia_molina@hotmail.com" >ogarcia_molina@hotmail.com</a></p>
                    </div>

                    <div>
                     
                        
                              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                                  <Image src={indeed} className="w-6 h-6" stroke-width="1.5"
                                      stroke="currentcolor" />
                              </span>
                              
                  
             

                        <h2 className="mt-4 text-lg font-medium text-gray-800 ">Indeed</h2>
                        <p className="mt-2 text-gray-500 ">Ready for the Interview</p>
                        <p className="mt-2 text-blue-500 "><a href="https://profile.indeed.com/p/oscarg-k5kbjkz">See my profile </a></p>
                    </div>

                    <div>
                        <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </span>

                        <h2 className="mt-4 text-lg font-medium text-gray-800 ">Phone</h2>
                        <p className="mt-2 text-gray-500 ">Either message or call is perfect</p>
                        <p  className="mt-2 text-blue-500 "><a href="tel:+526863479838" >+52 (686) 347-9838</a></p>
                    </div>
                </div>
            </div>
        </section>




      </div>

  );
}
