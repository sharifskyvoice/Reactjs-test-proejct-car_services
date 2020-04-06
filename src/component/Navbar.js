import React, { Component } from 'react';
import logo from '../images/logo.png';
import { Link,  BrowserRouter} from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";


export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar header">
        <div className="nav-left">
          <div className="nav-header">
            <Link to="/"><img src={logo} alt="Cars" /></Link>
              <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"} >
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/cars">Store</Link></li>
              </ul>
            <button type="button" className="nav-btn" onClick={this.handleToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}
