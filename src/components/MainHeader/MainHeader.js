import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import './MainHeader.scss';

function MainHeader( { toggleDrawer } ) {
  return (
    <header className="header">
      <div className="header__icon">
        <MenuIcon style={{ color: '#FFFFFF' }} onClick={ () => { toggleDrawer() } } />
      </div>
    </header>
  )
}

export default MainHeader;
