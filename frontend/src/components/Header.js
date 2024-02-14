import React, { useState } from 'react'
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import {AppBar,Tab,Tabs,Toolbar, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState()
  return (
    
    <div>
      <AppBar sx={{backgroundColor: '#52796f'}} position='sticky'> 
        <Toolbar>
          <AssuredWorkloadOutlinedIcon/>
          <Typography>Councelling and visitor Management system</Typography>
          <Tabs textColor='inhert' indicatorColor='primary' 
          sx={{ml:"auto"}} value={value} 
          onChange={(e,val)=>setValue(val)}>
            <Tab  LinkComponent={NavLink} to= "/signup"label='Signup'/>
            <Tab  LinkComponent={NavLink} to= "/signIn" label='SignIn'/>
            <Tab  LinkComponent={NavLink} to= "/ADDCouncellor"label='AddCouncellor'/>
            <Tab  LinkComponent={NavLink} to= "/Addvisitor"label='AddVisitor'/>
            <Tab  LinkComponent={NavLink} to= "/Fetchregistrations"label='Registrations'/>
            <Tab  LinkComponent={NavLink} to= "/Appointment" label='Appointment'/>
          </Tabs>
        </Toolbar>
      </AppBar>
      </div>
      
  )
}

export default Header