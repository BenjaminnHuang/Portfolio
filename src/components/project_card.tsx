import { useContext, useState } from 'react';
import { ProjectType } from '../data/project';
import { CursorContext } from '../contexts/CursorContext';

const ProjectCard = ({ title, description, image }: ProjectType) => {
  const { setCursorVariant, setCursorBorderVariant } =
    useContext(CursorContext);

  return (
    <div className="group max-w-md overflow-hidden rounded-md font-Product text-xl">
      <div className="h-full w-full overflow-hidden">
        <img
          src={image}
          alt="project image"
          className="transform transition-transform duration-500 ease-in-out hover:cursor-pointer group-hover:scale-110"
          onMouseEnter={() => {
            setCursorVariant && setCursorVariant({ variant: 'hoverImage' });
            setCursorBorderVariant &&
              setCursorBorderVariant({ variant: 'hoverImage' });
          }}
          onMouseLeave={() => {
            setCursorVariant && setCursorVariant({ variant: 'default' });
            setCursorBorderVariant &&
              setCursorBorderVariant({ variant: 'default' });
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-2 bg-[#8888880d] p-8 text-white">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
