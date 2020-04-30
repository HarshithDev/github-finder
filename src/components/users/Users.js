import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from './../Spinner';
import GithubContext from './../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    );
  }
};

// Styles
const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap: '1rem',
};

export default Users;
