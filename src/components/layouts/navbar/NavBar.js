import { useContext } from 'react';
import Navigation from "./Navigation";
import AuthContext from './../../../context/auth/AuthContext';
import "./../../../NavBar.css";

const NavBar = () => {
  // create auth context variable
  const authContext = useContext(AuthContext);

  const { isAuthenticated, user } = authContext;

  return (
    <nav class="navbar navbar-expand-lg navbar-dark indigo">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <Navigation isConnected={isAuthenticated} user={user}></Navigation>
      </div>
    </nav>
  );
};

export default NavBar;
