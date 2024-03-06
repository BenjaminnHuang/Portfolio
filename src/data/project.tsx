import FVT from '/fvt.png';

export type ProjectType = {
  title: string;
  description: string;
  image?: string;
};

export const ProjectData: ProjectType[] = [
  {
    title: 'Fist Value Tech',
    description: 'Web Development',
    image: FVT,
  },
  {
    title: 'Project 2',
    description: 'Project 2 description',
    image: '/images/project2.png',
  },
  {
    title: 'Project 3',
    description: 'Project 3 description',
    image: '/images/project3.png',
  },
];
