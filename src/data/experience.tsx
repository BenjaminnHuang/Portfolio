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
    title: 'Software Engineer',
    location: 'Remote',
    company: 'Ra Labs',
    description:
      'Worked on optimizing the UI/UX of React/JavaScript applications. Also had the opportunity to align products with user feedback.',
    date: 'Sep 2023 - Current',
    skills: ['React', 'JavaScript', 'NodeJS', 'Redux', 'Restful API'],
  },
  {
    index: 2,
    title: 'Tech Lead',
    location: 'San Diego, CA',
    company: 'We@vers',
    description:
      'Led the design and development of custom websites. Managed a team of developers, working with technologies like React and Tailwind CSS.',
    date: 'Apr 2023 - Current',
    skills: ['Project Management', 'React', 'Tailwind CSS', 'CI/CD', 'Agile'],
  },
  {
    index: 3,
    title: 'IT Intern',
    location: 'San Diego, CA',
    company: 'Lavner Education',
    description:
      'Led programming workshops and developed interactive programming challenges, enhancing students’ coding skills.',
    date: 'Jul 2022 - Aug 2022',
    skills: ['Education', 'C++', 'Python', 'Java', 'Leadership'],
  },
  {
    index: 4,
    title: 'Software Engineer Intern',
    location: 'Tainan, Taiwan',
    company: 'First Value Tech',
    description:
      'Developed UI for robotic interfaces and participated in feature ideation, improving interaction efficiency.',
    date: 'Jul 2020 - Sep 2020',
    skills: ['C#', 'Agile', 'UI/UX'],
  },
];
