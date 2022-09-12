import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const NavbarItem = ({ url, name, isActive }) => {
  return (
    <Link href={url}>
      <div
        className={`custom-navbar-link ${isActive ? 'active' : ''} nav-link`}
      >
        {name}
      </div>
    </Link>
  );
};

NavbarItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  isActive: PropTypes.bool,
};

export default NavbarItem;
