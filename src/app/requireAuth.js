// Function to get the value of a cookie by name
function getCookie(name) {
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
    window.location.href = '/'; // Adjust the URL as needed
}

// Higher-order function to enforce authentication on pages
function requireAuth() {
    if (!isAuthenticated()) {
        redirectToLandingPage();
    }
}

// Call requireAuth() on each page where authentication is required
export default requireAuth;
