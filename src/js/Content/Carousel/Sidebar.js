/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable array-callback-return */
import React,{Component} from 'react';
import {sidebar}from '/home/abcd/immoc_react/src/API.js';
import Submenu_1 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_1.js';
import Submenu_2 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_2.js';
import Submenu_3 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_3.js';
import Submenu_4 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_4.js';
import Submenu_5 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_5.js';
import Submenu_6 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_6.js';
import Submenu_7 from '/home/abcd/immoc_react/src/js/Content/Carousel/Submenu/SubmenuCss/Submenu_7.js';
import './Submenu/SidebarCss/Sidebar.css'
import $ from 'jquery'

class Sidebar extends Component{
    render(){
        let i=0;
        return(
            <div className="sidebar">
                {sidebar.map(item=>{
                    i++;
                    return(
                    <div className={"side_div side_div_"+i}>
                    <a 
                    className="side_a"
                    href=""
                    >
                        {item}
                    </a>
                       <i>
                       <svg t="1568173416096" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6173" width="12" height="12"><path d="M384.30607 256.204389l0 512.41186 320.259338-256.206443L384.30607 256.204389z" p-id="6174" fill="#bfbfbf"></path></svg>                         </i>
                    </div>
                    )
                })}
            <Submenu_1    index={1}   row={0}     col={1} />
            <Submenu_2   index={2}   row={0}     col={2} />
            <Submenu_3   index={3}   row={0}     col={3} />
            <Submenu_4   index={4}   row={0}     col={4} />
            <Submenu_5   index={5}   row={0}     col={5} />
            <Submenu_6   index={6}   row={0}     col={6} />
            <Submenu_7   index={7}   row={0}     col={7} />

            </div>
        )
    }
}

//js部分
$(()=>{
    //导航侧边栏二级菜单
    for(let i=1;i<=7;i++){
        (document.getElementsByClassName('side_div_'+i)[0]).onmouseover=()=>{
            document.getElementsByClassName('submenu_'+i)[0].setAttribute("style", "display:block ");
        }
        (document.getElementsByClassName('side_div_'+i)[0]).onmouseout=()=>{
            document.getElementsByClassName('submenu_'+i)[0].setAttribute("style", "display:none ");
        }
        (document.getElementsByClassName('submenu_'+i)[0]).onmouseover=()=>{
            document.getElementsByClassName('submenu_'+i)[0].setAttribute("style", "display:block ");
        }
        (document.getElementsByClassName('submenu_'+i)[0]).onmouseout=()=>{
            document.getElementsByClassName('submenu_'+i)[0].setAttribute("style", "display:none ");
        }
    }
})

export default Sidebar ;