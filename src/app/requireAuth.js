// Function to get the value of a cookie by name
function getCookie(name) {
    if (typeof document === 'undefined') {
        return null; 
    }
    const cookieString = document.cookie;
    const cookies = cookieString.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

// Function to check if the user is authenticated (has a token)
function isAuthenticated() {
    const token = getCookie('token');
    return token !== null && token !== undefined;
}

// Function to redirect the user to the landing page
function redirectToLandingPage() {
    if (typeof window === 'undefined') {
        return;
    }
    window.location.href = '/'; 
}


function requireAuth() {
    if (!isAuthenticated()) {
        redirectToLandingPage();
    }
}


export default requireAuth;
