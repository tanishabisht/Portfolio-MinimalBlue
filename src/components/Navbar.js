import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useTheme } from '../utilities';
import FavIcon from '../public/favicon.ico'

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("light");
  }, []);

  const changeThemeHandler = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={FavIcon} width={50} height={50} />
        </Link>
        <span>TANISHA</span>
      </div>
      <Link to="/projects">Projects</Link>
      {/* <Link to="/photography">Photography</Link> */}
      {/* <Link to="/writings">Writings</Link> */}
      <a href="https://github.com/tanishabisht" target="_blank">GitHub</a>
    </nav>
  );
};

export default Navbar;
