import React, { useState } from 'react'

const Header = () => {
  const [logInBtn, setLogInBtn] = useState("Logout")

  const handleLoginBtn = () => {
    setLogInBtn((prev) => (
      prev === "Login" ? "Logout" : "Login"
    ))
  }
  return (
    <div className='nav'>
          <div className='logo'>
              <h1>LOGO</h1>
          </div>
          <div className='nav-list'>
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
          <li>Cart</li>
          <button onClick={handleLoginBtn}>
            {logInBtn}
          </button>
              </ul>
          </div>
    </div>
  )
}

export default Header
