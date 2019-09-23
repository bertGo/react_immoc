/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import React,{Component} from 'react';
import {otherList} from '/home/abcd/immoc_react/src/API.js'
import * as $ from 'jquery';
import '/home/abcd/immoc_react/src/js/Content/Celebrity/OtherList/OtherList.css'
class OtherList extends Component{
    render(){
        let i=0;
        return(
            <div className="OtherList">
                {otherList.map(item=>{
                i++ ;
                return(
                <a className={"otherItem "+item.class} href="">
                    <img src={require("/home/abcd/immoc_react/public/img"+item.img+".png")}/>
                <div className={"dialog "+item.class} >
                    <p className="title">{item.title}</p>
                    <p className="name">{item.name}</p>
                    <p className="desc">{item.desc}</p>
                    <span className={"cur "+item.class}>◆</span>
                </div>
                </a>
                )}
                )}
            </div>
        )
    }
}
//悬停事件
$(()=>
    {
        for(let i=0;i<$(".otherItem .dialog").length;i++){
            $(".otherItem img").eq(i).hover(()=>{
                $(".otherItem .dialog").eq(i).show(0.1,()=>{
                    $(".otherItem .dialog").eq(i).css({
                        display:"block"
                    })
                })},()=>{
                    $(".otherItem .dialog").eq(i).fadeOut(400,()=>{
                        $(".otherItem .dialog").eq(i).css({
                            display:"none"
                        })
                    })
                }
            )
        }
        //动态添加类
    $(".otherItem").eq(11).addClass("marginLeft");
    }
)
export default OtherList;