export const checkAuth = () => {
  const user = JSON.parse(localStorage.getItem('isAuthenticated'));
  return user && user.rol === 1;
};