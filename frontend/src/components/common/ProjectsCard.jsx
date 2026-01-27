import React from "react";

const ProjectsCard = ({ props }) => {
  return (
    <div className="bg-gray-600  rounded-md p-2 pr-6 text-gray-300 flex-col  shadow-[#212529b6] shadow-xs flex justify-between items-start">
      <h3 className="text-xl font-medium  pb-4 ">{props.title}</h3>
      <p className="text-sm text-white ">{props.desc}</p>
      <div className="flex gap-2 mt-8 justify-end w-full">
        <button className="bg-amber-400 text-md text-white font-semibold py-2 px-8 rounded-md active:bg-amber-300">
          Edit
        </button>
        <button className="bg-red-500 text-md font-semibold text-white py-2 px-8 rounded-md active:bg-red-400">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProjectsCard;
