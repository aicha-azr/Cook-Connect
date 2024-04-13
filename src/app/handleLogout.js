function deleteCookie(name) {
    document.cookie = `${name}=; Max-Age=0; Path=/;`;
}
function handleLogout() {
    deleteCookie('token');
    console.log('the token is deleted')
    window.location.reload();
}
 export default handleLogout;


