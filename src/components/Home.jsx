// import React from 'react'
// import HeroImage from '../assets/heroImage.png'
// import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
// const Home = () => {
//   return (
//     <div name="home" 
//         className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
//         <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
//         md:flex-row'>
//             <div className='flex flex-col justify-center h-full'>
//                 <h2 className='text-4xl sm:text-7xl font-bold text-white'>
//                     I'm a Full Stack Developer
//                 </h2>
//                 <p className='text-gray-500 py-4 max-w-md'>
//                     I have 1 year of experience building and designing software.
//                     Currently, I love to work on web application using technologies like React and NodeJs
//                 </p>
//                 <div>
//                     <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md 
//                     bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
//                         onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}>
//                         Portfolio
//                         <span className='group-hover:rotate-90 duration-300'>
//                             <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
//                         </span>
                        
//                     </button>
//                 </div>
//             </div>
//             <div>
//                 <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
//             </div>
//         </div>
       
     
//     </div>
//   )
// }

// export default Home

import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" home-cont  h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className=" H2-HOME text-2xl sm:text-6xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Hello! My name is Ignacio Coletta and I'm a Full Stack developer with one year of experience. 
          <p >I like to use technologies like React, Node.js, Express, and MySQL to create web applications.</p> 
          <p >I am constantly learning and improving my skills to stay up-to-date with the latest technology trends. I love software development and I am always looking for ways to improve and optimize my work.</p>
          <p >If you're looking for a committed and passionate Full Stack developer, please don't hesitate to contact me. I would love to work with you on your next project and bring my skills and knowledge to help you achieve your goals.</p>

          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-36"  > 
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React from "react";
// import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full px-4">
//         <div className="flex flex-col justify-center text-center lg:text-left h-full lg:w-1/2 lg:pr-10">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-gray-500 py-4 max-w-md mx-auto lg:mx-0">
//             Hello! My name is Ignacio Coletta and I'm a Full Stack developer with one year of experience. 
//           </p>
//           <p className="text-gray-500 py-4 max-w-md mx-auto lg:mx-0">
//             I like to use technologies like React, Node.js, Express, and MySQL to create web applications.
//           </p> 
//           <p className="text-gray-500 py-4 max-w-md mx-auto lg:mx-0">
//             I am constantly learning and improving my skills to stay up-to-date with the latest technology trends. I love software development and I am always looking for ways to improve and optimize my work.
//           </p>
//           <p className="text-gray-500 py-4 max-w-md mx-auto lg:mx-0">
//             If you're looking for a committed and passionate Full Stack developer, please don't hesitate to contact me. I would love to work with you on your next project and bring my skills and knowledge to help you achieve your goals.
//           </p>

//           <div>
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>

//         <div className="flex justify-center lg:justify-end">
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-2xl mx-auto w-2/3 lg:w-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;