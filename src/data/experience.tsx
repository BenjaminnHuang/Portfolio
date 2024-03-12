export type ExperienceType = {
  index: number;
  title: string;
  location: string;
  company: string;
  description: string;
  date: string;
  skills: string[];
};

export const ExperienceData: ExperienceType[] = [
  {
    index: 1,
    title: 'Software Engineer Intern',
    location: 'Remote',
    company: 'Ra Labs',
    description:
      'Optimized React/JavaScript UI/UX, improving load times by 20%, aligning products with user feedback.',
    date: 'Sep 2023 - Current',
    skills: ['React', 'JavaScript', 'NodeJS', 'Redux', 'Restful API'],
  },
  {
    index: 2,
    title: 'Software Engineer',
    location: 'San Diego, CA',
    company: 'We@vers',
    description:
      'Led design and development of custom websites for small businesses, managed developer team, boosting project delivery by 35%.',
    date: 'Apr 2023 - Current',
    skills: ['Project Management', 'React', 'Tailwind CSS', 'CI/CD', 'Agile'],
  },
  {
    index: 3,
    title: 'IT Intern',
    location: 'San Diego, CA',
    company: 'Lavner Education',
    description:
      'Led programming workshops, enhancing students’ coding skills, and developed interactive programming challenges.',
    date: 'Jul 2022 - Aug 2022',
    skills: ['Education', 'C++', 'Python', 'Java', 'Leadership'],
  },
  {
    index: 4,
    title: 'Software Engineer Intern',
    location: 'Tainan, Taiwan',
    company: 'First Value Tech',
    description:
      'Developed UI for robotic interfaces, improving interaction efficiency by 25%, and participated in feature ideation.',
    date: 'Jul 2020 - Sep 2020',
    skills: ['C#', 'Agile', 'UI/UX'],
  },
];
