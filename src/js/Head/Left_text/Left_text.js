/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import '/home/abcd/immoc_react/src/js/Head/Left_text/Left_text.css'
//标题栏item
import {list} from '/home/abcd/immoc_react/src/API.js'
class Left_text extends Component{
    render(){
        return(
            <div id="left_text">
                <ul>
                    {list.map(item =>{
                        return(
                            <a href="#">
                        <li> {item}</li>
                        </a>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Left_text