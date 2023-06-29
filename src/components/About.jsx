import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="about w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello and welcome to my Portfolio! My name is Ignacio Coletta, and I'm a Full Stack Developer. With 1 year of experience in web development and functional analysis, I have developed strong skills in JavaScript, ReactJS, NodeJS, Express, Sequelize, PostgreSQL, and MySQL.
        </p>

        <br />

        <p className="text-xl">
        My approach is always collaborative and efficient, and I enjoy working with others to achieve team and company goals. I'm a creative and passionate individual who is always open to new opportunities and challenges.
I am constantly seeking to learn and improve my skills and am willing to take on new projects to continue growing professionally.
Feel free to connect with me if you'd like to discuss professional opportunities or share your thoughts and experiences. I'd love to get to know you and learn more about your work and career.

        </p>
      </div>
    </div>
  );
};

export default About;