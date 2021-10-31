import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function Header() {
  return (
    <div className="header">
      <div className='header_left'>
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png' alt=''/>
      </div>
      <div className='header_middle'>
        <SearchIcon/> 
        <input placeholder='Search mail' type='text' />
        <ArrowDropDown  className='search_input'/>

      </div>
      <div className='header_right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <HelpOutlineIcon/>
        </IconButton>
        <IconButton>
          <SettingsIcon/>
        </IconButton>
        <IconButton>
          <AccountCircleIcon/>
        </IconButton>

      </div>
    </div>
  );
}

export default Header;
