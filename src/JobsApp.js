import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { AppRouter } from './routes/AppRouter';

const JobsApp = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppRouter />
    </MuiThemeProvider>
  )
}

export default JobsApp
