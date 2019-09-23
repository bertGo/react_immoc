/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react';
import {footerLInk} from '/home/abcd/immoc_react/src/API.js'
import FooterCopyRight from '../FooterRight/FooterRight'
import FooterImg from '../FooterImg/FooterImg'

import './css/FooterLink.css'
class FooterLink extends Component{
  render(){
    return(
      <div className="FooterLink">
              {footerLInk.map(item=>
          <a href="">
              {item}
          </a>
                )}
       <FooterCopyRight/>
       <FooterImg/>
      </div>
    )
  }
}

export default FooterLink;