import { useState } from 'react';
import '../css/SearchBar.css'
import React from 'react';

function SearchBar({filterBySearch}) {
  const [searchValue, setSearchValue] = useState('')
  const onSearch = () => {
    filterBySearch(searchValue)
    setSearchValue('')
  }
function submit(e){
  e.preventDefault();
}
  return (
    <form className="search-bar" onSubmit={submit}>
      <div className='form' >
        <input
          className='search'
          type='text'
          placeholder='chercher un médecin'
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button
          className='search-btn'
          onClick={() => onSearch()}
        >
          chercher
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
