import React,{Component} from 'react';
import TypesTitle from '../WhiteBackgroundCard/TypesTitle/TypesTitle'
import {TypesTit8,star} from '/home/abcd/immoc_react/src/API.js'
import OtherList from './OtherList/OtherList'
import '/home/abcd/immoc_react/src/js/Content/Celebrity/Celebrity.css'
class Celebrity extends Component{
    render(){
        return(
            <div className="Celebrity">
                  <div className="ContainerTypesClearFix">
                 <TypesTitle position_left="14" position_right="15"types={TypesTit8}  />
                <div className="titleList">
                    {star.map(item=>
                        <dd>
                            <a className="photo" href="">
                                <img src={require("/home/abcd/immoc_react/public/img"+item.img+".jpg")}/>
                            </a>
                            <p className="name">{item.name}</p>
                            <p className="title">{item.title}</p>
                            <div className={"crown_"+item.position+" crown"}></div>
                        </dd>
                    )}
                </div>
                    <OtherList/>
                 </div>
            </div>
        )
    }
}

export default Celebrity;