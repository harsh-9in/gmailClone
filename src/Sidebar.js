import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';


function Sidebar(){
    return(
        <div className='sidebar'>
            <Button startIcon={<AddIcon/>} className='sidebar_compose'>
                Compose
            </Button>

            

        </div>
    );
}

export default Sidebar;