/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react';
import '/home/abcd/immoc_react/src/js/Content/Teacher/ButtonRight/ButtonRight.css'

class ButtonRight extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const {onclick}=this.props;
        return(
            <div className="ButtonRight"
              type="button"
              onClick={onclick}
              >
<svg t="1568724465073" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13695" width="16" height="16"><path d="M276.755 942.936c28.497 29.315 74.739 29.315 103.307 0l367.236-378.011c28.483-29.367 28.483-76.982 0-106.291l-367.236-377.997c-28.562-29.367-74.806-29.367-103.307 0-28.546 29.325-28.546 76.929 0 106.304l315.6 324.841-315.599 324.803c-28.545 29.367-28.544 76.973 0 106.356l0 0z" p-id="13696" fill="#9199A1"></path></svg>
            </div>
        )
    }
}
export default ButtonRight;