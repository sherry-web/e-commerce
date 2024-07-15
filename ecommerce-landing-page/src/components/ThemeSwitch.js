import React from 'react';

const ThemeSwitch = ({ onThemeSwitch }) => {
    return (
        <button onClick={onThemeSwitch}>Switch Theme</button>
    );
};

export default ThemeSwitch;