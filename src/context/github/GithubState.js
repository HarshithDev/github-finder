import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from './../types';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users

  // Search users
  const searchUsers = async (search) => {
    setLoading();
    // Fetch Api Options
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      // body: JSON.stringify(data),
    };
    let resData;
    await fetch(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        resData = json.items;
      });
    dispatch({
      type: SEARCH_USERS,
      payload: resData,
    });
  };

  // Get User

  // Get Single Github User
  const getUser = async (username) => {
    setLoading();
    // Fetch Api Options
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      // body: JSON.stringify(data),
    };
    let resData;
    await fetch(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        resData = json;
      });
    dispatch({
      type: GET_USER,
      payload: resData,
    });
  };

  // Get Repos
  const getUserRepos = async (username) => {
    setLoading();
    // Fetch Api Options
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      // body: JSON.stringify(data),
    };
    let resData;
    await fetch(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`,
      options
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        resData = json;
      });
    dispatch({
      type: GET_REPOS,
      payload: resData,
    });
  };

  // Clear Users
  const clearUsers = (e) =>
    dispatch({
      type: CLEAR_USERS,
    });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
