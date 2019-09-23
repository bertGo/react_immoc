/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react';
import Left_img from './Left_img/Left_img'
import Left_text from './Left_text/Left_text'
import Search from './Search/Search'
import Right_text from './Right_text/Right_text'
import '/home/abcd/immoc_react/src/js/Head/Head.css'
class Head extends Component{
    render(){
        return(
            <div className="header">
                <Left_img/>
                <Left_text />
                <Search/>
                <Right_text/>
                </div>
            
        )
    }
}

export default Head;