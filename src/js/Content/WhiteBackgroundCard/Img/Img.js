/* eslint-disable jsx-a11y/alt-text */
import React,{Component} from 'react';
import './Img.css'
import * as $ from 'jquery'

class Img extends Component{
    constructor(props){
        super(props);
        this.name="Img"
    }
    render(){
        const {
            card_init,card_group
         ,item
        }=this.props;
        return(
            <div className="Img">
                <img 
                src={require("/home/abcd/immoc_react/src/img/card"+card_group+"_"+card_init+".png")}
                // data-src={require("/home/abcd/immoc_react/src/img/card"+j+"_"+i+".png")}
                />
                <div className="label">
            {item.text1 ? <label className="text">{item.text1}</label>　:null}
            {item.text2 ? <label className="text">{item.text2}</label>　:null}
            </div>
            {item.new   ?  <span className="new">{item.new}</span> :    null}
            {item.upgrade   ?  <span className = "upgrade"> {item.upgrade}</span> :    null}
            </div>
        )
    }
}

// //-------------------------------------图片懒加载-----------------------------------------
//     var n = 0,
//         imgNum = $("img").length,
//         img = $('img');

//     lazyload();

//     $(window).scroll(lazyload);

//     function lazyload(event) {
//         for (var i = n; i < imgNum; i++) {
//             if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
//                 if (img.eq(i).attr("src") == "https://placehold.it/216x120/ffde00/0000?text=This+is+a+picture") {
//                     var src = img.eq(i).attr("data-src");
//                     img.eq(i).attr("src", src);

//                     n = i + 1;
//                 }
//             }
//         }
//     }
export default Img;