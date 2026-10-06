echo "# React-Js" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/chaithrareddy47/React-Js.git
git push -u origin main


import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", {className:"title"}, "Hello world")
// const heading = <h1>Hello world</h1>
const Header = () => {
    const number = 1000;
    return (
        <div>
            {number }
            <h1>Heelo world</h1>
            <p>React from akshay saini </p>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Header />)