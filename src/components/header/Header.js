import {Link} from 'react-router-dom';

function Header() {
  return(
    <div className= "header">
      <Link to = "/"><div className="header__logo">
        <p>JobHunt</p>
       </div>
      </Link>
    </div>
  )
}

export default Header;