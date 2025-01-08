import FVT from '/fvt.png';
import UTA from '/uta.png';

export type ProjectType = {
  title: string;
  type: string;
  description: string;
  image: string;
  skills: string[];
  link: string;
  param: string;
  details: ProjectDetailsType;
};

export type ProjectDetailsType = {
  name: string;
  about: string;
  image: string;
  team: string;
  role: string;
  job: string;
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
    param: 'fvt',
    details: {
      name: 'First Value Tech Website',
      about:
        "This website for First Value Tech introduces an enhanced digital platform to showcase the company's technological solutions. Built with React, Sanity, and Tailwind CSS, it features a modern, responsive design tailored to provide an optimal user experience and effectively communicate the company's offerings.",
      job: 'Tasked with a leadership role in the web development endeavor for a Taiwanese tech firm, responsibilities encompassed coding critical website features, orchestrating meetings and sprints, conducting code reviews, and guiding new programmers. Essential to the role was fostering a collaborative environment with the design team, propelled by agile methodologies to realize the company’s digital enhancement goals.',
      image: FVT,
      team: 'We@avers',
      role: 'Frontend Developer / Project Lead',
    },
  },

  {
    title: 'United Taiwanese Association',
    type: 'Web Development',
    image: UTA,
    description: 'A website for the United Taiwanese Association at UCSD.',
    skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    link: 'https://ucsd-uta.netlify.app/',
    param: 'uta',
    details: {
      name: 'United Taiwanese Association Website',
      about:
        "This website serves as a digital hub for the United Taiwanese Association at UCSD, showcasing upcoming events, important information, and resources for current and prospective members. Featuring a user-friendly dashboard, the platform enables non-technical administrators to effortlessly update content, ensuring the association's online presence is vibrant and up-to-date.",
      job: 'Responsibilities encompassed both front-end and back-end development, crafting a seamless web experience and a straightforward content management system. Key contributions included selecting appropriate backend solutions, coding, code review, and leading project meetings to maintain momentum and align on objectives.',
      image: UTA,
      team: 'We@avers',
      role: 'Software Engineer / Project Lead',
    },
  },
];
