import { Navbar, Footer } from "./";
import { useLocation } from 'react-router-dom'

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <div>
        {!location.pathname.includes("/writings/") ? (
          <div className="circleBg"></div>
        ) : null}
        <Navbar />
        <div className="layoutContainer">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
