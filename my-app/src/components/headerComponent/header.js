import React, {Component} from 'react';
import {
  Link,
} from 'react-router-dom';
import Resume from './Resume.pdf';
class Header extends Component {
  render() {

    return (
      <header>

        <div className="name">
        SABRAJ BHATHAL
        </div>

        <nav>
          <ul>
            <li className="first">
                <Link to='/'>Home</Link>
            </li>
            <li>
                 <a href = {Resume} target = "_blank">Resume</a>
            </li>
            <li className="last">
                <Link to='/Contact'>Contact</Link>
            </li>
          </ul>
        </nav>



      </header>
    );
  }
}

export default Header;
