import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div>
            <h1>Header</h1>
        </div>
    )
}
const Body = () => {
    return (
        <div>
            <h1>Body</h1>
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)