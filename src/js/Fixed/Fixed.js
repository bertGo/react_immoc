/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react';
import './css/Fixed.css';
import $ from 'jquery'
import {fixed} from '/home/abcd/immoc_react/src/API.js'
import Fixeds from './Fixeds'

class Fixed extends Component{
  render(){
    return(
        <div className="Go_to_top">
                {fixed.map(item=><Fixeds item={item}/>)}
    </div>

    )
  }
}

$(()=>{
//返回顶部
$(".top").click(()=>{
    //先得到当前坐标
    var top = document.documentElement.scrollTop;
    var interval=setInterval(() => {
        if(top<=0){
            clearInterval(interval);
        }else{
        //设置坐标
        window.scrollTo(0,top);
        top=top-100;
    }
}, 10);
})
})
export default Fixed;