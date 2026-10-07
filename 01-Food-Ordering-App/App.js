import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
      <div className="main-header">
        <div className="nav-logo">
          <img src="https://plus.unsplash.com/premium_photo-1675344317761-3ace7cf2362a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGxvZ298ZW58MHx8MHx8fDA%3D" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
}



const Body = () => {
    return (
      <div className="main-container">
        <div className="search">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="res-container">
          <ReaturantCard name="meghana" rating="4.3 - 25-30min" />
          <ReaturantCard name="KFC" rating="4.3 - 30min" />
        </div>
      </div>
    );
}

const ReaturantCard = (props) => {
    console.log(props);
    const { name, rating } = props;
    

  return (
    <div className="res-card">
      <div className="res-img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/9/7/471f6df4-6fa8-464c-a583-d4f5468f3c9f_173815.JPG" />
      </div>
      <div className="res-items">
        <h1>{name}</h1>
        <p>{rating}</p>
        <p>south indian, north india </p>
      </div>
    </div>
  );
};
const Footer = () => {
    return (
        <div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Body />
            <Footer/>
        </div>
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)