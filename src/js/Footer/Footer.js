/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react';
import FooterLink from './FooterLink/FooterLink'
import '/home/abcd/immoc_react/src/js/Footer/Footer.css'
class Footer extends Component{
  render(){
    return(
      <div className="Footer">
          <div className="container">
              <FooterLink/>
          </div>
      </div>
    )
  }
}

export default Footer;