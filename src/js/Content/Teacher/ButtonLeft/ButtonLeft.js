/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import $ from 'jquery'
import '/home/abcd/immoc_react/src/js/Content/Teacher/ButtonLeft/ButtonLeft.css'
class ButtonLeft extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {onclick}=this.props;
        return(
            <div className="ButtonLeft" 
            type="button" 
            onClick={onclick}
            >
<svg t="1568724588037" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14806" width="16" height="16"><path d="M210.4 511.1 641.3 80.2c22.8-22.8 59.8-22.8 82.6 0 22.8 22.8 22.8 59.8 0 82.6L375.7 511.1l348.3 348.3c22.8 22.8 22.8 59.8 0 82.6-22.8 22.8-59.8 22.8-82.6 0L210.4 511.1 210.4 511.1zM210.4 511.1" p-id="14807" fill="#9199A1"></path></svg>   
            </div>
        )
    }
}
export default ButtonLeft;