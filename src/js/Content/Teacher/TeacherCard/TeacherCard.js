import React,{Component} from 'react';
import {teacherCard} from '/home/abcd/immoc_react/src/API.js'
import '/home/abcd/immoc_react/src/js/Content/Teacher/TeacherCard/TeacherCard.css'

class TeacherCard extends Component{
    constructor(props){
        super(props);
        this.name="teachercard"
    }
    render(){
        const {item}=this.props;
        return(
                    <a className="back" href="">
                        <img className="uimg" src={require("/home/abcd/immoc_react/public/img"+item.img+".png")}/>
                        <span className="name">{item.name}</span>
                        <span className="title">{item.title}</span>
                        <span className="content">{item.content}</span>
                    </a>
        )
    }
}

export default TeacherCard;