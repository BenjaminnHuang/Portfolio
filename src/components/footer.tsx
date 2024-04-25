import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="flex w-full flex-row items-center justify-center gap-8 bg-[#29282e] py-5">
      <a
        href="https://github.com/BenjaminnHuang"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub size={32} className="hover:text-blue-400" />
      </a>
      <a
        href="https://www.linkedin.com/in/hung-i-huang"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Linkedin"
      >
        <FaLinkedin size={32} className="hover:text-blue-400" />
      </a>
      <a
        href="mailto:hungihuang.company@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Gmail"
      >
        <IoIosMail size={38} className="hover:text-blue-400" />
      </a>
    </footer>
  );
};

export default Footer;
