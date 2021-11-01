import { Checkbox } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { ArrowDownward, ArrowDropDown, ChevronLeft, ChevronRight, MoreVert, Redo, Settings } from '@material-ui/icons'
import React from 'react'

function EmailList() {
    return (
        <div className='emailList'>
            <div className='emailListSettings'>
                <div className='emialListSettingsLeft'>
                    <Checkbox/>
                    <IconButton> <ArrowDropDown /> </IconButton>
                    <IconButton> <Redo /> </IconButton>
                    <IconButton> <MoreVert /> </IconButton>
                </div>
                <div className='emialListSettingsRight'>
                    <IconButton> <ChevronLeft /> </IconButton>
                    <IconButton> <ChevronRight /> </IconButton>
                    <IconButton> <Settings /> </IconButton>
                </div>
            </div>
        </div>
    )
}

export default EmailList
