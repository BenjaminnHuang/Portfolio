import FVT from '/fvt.png';
import UTA from '/uta.png';

export type ProjectType = {
  title: string;
  type: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
};

export const ProjectData: ProjectType[] = [
  {
    title: 'First Value Tech',
    type: 'Web Development',
    image: FVT,
    description:
      'A user-friendly website for the Taiwan-based technology company.',
    skills: ['React', 'Sanity', 'Tailwind'],
    link: 'http://www.fvtech.com.tw',
  },
  {
    title: 'United Taiwanese Association',
    type: 'Web Development',
    image: UTA,
    description: 'A website for the United Taiwanese Association at UCSD.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    link: 'http://www.fvtech.com.tw',
  },
];
