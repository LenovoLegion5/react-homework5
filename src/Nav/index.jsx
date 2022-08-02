function Nav(props) {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <a href="#" className="logo">
            <span className="nav__cirlce"></span>
            Digital <span className="txt_blue">Agency</span>
          </a>
          <ul className="nav__list">
            <li className="nav__li">
              <a href="#">{props.li}</a>
            </li>
            <li className="nav__li">
              <a href="#">{props.li2}</a>
            </li>
            <li className="nav__li">
              <a href="#">{props.li3}</a>
            </li>
            <li className="nav__li">
              <a href="#">{props.li4}</a>
            </li>
          </ul>
          <ul className="nav__list2">
            <p className="lang">EN</p>
            <a href="#" className="list2__link">
              Müşteri Girişi
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
