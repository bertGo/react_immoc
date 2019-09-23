/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import '/home/abcd/immoc_react/src/js/Head/Search/Search.css'
import $ from 'jquery'
//标题栏搜索框
class Search extends Component{
    render(){
        return(
            <a class="search_warp">
                <div className="search_area">
                    <input 
                    className="search-input"
                    />
                </div>
                <div className="search_a">
                    <a href="#">Java入门</a>
                    <a href="#">前端入门</a>
                </div>
                <a className="showhide-search" href="">
                <svg t="1568100326040" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="892" width="20" height="20"><path d="M663.006587 602.400314l-32.11848 0-12.063745-12.080118c40.177008-44.250786 64.278915-104.586905 64.278915-168.934382 0-144.831451-116.607671-261.4381-261.439123-261.4381-144.787449 0-261.386934 116.606648-261.386934 261.4381 0 144.831451 116.598462 261.387958 261.386934 261.387958 64.390455 0 124.725551-24.09372 168.993733-64.279938l12.011556 12.081141 0 32.162482 201.112213 201.051838 60.32691-60.335096L663.006587 602.400314zM421.664154 602.400314c-100.589875 0-181.021662-80.43281-181.021662-181.014499 0-100.641041 80.43281-181.014499 181.021662-181.014499 100.624668 0 181.005289 80.373458 181.005289 181.014499C602.669443 521.967504 522.288822 602.400314 421.664154 602.400314" p-id="893" fill="#707070"></path></svg>
                </a>

            </a>
        )
    }
}
export default Search