/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React,{Component} from 'react';
import './Bk.css'

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'fade',
        autoplay:true,
        loop: true,
        slidesPerView : 'auto',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

class Bk extends Component {
    render(){
        return(
            <div className="bk">
                <div className="swiper-container" style={{position: "relative"},{width: "100%"},{margin: "0 auto"},{height: "100px"}}>
                    <div className="swiper-wrapper">
                        <div className="swiper-slide" style={{backgroundImage:'url(https://img.mukewang.com/5d71f9d60001c1f516000540.jpg)'}}></div>
                        <div className="swiper-slide" style={{backgroundImage:'url(https://img.mukewang.com/5d5388760001703318720632.jpg)'}}></div>
                        <div className="swiper-slide" style={{backgroundImage:'url(https://img.mukewang.com/5d5e8f570001e43509360316.jpg)'}}></div>
                        <div className="swiper-slide" style={{backgroundImage:'url(https://img.mukewang.com/5d6cfdd80001e1a118720632.jpg)'}}></div>
                        <div className="swiper-slide" style={{backgroundImage:'url(https://img.mukewang.com/5d7795b40001227709360316.jpg)'}}></div>
                        <div className="swiper-slide" style={{backgroundImage:'url(https://img.mukewang.com/5d6768bd0001416718720632.jpg)'}}></div>
                    </div>
            </div>
            </div>
        )
    }
}

export default Bk;