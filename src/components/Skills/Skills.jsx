import React from "react";
import { Tooltip } from "react-tooltip"; // Ensure you've installed react-tooltip

const skills = [
  {
    name: "HTML",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", // Icon for HTML
    details: "Expert in semantic HTML ",
  },
  {
    name: "CSS",
    icon: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", // Icon for CSS
    details: "Proficient in modern CSS, Flexbox, and Grid layout.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000", // Icon for Tailwind CSS
    details: "Specialized in building responsive designs using Tailwind.",
  },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000", // Icon for JavaScript
    details: "Strong understanding of ES6+ and JavaScript fundamentals.",
  },
  {
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000", // Icon for React
    details: "Experienced in building dynamic SPAs with React.js.",
  },
  {
    name: "Firebase",
    icon: "https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000", // Icon for Firebase
    details: "Skilled in Firebase authentication and real-time database.",
  },
  {
    name: "Node.js",
    icon: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000", // Icon for Node.js
    details: "Proficient in building RESTful APIs with Node.js and Express.",
  },
  {
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=cREyrHivHRHF&format=png&color=000000", // Icon for MongoDB
    details: "Experience in designing NoSQL databases with MongoDB.",
  },
  {
    name: "JWT",
    icon: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000", // Icon for JWT
    details: "Knowledgeable in implementing secure authentication with JWT.",
  },
  {
    name: "GitHub",
    icon: "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000", // Icon for GitHub
    details: "Expert in version control and collaborative development on GitHub.",
  },
];

const Skills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="text-center ">
          <a data-tooltip-id={`tooltip-${index}`}>
            <img
              src={skill.icon}
              alt={`${skill.name} icon`}
              className="w-20 h-20 mx-auto hover:border-2 p-1 border rounded-full"
            />
            <p className="mt-2 font-medium">{skill.name}</p>
          </a>
          <Tooltip
            id={`tooltip-${index}`}
            place="top"
            effect="solid"
            className="bg-gray-800 text-white p-4 rounded-md shadow-lg max-w-[90vw] sm:max-w-xs"
          >
            <div>
              <h3 className="font-bold text-lg mb-2">{skill.name}</h3>
              <p className="text-sm">{skill.details}</p>
            </div>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Skills;
