import logo from "../../img/Frame 168.png"
import user from "../../img/user.png"
import search from "../../img/search.png"
import heart from "../../img/heart.png"
import cart from "../../img/cart.png"
import { Link } from "react-router-dom"
const HeaderWebsite = () => {
  return (
    <header className="header">
    <div className="container">
      <div className="header-inner">
        <div className="header_media">
        <Link to='/'>
        <img src={logo}  />
        </Link>
        </div>
        <nav className="main-menu">
          <ul className="main-menu__list">
            <li className="main-menu__item">
              <Link to='/'>
              <a className="main-menu__link" >Home</a>
              </Link>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" >Shop</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" >About</a>
            </li>
            <li className="main-menu__item">
              <a className="main-menu__link" >Contact</a>
            </li>
          </ul>
        </nav>
        <div className="header-action">
          <div className="header-action-item">
            <img src={user}  />
          </div>
          <div className="header-action-item">
            <img src={search} />
          </div>
          <div className="header-action-item">
            <img src={heart}  />
          </div>
          <div className="header-action-item">
            <a><img src={cart} /></a>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default HeaderWebsite
