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
      <Link to="/works">works</Link>

      {/* <Link href="/photography">
        <a>photography</a>
      </Link>
      <Link href="/writings">
        <a>writings</a>
      </Link> */}

      <a href="https://github.com/tanishabisht" target="_blank">github</a>

      {/* <span onClick={toggleTheme} className="nav__themeToggle">
        {theme === "light" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </span> */}
    </nav>
  );
};

export default Navbar;
