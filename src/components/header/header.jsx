import React, { useState } from 'react';
import searchicon from '../../images/search-interface-symbol.png';
import '../header/header.css';

const Header = () => {
  const [searchedValue, setSearchedValue] = useState('');

  const handleChange = (event) => {
    setSearchedValue(event.target.value);
  }

  const handleSearchClick = () => { 
    window.location.replace(`/character/name/${searchedValue}`);
  }

  const handleEnterClick = (event) => {
    if (event.key === 'Enter') {
      window.location.replace(`/character/name/${searchedValue}`);
    }
  };

  const handleHeadingClick = () => {
    window.location.replace('/home');
  }

   return (
    <header className='header-container'>
        <h1 className='heading' onClick={handleHeadingClick}>
          <span className='heading-text'>Cartoon Characters</span>
        </h1>
        <div className='search'>
        <input placeholder="Search" type="text" className='search-input' onKeyUp={handleEnterClick} onChange={handleChange}/>
        <img src={searchicon} alt ="" className='search-icon' onClick={handleSearchClick}/>
        </div>
    </header>
   )
}

export default Header;