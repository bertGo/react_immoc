/* eslint-disable react/jsx-no-undef */
import React,{Component} from 'react';
import Head from './Head/Head'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Fixed from './Fixed/Fixed'

class Immoc extends Component{
  render(){
    return(
      <div>
        <Head />
        <Content />
        <Footer />
        <Fixed />
      </div>
    )
  }
}
console.log(9/2)
export default Immoc;