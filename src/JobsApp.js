import React from 'react'
import Login from './pages/Login'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { NavBar } from './components/NavBar'

const JobsApp = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <NavBar />
      <Login />
    </MuiThemeProvider>
  )
}

export default JobsApp
