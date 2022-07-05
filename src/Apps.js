import Cardlist from './Cardlist.js'

import React from 'react'
import Searchbox from './search.jsx';
import './App.css'
class Apps extends React.Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    }

onserchchange = (event) => {
    this.setState({searchfield : event.target.value})
   
}





render(){
    const filterrobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

})



    return(
    <div className='tc'>
    <h1 className='f1'>RoboFriends</h1>
    <Searchbox searchchange={this.onserchchange}/>
    <Cardlist robots={filterrobots}/>
    </div>   
    );
}
}
export default Apps;