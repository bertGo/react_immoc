import React,{Component} from 'react';
import '/home/abcd/immoc_react/src/js/Content/Teacher/TeacherCards/t.css'

class TeacherCards extends Component{
    constructor(props){
        super(props);
        this.name="TeacherCards"
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

export default TeacherCards;