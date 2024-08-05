import jwt from 'jsonwebtoken';

function getCookie(name) {
    if (typeof document === 'undefined') {
        return null; 
    }
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return decodeURIComponent(cookieValue);
        }
    }
    return null;
}

// Function to get the user ID from the token stored in the cookie
function getUserIdFromCookie() {
    
    const token = getCookie('token');
    
    if (!token) {
        return null;
    }

    try {
        const decodedToken = jwt.decode(token);
        return decodedToken.id;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
}
export default getUserIdFromCookie;