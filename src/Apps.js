import Cardlist from './Cardlist.js'
import {robots} from './robots'
import React from 'react'
import Searchbox from './search.jsx';

class Apps extends React.Component{
    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield:''
        }
    }

onserchchange(event){
    console.log(event.target.value);
}
render(){
    return(
    <div className='tc'>
    <h1>RoboFriends</h1>
    <Searchbox searchchange={this.onserchchange}/>
    <Cardlist robots={this.state.robots}/>
    </div>   
    );
}
}
export default Apps;