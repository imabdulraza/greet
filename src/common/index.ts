const getUserRole = () => {
    const data = localStorage.getItem('userInfo');
    const userInfo = data && JSON.parse(data);
    const role = userInfo && userInfo.role;
    return role;
};

export const common = {
    getUserRole
}