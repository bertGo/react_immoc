/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
import React,{Component} from 'react';
import InnerBox from '../../Innerbox';
import MenuBelow_2 from '../../MenuBelow/MenuBelow_2'
import {innerBox2,recomment_box_2} from '/home/abcd/immoc_react/src/API.js'
import '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu.css'



class Submenu_2 extends Component {
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
            <InnerBox box={innerBox2}/>
            <div className="bottom">
            {recomment_box_2.map(item=>{
            return(<MenuBelow_2       col={col} item={item} />)
            })}
        </div>
            </div>
        )
    }
}


export default Submenu_2;