const Header = () => {
  return (
    <header id="topnav" className="defaultscroll sticky nav-sticky">
      <div className="container">
        <a className="logo" href="index.html">
          <span className="logo-light-mode">
            <img src="/images/udrive-logo.svg" height={30} className="l-dark" alt="" />
            <img src="/images/udrive-logo.svg" height={30} className="l-light" alt="" />
          </span>
          <img src="/images/udrive-logo.svg" height={30} className="logo-dark-mode" alt="" />
        </a>
        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" onClick={undefined}>
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-inline mb-0">
          <li className="list-inline-item search-icon mb-0">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="uil uil-search h5 text-dark nav-light-icon-dark mb-0"></i>
                <i className="uil uil-search h5 text-white nav-light-icon-white mb-0"></i>
              </button>
            </div>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu nav-right nav-light">
            <li>
              <a href="#" className="sub-menu-item">
                Trang chủ
              </a>
            </li>

            <li>
              <a href="#" className="sub-menu-item">
                Về chúng tôi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
