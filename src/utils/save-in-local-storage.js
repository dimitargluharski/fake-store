export const saveInLocalStorage = () => {
  const existingUser = localStorage.getItem('username');

  if (!JSON.parse(existingUser.username === 'john@mail.com')) {
    console.log('User exists in local storage:', existingUser);
    localStorage.setItem('username', JSON.stringify({
      username: 'john@mail.com',
      password: '123',
    }));
  }

  localStorage.setItem('username', 'john.doe');
}