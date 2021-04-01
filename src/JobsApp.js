import React from 'react'
import Login from './pages/Login'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';


const JobsApp = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Login />
    </MuiThemeProvider>
  )
}

export default JobsApp
