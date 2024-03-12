import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="flex w-full flex-row items-center justify-center gap-8">
      <a href="https://github.com/BenjaminnHuang" target="_blank">
        <FaGithub size={32} className="hover:text-blue-400" />
      </a>
      <a href="https://www.linkedin.com/in/hung-i-huang" target="_blank">
        <FaLinkedin size={32} className="hover:text-blue-400" />
      </a>
      <a href="mailto:hungihuang.company@gmail.com" target="_blank">
        <IoIosMail size={38} className="hover:text-blue-400" />
      </a>
    </div>
  );
};

export default Footer;
