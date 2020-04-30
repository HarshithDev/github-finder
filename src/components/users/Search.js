import React, { useState, useContext } from 'react';
import GithubContext from './../../context/github/githubContext';
import AlertContext from './../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === '') {
      alertContext.setAlert('Please enter the name', 'light');
    } else {
      githubContext.searchUsers(search);
      setSearch('');
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='form text-center'
        style={formStyle}
      >
        <input
          type='text'
          name='search'
          placeholder='Search Users...'
          value={search}
          onChange={onChange}
          style={textField}
        />
        <input type='submit' value='Search User' style={submitBtn} />
      </form>
      {githubContext.users.length > 0 && (
        <div className='text-center'>
          <button onClick={githubContext.clearUsers} style={clearUser}>
            Clear Users
          </button>
        </div>
      )}
    </div>
  );
};

// Style css
const formStyle = {
  margin: '15px 15px 15px',
};

const textField = {
  width: '70%',
  padding: '10px',
  border: '1px solid #333',
};

const submitBtn = {
  padding: '10px',
  display: 'inline-block',
  border: '1px solid #333',
  background: '#333',
  color: '#fff',
  cursor: 'pointer',
  width: '30%',
};

const clearUser = {
  background: '#ccc',
  border: '0',
  boxShadow: 'none',
};

export default Search;
