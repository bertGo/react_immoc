/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React,{Component} from 'react';
import InnerBox from '../../Innerbox';
import {innerBox5,recomment_box_5} from '/home/abcd/immoc_react/src/API.js'
import MenuBelow_5 from '../../MenuBelow/MenuBelow_5'
import '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu.css'



class Submenu_5 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let {index,
            row,
            col
        }=this.props;
        return(
            <div className={"submenu submenu_"+index}>
                {/* 上侧超链接标题栏 */}
            <InnerBox box={innerBox5}/>
            <div className="bottom">
            {recomment_box_5.map(item=>{
            return(<MenuBelow_5       col={col} item={item} />)
            })}
            </div>
            </div>
        )
    }
}


export default Submenu_5;