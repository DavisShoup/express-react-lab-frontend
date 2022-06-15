import { Link } from "react-router-dom"

const Header = (props) => {
    return (
      <header>
        <h1 className="portfolio" >My Portfolio Page</h1>
        <nav className="nav">
          <Link to="/">
            <div className="link">HOME</div>
          </Link>
          <Link to="/about">
            <div className="link">ABOUT</div>
          </Link>
          <Link to="/projects">
            <div className="link">PROJECTS</div>
          </Link>
        </nav>
      </header>
    );
  }

export default Header;