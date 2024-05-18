import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import home from "assets/images/home.svg";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
      <li className='breadcrumb-item'><Link to="/">
      <img src={home} alt="My Image" />
        </Link></li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const displayName = name.charAt(0).toUpperCase() + name.slice(1); // Capitalize the text
          return (
            <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`} aria-current={isLast ? 'page' : undefined}>
              {isLast ? (
                displayName
              ) : (
                <Link to={routeTo}>{displayName}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
