//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-41629310-5');

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//const UserContext = React.createContext('anonymous');

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#80b5ff',
      main: '#4286f4',
      dark: '#005ac1',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffd64a',
      main: '#ffa500',
      dark: '#c67600',
      contrastText: '#000'
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
        <Layout />
    </MuiThemeProvider>,
    document.querySelector('#app')
);
