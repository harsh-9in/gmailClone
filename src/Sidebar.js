import { Button } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from './SidebarOption';
import { LabelImportant,Inbox,Star,AccessTime,NearMe } from '@material-ui/icons';

function Sidebar(){
    return(
        <div className='sidebar'>
            <Button startIcon={<AddIcon/>} className='sidebar_compose'>
                Compose
            </Button>

            <SidebarOption Icon={Inbox} title="inbox" number={54} selected={true}/>
            <SidebarOption Icon={Star} title="Starred" number={0}/>
            <SidebarOption Icon={AccessTime} title="Snoozed" number={0}/>
            <SidebarOption Icon={LabelImportant} title="Important" number={54}/>
            <SidebarOption Icon={NearMe} title="Sent" number={0}/>
            
        </div>
    );
}

export default Sidebar;