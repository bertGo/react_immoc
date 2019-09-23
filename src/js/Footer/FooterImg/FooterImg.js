/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react';
import './css/FooterImg.css'
import {footerimg} from "/home/abcd/immoc_react/src/API.js"
import $ from 'jquery'

class FooterImg extends Component{
  render(){
    return(
      <div className="FooterImg">
          {footerimg.map(item=>
          <a className="l" href=""> 
              <img src={require("/home/abcd/immoc_react/public/img"+item.img+".png")}></img>
              <p>{item.content}</p>
              {item.position?
              <div className = "position"></div> :null
              }
          </a>
          )}
      </div>
    )
  }
}
$(()=>{
$(".l").eq(1).hover(
    ()=>{
    $(".l img").eq(1).attr("src","/img/微博2.png")
    },()=>
    $(".l img").eq(1).attr("src","/img/微博.png")
    )
    $(".l").eq(0).hover(
        ()=>{
        $(".l img").eq(0).attr("src","/img/微信2.png")
        },()=>
        $(".l img").eq(0).attr("src","/img/微信.png")
        )
})

export default FooterImg;