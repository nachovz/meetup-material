//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-41629310-5');

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//const UserContext = React.createContext('anonymous');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#6a6a6a',
      main: '#3f3f3f',
      dark: '#191919',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6b70',
      main: '#dc3545',
      dark: '#a3001e',
      contrastText: '#fff'
    }
  }
});
//include jquery into the bundle and store its contents into the $ variable
//import $ from "jquery";
//include bootstrap npm library into the bundle
//import 'bootstrap';

//include your index.scss file into the bundle
//import '../styles/index.scss';

//import your own components
import Layout from './Layout.jsx';

//render your react application
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
    </MuiThemeProvider>,
    document.querySelector('#app')
);
