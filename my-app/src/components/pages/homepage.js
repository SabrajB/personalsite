import React, {Component} from 'react';
import Headshot from "./headshot.png";

class Homepage extends Component {
  render() {

    return (

      <div className ="container-fluid">

          <img src={Headshot} alt= "Picture of Me"/>


          <p>
          I am an aspiring Biomedical Engineering student at the University of Waterloo, ON, Canada, with a keen interest in software development and biotechnology. I am proficient in C++, C#, and Matlab. I am currently developing my skills in React JS, and CSS. I enjoy working hard but smart and look ahead to help in changes at both local and global levels.
          </p>


      </div>





    );
  }
}

export default Homepage;
