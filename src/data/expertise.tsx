export type ExpertiseType = {
  index: number;
  title: string;
  skills: string[];
};

export const ExpertiseData: ExpertiseType[] = [
  {
    index: 1,
    title: 'Software Development',
    skills: ['C/C++', 'Python', 'Git', 'Docker', 'Agile Methodologies'],
  },
  {
    index: 2,
    title: 'Frontend Development',
    skills: [
      'HTML',
      'CSS',
      'Tailwind',
      'JavaScript',
      'TypeScript',
      'ReactJS',
      'NextJS',
    ],
  },
  {
    index: 3,
    title: 'Backend Development',
    skills: ['NodeJS', 'ExpressJS', 'SQL', 'NoSQL', 'RESTful API'],
  },
];
