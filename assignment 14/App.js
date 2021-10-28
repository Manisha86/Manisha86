import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {Themes} from './Themes';
import {getTheme} from './getTheme';

function App(){
    const [themeName , setThemeName] = useState(Themes.Basic);

    return (
        <ThemeProvider theme = {getTheme(themeName)}>
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo"/>
                  <p>
                      Edit <code> src/App.js</code> and save to reload.
                  </p>
                  <a 
                  className="App=link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                      Learn React
                  </a>
                  <button onClick={()=> setThemeName(Themes.Darcula)}>Darcula</button>
                  <button onClick={()=> setThemeName(Themes.Apple)}>Apple</button>
                </header>
            </div>
        </ThemeProvider>
    )
}

export default App;
