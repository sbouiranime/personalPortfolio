import logo from "../assets/Rslogo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaKaggle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-10 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/ranime-sboui-a05b97268/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/sbouiranime" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.kaggle.com/ranimesboui" target="_blank" rel="noopener noreferrer">
          <FaKaggle />
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
