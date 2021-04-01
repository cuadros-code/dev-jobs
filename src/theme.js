import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#285670',
      main: '#234152',
      dark: '#285670',
      contrastText: '#fff',
    },
    accent: {
      main: '#1174D9',
      contrastText: '#000',
    },
  },
});
