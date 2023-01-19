function sessionStorage(type, data = {}) {
  if (type === 'set') {
    window.sessionStorage.setItem('user', JSON.stringify(data));
  } else if (type === 'get') {
    return JSON.parse(window.sessionStorage.getItem('user'));
  } else if (type === 'remove') {
    window.sessionStorage.removeItem('user');
  }
  return 'no user found';
}

export default sessionStorage;
