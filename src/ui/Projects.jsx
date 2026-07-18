import { FaLocationDot } from "react-icons/fa6";

import project1 from "../assets/images/Mask Group.png";
import project2 from "../assets/images/Mask group 2.png";
import project3 from "../assets/images/Mask Group 3.png";

const projects = [
  {
    id: 1,
    image: project1,
    title: "Villa on Washington Avenue",
    location: "Washington, USA",
  },
  {
    id: 2,
    image: project2,
    title: "Luxury villa in Rego Park",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 3,
    image: project3,
    title: "Gorgeous house",
    location: "London, UK",
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-lg font-bold text-gray-900">
            Projects
          </h2>

          <p className="mt-4 text-[#251d58]  font-bold text-2xl max-w-xl mx-auto">
            Discover the latest Interior Design  available today.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white  overflow-hidden   "
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">

                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-gray-500">

                  <FaLocationDot className="text-black"/>

                  <span>{project.location}</span>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;