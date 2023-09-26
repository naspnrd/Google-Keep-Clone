import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import MainDisplayContainer from '../containers/MainDisplayContainer';
import ThemeContext from '../contexts/ThemeContext';
import { LIGHT_THEME, DARK_THEME } from '../constants/ThemeConstants';

const App = () => {
  const [isNavbarCollapased, setNavbarCollapse] = useState(
    window.innerWidth < 775 ? true : false
  );
  const [selctedIndex, setSelectedIndex] = useState(0);
  const [theme, setTheme] = useState(DARK_THEME);

  const toggleTheme = () => {
    setTheme(theme === DARK_THEME ? LIGHT_THEME : DARK_THEME);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === DARK_THEME ? 'App App-dark' : 'App App-light'}>
        <Header setNavbarCollapse={setNavbarCollapse} />
        <div className="separator"></div>
        <div className="container">
          <NavBar
            theme={theme}
            selctedIndex={selctedIndex}
            setSelectedIndex={setSelectedIndex}
            isNavbarCollapased={isNavbarCollapased}
          />
          <MainDisplayContainer selctedIndex={selctedIndex} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
