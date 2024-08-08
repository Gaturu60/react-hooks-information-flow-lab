import React from 'react';

const Header = ({ onDarkModeClick}) => {
    return (
        <Header>
            <h1>My App</h1>
            <button onClick={onDarkModeClick}>Toggle Dark Mode</button>
        </Header>
    );

};

export default Header;