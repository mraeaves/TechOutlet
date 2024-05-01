import './topnav.css';

export const TopNav = () => {
  return (
    <>
      <nav className="navbar mainNav">
        <div class="logoSection"><img src="../src/assets/logo1.png" /></div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            
            <div class="menu topNav">
            <h2> Menu</h2>
              <div className="searchBarMobile">
                <input placeholder="Search for a product e.g. Samsung..."></input>
              </div>
              <li class="department">Search By Department<svg xmlns="http://www.w3.org/2000/svg" className="caret" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <ul class="dropdown">
                  <li><a href="/">All Accessories</a></li>
                  <li><a href="/">Computers</a></li>
                  <li><a href="/">Digital Media</a></li>
                  <li><a href="/">Electronics</a></li>
                  <li><a href="/">Mobile Phones</a></li>
                  <li><a href="/">PC Accessories</a></li>
                  <li><a href="/">Photo</a></li>
                  <p class="divider"></p>
                  <li class="afterDivider"><a href="/">All Products</a></li>
                </ul>
              </li>
              <div className="searchBar">
                <input placeholder="Search for a product e.g. Samsung..."></input>
              </div>
              <li><a href="/" className='afterSearch'>Home</a></li>
              <li><a href="/" className='afterSearch'>All Products</a></li>
              <div className='accountButtons'>
                <li class="loginBtn"><a href="/" className='loginBtnLink'>Login</a></li>
                <li class="signUpBtn"><a href="/">Sign Up</a></li>
              </div>
            </div>










          </ul>
      </nav>
    </>
  )
}

export default TopNav;