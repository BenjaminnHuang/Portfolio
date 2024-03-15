import Landing from './landing_page';
import Expertise from './expertise_page';
import Project from './project_page';
import Experience from './experience.page';

const Main = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <section
        id="landing"
        className="flex min-h-dvh w-full items-center justify-center py-10"
      >
        <Landing />
      </section>
      <section
        id="expertise"
        className="flex min-h-dvh w-full items-center justify-center py-10"
      >
        <Expertise />
      </section>
      <section
        id="project"
        className="flex min-h-dvh w-full items-center justify-center py-10"
      >
        <Project />
      </section>
      <section id="experience" className="h-auto w-full">
        <Experience />
      </section>
    </main>
  );
};

export default Main;
