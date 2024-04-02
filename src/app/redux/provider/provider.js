"use client"
const { Provider } = require("react-redux");
const store = require("../store/store").default;

function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

module.exports = Providers;
