/* eslint-disable no-useless-concat */
/* eslint-disable no-sequences */
import React,{Component} from 'react';
import './TypesTitle.css'

class TypesTitle extends Component{
    constructor(props){
        super(props);
        this.name="TypesTitle"
    }
    render(){
        const {position_right,position_left,types}=this.props;
        return(
            <div className="TypesTitle">
            <h3>
                <span className={"IconTitLeft"+" IconTit"+position_left} ></span>
                <p>{types.one}</p>
                 ／ 
                 <p>{types.two}</p>
                  ／ 
                  <p>{types.three}</p>
                   ／
                    <p>{types.four}</p>
                    {types.five?   <span>／<p>{types.five}</p></span> :null}
                    {types.six?   <span>／<p>{types.six}</p></span> :null}
                    {types.seven?   <span>／<p>{types.seven}</p></span> :null}
                <span className={"IconTitRight"+" IconTit"+position_right} ></span>
            </h3>
            </div>
        )
    }
}

export default TypesTitle;