const useAuth = () => {
    const data = localStorage.getItem('userInfo');
    const userInfo = data && JSON.parse(data);
    const isLoggedIn = userInfo && userInfo.email && userInfo.role;
    return isLoggedIn ? true : false;
};

export default useAuth;