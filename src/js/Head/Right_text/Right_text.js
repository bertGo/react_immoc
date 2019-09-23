/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import Shop_nav from './Shop/Shop_nav';
import Down_app from './Down/Down_app';
import $ from 'jquery'
import '/home/abcd/immoc_react/src/js/Head/Right_text/Right_text.css'
class Right_text extends Component{
    render(){
        return(
            <div id="right_text">
                <ul>
                    <li className="down"><a href="" >下载APP</a>
                    </li>
                    <Down_app />
                    <li className="shop">
                        <a href="">
                        <span>
                    <svg t="1568105462856" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1979" width="16" height="16"><path d="M334.475817 778.284739c-49.040926 0-88.317465 39.720653-88.317465 88.76158 0 49.040926 39.277562 88.76158 88.317465 88.76158s88.76158-39.720653 88.76158-88.76158C423.23842 818.006416 383.516744 778.284739 334.475817 778.284739zM68.191078 68.191078l0 88.76158 88.76158 0L316.502467 493.581512l-59.914578 108.733447c-6.878664 12.870122-10.873652 27.294646-10.873652 42.827411 0 49.040926 39.720653 88.76158 88.76158 88.76158l532.570501 0 0-88.76158L353.338421 645.142369c-6.213515 0-11.095709-4.882194-11.095709-11.095709 0-1.997494 0.444115-3.771907 1.331321-5.325285l39.720653-72.340585 330.637396 0c33.286104 0 62.355163-18.418488 77.666894-45.712111l158.661579-288.032042c3.550873-6.213515 5.547343-13.536294 5.547343-21.303188 0-24.63098-19.971867-44.38079-44.38079-44.38079L255.256568 156.952658l-42.162262-88.76158C213.094306 68.191078 68.191078 68.191078 68.191078 68.191078zM778.284739 778.284739c-49.040926 0-88.317465 39.720653-88.317465 88.76158 0 49.040926 39.277562 88.76158 88.317465 88.76158 49.040926 0 88.76158-39.720653 88.76158-88.76158C867.046319 818.006416 827.325665 778.284739 778.284739 778.284739z" p-id="1980" fill="#515151"></path></svg>                            
                    </span>
                        购物车</a>
                    </li>
                    <Shop_nav />
                    <li>
                        <a href="">登陆</a>
                        <span className="span">/</span>
                        <a href="">注册</a>
                    </li>
                </ul>
            </div>
        )
    }
}
//下拉框
$(()=>{
    $(".down").hover(()=>{
        $(".down_app").css({"display":"block"});
    },()=>{
    $(".down_app").css({"display":"none"});
    })
    $(".down_app").hover(()=>{
        $(".down_app").css({"display":"block"});
    },()=>{
    $(".down_app").css({"display":"none"});
    })
    $(".shop").hover(()=>{
        $(".shop_nav").css({"display":"block"});
    },()=>{
    $(".shop_nav").css({"display":"none"});
    })
    $(".shop_nav").hover(()=>{
        $(".shop_nav").css({"display":"block"});
    },()=>{
    $(".shop_nav").css({"display":"none"});
    })
    //搜索框
$(".search_area input").focus(()=>{
    $(".search_area").css({
        "border-bottom":"1px solid #f01414"
    })
    $(".showhide-search").css({
        background:"rgba(240, 20, 20,0.2)"
       , transition: "0.2s"
    })
    $(".showhide-search path").css({
        fill: "#F01414"
    })
    $(".search_a").css({
        display:"none"
    })
})
$(".search_area input").blur(()=>{
    $(".search_area").css({
        "border-bottom":"1px solid #D9DDE1"
    })
    $(".search_a").css({
        display:"block"
    })
    $(".showhide-search").css({
        background:"none"
    })
    $(".showhide-search path").css({
        fill: "#707070"
    })
    })
})

export default Right_text