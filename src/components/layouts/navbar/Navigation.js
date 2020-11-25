import { Link } from "react-router-dom";


const navigationConnected = [
  { path: '/', link: 'home' },
  { path: '/about', link: 'about' },
  { path: '/myaccount', link: 'Account' },
];
const navigationNotConnected = [
  { path: '/about', link: 'about' },
  { path: '/', link: 'home' },
  { path: '/login', link: 'login' },
  { path: '/register', link: 'register' },
];

const Navigation = ({ isConnected, user  }) => {

  return (
    <ul class="navbar-nav ml-auto">
  
    {!isConnected  ? 
      navigationNotConnected.map((element) => (
      <li class="nav-item active" key={element.link}>
        <Link class="nav-link" to={element.path}>
          {' '}
          {element.link}
        </Link>
      </li>)) : navigationConnected.map((element) => (
      <li class="nav-item active" key={element.link}>
        <Link class="nav-link" to={element.path}>
          {' '}
          {element.link}
        </Link>
      </li>)) }

      {user && (<li className="nav-item active"> 
        <a className="nav-link text-danger"> Hello ! {user.name}</a>
      </li>)}
    </ul>
  );
};


export default Navigation;
