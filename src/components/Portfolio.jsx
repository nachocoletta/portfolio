import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import foods from '../assets/portfolio/foods.jpg'
import phoneZone from '../assets/portfolio/phonezone.jpg'
import awericana from '../assets/portfolio/awericana.jpeg'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foods,
      linkWeb: "https://front-pi-foods.vercel.app/",
      linkCode: "https://github.com/nachocoletta/PI-Food"
    },
    {
      id: 2,
      src: phoneZone,
      linkWeb: "https://front-phone-zone.vercel.app/",
      linkCode: "https://github.com/jooseariias/Mobil-Store"
    },
    {
      id: 3,
      src: awericana,
      linkWeb: "https://frontawericana-production.up.railway.app/",
      linkCode: "https://github.com/No-Country/c11-29-ft-node-react-Awericana"
    }
  ];

  return (
    <div
      name="portfolio"
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, linkWeb, linkCode}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={linkWeb} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a href={linkCode} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;