import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "./js/pages/LayoutPage.jsx";
import Home from "./js/pages/HomePage.jsx";
// Import css files
import './css/main.scss';

const rootContainer = document.getElementById("root");
const root = createRoot(rootContainer);

// The root of the application
class App extends React.Component {
    render() {
        return (
            <>
                <Layout />
                <Home />
            </>
        );
    }
}

root.render(<App />);