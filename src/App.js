import React from 'react';
import Header from './header/header'
import Main from './Main/Main'
import './App.css';
import { MuiThemeProvider, createMuiTheme , darken} from '@material-ui/core/styles'


const font = "'Open Sans', sans-serif"; 
const muiTheme = createMuiTheme({
  fontFamily: font,
}
);

function App(props) {
  return (
      <React.Fragment>
        <MuiThemeProvider theme={muiTheme}>
          <div style={{fontFamily: font}}>
            <Header/>
            <div className="App">
              <header className="App-header">
                <Main/>  
              </header>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
  );
}

export default App;
