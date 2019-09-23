/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import '/home/abcd/immoc_react/src/js/Content/WhiteBackgroundCard/Title2/Title2.css'

class Title2 extends Component{
    constructor(props){
        super(props);
        this.name="CourseCard"
    }
    render(){
        const {
        item
        ,titles
        }=this.props;
        let i=titles;
        return(
            <div className="Title2">
                {item.title2.map(items=>{
                    i++;
                    return(
                        <div className="TitleCard">
                        <a className={"card"+" card"+i }href="">
                            <div className="linear">
                                <div>
                            <h3>{items.title}</h3>
                            <p>{items.content}</p>
                            </div>
                            </div>
                        </a>
                            </div>
                    )
                })}
            </div>
            )
    }
}

export default Title2;