import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from './../Spinner';
import { Link } from 'react-router-dom';
import Repos from './../repos/Repos';
import GithubContext from './../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) return <Spinner />;
  else
    return (
      <Fragment>
        <Link to='/' className='btn' style={{ marginRight: '20px' }}>
          Back to Users
        </Link>
        Hireable:{' '}
        {hireable ? (
          <i className='fa fa-check' />
        ) : (
          <i className='fa fa-times-circle' />
        )}
        <div>
          <div className='card'>
            <div className='row'>
              <div className='grid2 text-center'>
                <img
                  src={avatar_url}
                  alt='avatar'
                  className='round-img'
                  style={{ width: '80px' }}
                />
                <h2>{name}</h2>
                {location && <p>Location: {location}</p>}
              </div>
              <div className='grid2'>
                {bio && (
                  <Fragment>
                    <strong>Bio</strong>
                    <p>{bio}</p>
                  </Fragment>
                )}
                <a href={html_url} target='_BLANK' rel='noopener noreferrer'>
                  Visit Github
                </a>
                {login && (
                  <Fragment>
                    <p>
                      <strong>Username: </strong>
                      {login}
                    </p>
                  </Fragment>
                )}
                {company && (
                  <Fragment>
                    <p>
                      <strong>Company: </strong>
                      {company}
                    </p>
                  </Fragment>
                )}
                {blog && (
                  <Fragment>
                    <p>
                      <strong>Website: </strong>
                      <a
                        href={`http://${blog}`}
                        target='_BLANK'
                        rel='noopener noreferrer'
                      >
                        {blog}
                      </a>
                    </p>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
          <div className='card text-center'>
            <button>Followers: {followers}</button>
            <button>Following: {following}</button>
            <button>Public Repos: {public_repos}</button>
            <button>Public Gists: {public_gists}</button>
          </div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
};

export default User;
