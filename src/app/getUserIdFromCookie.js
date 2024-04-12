import jwt from 'jsonwebtoken';

function getCookie(name) {
    if (typeof document === 'undefined') {
        return null; // Return null if running in a non-browser environment
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
    // Retrieve the token from the cookie
    const token = getCookie('token');
    
    if (!token) {
        // If token is not found, return null or handle the error accordingly
        return null;
    }

    try {
        // Decode the token to extract user information
        const decodedToken = jwt.decode(token);
        
        // Extract and return the user ID from the decoded token
        return decodedToken.id;
    } catch (error) {
        // Handle decoding errors, such as invalid token format
        console.error('Error decoding token:', error);
        return null;
    }
}
export default getUserIdFromCookie;