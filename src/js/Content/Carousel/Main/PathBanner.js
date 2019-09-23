/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React,{Component} from 'react';
import './PathBannerCss/PathBanner.css'
import {pathBanner} from '/home/abcd/immoc_react/src/API.js'

class PathBanner extends Component{
    render(){
        let i=-1;
        return(
            <div className="pathBanner"> 
                    {pathBanner.map(item=>{
                        i++;
                        return(
                        <a href="#">
                            <i className={"xuebi"+i}></i>
                            <p className="tit">{item.title}</p>
                            <p className = "dess">{item.content}</p>
                        </a>
                        )
                    })}
            </div>
        )
    }
}

export default PathBanner 