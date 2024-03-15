import { NavLink, useParams } from 'react-router-dom';
import { ProjectType } from '../data/project';
import { ProjectData } from '../data/project';
import { IoPerson } from 'react-icons/io5';
import { RiTeamFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { setCursorVariant } from '../state/cursor/cursorSlice';

const ProjectDetails = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useDispatch();

  const project: ProjectType = ProjectData.find(
    (project) => project.param === name,
  )!;

  return (
    <main className="font-Playfair min-h-dvh w-full bg-[#1a191d] p-8 text-white md:p-12 lg:p-16">
      <div className="flex flex-col gap-5 md:gap-6">
        <h1 className=" text-start text-5xl font-semibold leading-tight tracking-normal md:text-6xl lg:text-7xl xl:text-8xl">
          {project.details.name}
        </h1>

        <div className="flex flex-col gap-2 text-[16px] md:text-lg lg:text-xl xl:text-2xl">
          <div className="font-Montserrat flex flex-row items-center justify-start gap-2">
            <RiTeamFill size={20} />
            <h2>{project.details.team}</h2>
          </div>
          <div className="font-Montserrat flex flex-row items-center justify-start gap-2">
            <IoPerson size={20} />
            <h2>{project.details.role}</h2>
          </div>
        </div>

        <div className="space-x-4 text-sm md:text-[16px] lg:text-lg xl:text-2xl">
          <NavLink
            className="font-Montserrat text-gray-300 hover:text-white"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            to={`/`}
          >
            // Go Back
          </NavLink>
          <a
            className="font-Montserrat text-sm text-gray-300 hover:text-white md:text-[16px] lg:text-lg xl:text-2xl"
            onMouseEnter={() => dispatch(setCursorVariant('hover'))}
            onMouseLeave={() => dispatch(setCursorVariant('default'))}
            href={project.link}
          >
            // Show Project
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-14 ">
          <div className="flex flex-col gap-4 ">
            <h3 className="font-Montserrat text-3xl font-semibold">
              About This Project
            </h3>
            <p className="font-Montserrat text-lg font-light leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">
              {project.details.about}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-Montserrat text-3xl font-semibold">My Job</h3>
            <p className="font-Montserrat text-lg font-light leading-relaxed md:text-xl lg:text-2xl xl:text-3xl">
              {project.details.job}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
