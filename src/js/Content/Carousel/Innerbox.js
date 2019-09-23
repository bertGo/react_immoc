/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react'

class InnerBox extends Component{
    constructor(props){
        super(props)
        this.name="liuhui";
    }
    render(){
        const {box}=this.props;
        console.log(box);
    return(
        <div>
            {box.map(items=>{
                return(
                <div className="innerBox">
                <div className="first">
                    <span>{items.title}</span>
                </div>
                <div className="second">
                    {items.content.map(items=>{
                        return(
                        <a href="#">{items}</a>
                        )
                    })}
                </div>
                    </div>
                )
            })}
            </div>
        
    )
}
}
export default InnerBox;
//
//