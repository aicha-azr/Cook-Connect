// Function to get the value of a cookie by name
function getCookie(name) {
    if (typeof document === 'undefined') {
        return null; // Return null if running in a non-browser environment
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



function redirectToHomePage() {
    if (typeof window === 'undefined') {
      return; // Do nothing if running in a non-browser environment
  }
  
      window.location.href = '/homePage';
  
  }
// Higher-order function to enforce authentication on pages
function requireAuth() {
    if (isAuthenticated()) {
       redirectToHomePage()
    }
    
}

// Call requireAuth() on each page where authentication is required
export default requireAuth;
