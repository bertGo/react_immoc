/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import TypesTitle from '../WhiteBackgroundCard/TypesTitle/TypesTitle'
import {TypesTit7,teacherCard,teacherCard2} from '/home/abcd/immoc_react/src/API.js'
import TeacherCard from './TeacherCard/TeacherCard'
import ButtonLeft from './ButtonLeft/ButtonLeft'
import ButtonRight from './ButtonRight/ButtonRight'
import TeacherCards from './TeacherCards/TeacherCards'
import '/home/abcd/immoc_react/src/js/Content/Teacher/Teacher.css'
import $ from 'jquery'

class Teacher extends Component{
    constructor(props){
        super(props)
        this.state={
            state:true
        }
        this.isButtton=this.isButtton.bind(this);
        this.isButttons=this.isButttons.bind(this);
    }
    //生命周期
    componentDidMount(){
        this.top();
    }
    //定时器
    top=()=>setInterval(()=> {this.isButtton(this.state.state)}, 3000);
    //右键删除类1
    deleteOne(){
$(".index").removeClass("aniright");
        $(".hide").removeClass("anirights");
        $(".index").removeClass("anirights");
        $(".hide").removeClass("aniright");
        $(".index").removeClass("anilefts");
        $(".hide").removeClass("anilefts");
        $(".hide").removeClass("anilefthide");
    }
    //右键删除类2
    deleteTwo(){
        $(".index").removeClass("aniright");
        $(".hide").removeClass("anirights");
        $(".index").removeClass("anirights");
        $(".hide").removeClass("aniright");
        $(".index").removeClass("anileft");
        $(".hide").removeClass("anileftsm");
    }
    //右键
    isButtton(status){
        this.setState(()=>{
            const judgment=()=> status!==true;
            const update=judgment();
            if(update===false){
                this.deleteOne();
                $(".index").addClass("anileft");
                $(".hide").addClass("anileftsm");
            }
            if(update===true){
                this.deleteTwo();
                $(".index").addClass("anilefts")
                $(".hide").addClass("anilefthide")
            }
            return {
                state:update
            }
        })
    }
    //左键
    isButttons(status){
        this.setState(()=>{
            const judgment=()=> status!==true;
            const update=judgment();
            if(update===false){
                $(".index").removeClass("anirights");
                $(".hide").removeClass("aniright");
                $(".index").addClass("aniright");
                $(".hide").addClass("anirights");
            }
            if(update===true){
                $(".index").removeClass("aniright");
                $(".hide").removeClass("anirights");
                $(".index").addClass("anirights")
                $(".hide").addClass("aniright")
            }
            return {
                state:update
            }
        })
    }
    render(){
        return(
            <div className="background" >
                 <div className="ContainerTypesClearFix2">
                 <TypesTitle position_left="12" position_right="13"types={TypesTit7}  />
                <a href="" className="more">
                    查看更多
                    <svg t="1568692199885" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13280" width="16" height="16"><path d="M439.456 755.2l-59.744-59.744L563.168 512l-183.456-183.456L439.456 268.8l243.2 243.2z" p-id="13281" fill="#93999f"></path></svg>
                </a>
                </div>
            <div className="overHide">
            <div className="TeacherCard index" >
                {teacherCard.map(item=><TeacherCard item={item}/>)}
           </div>
           <div className="TeacherCards hide" >
                {teacherCard2.map(item=><TeacherCards    item={item}/> )}
           </div>
           </div>
           <ButtonLeft  onclick={()=>this.isButttons(this.state.state)} />
           <ButtonRight onclick={()=>this.isButtton(this.state.state)}/>
            </div>
        )
    }
}
export default Teacher;