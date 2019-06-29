const loggedIn = () => {
  return (localStorage.getItem('user') && localStorage.getItem('uid'));
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('uid');
  localStorage.removeItem('locations');
};

const setUser = (user, uid) => {
  localStorage.setItem('user', user);
  localStorage.setItem('uid', uid);
};

const getUid = () => {
  return localStorage.getItem('uid');
};

export {loggedIn, logout, setUser, getUid}