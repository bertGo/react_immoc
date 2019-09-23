/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import '/home/abcd/immoc_react/src/js/Head/Left_img/Left_img.css'
//慕课网logo
class Left_img extends Component{
    render(){
        const src="https://www.imooc.com/static/img/index/logo.png";
        return(
            <div id={"logo"}>
                <a href={"#"}>
                <img
                src={src}
                alt={"logo"} 
                />
                </a>
            </div>
        )
    }
}
export default Left_img 