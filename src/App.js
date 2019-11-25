import React from 'react';
import Header from './header/header'
import Main from './Main/Main'
import './App.css';
function App() {
  return (
      <React.Fragment>
        <Header/>
        <div className="App">
          <header className="App-header">
            <Main/>  
          </header>
        </div>
      </React.Fragment>
  );
}

export default App;
