import Cardlist from '../components/Cardlist.js'
import Scroll from '../components/scroll.js'
import React from 'react'
import Searchbox from '../components/search.jsx'
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

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState ({robots:users}));
    } 



render(){
    const filterrobots = this.state.robots.filter(robot => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

})
if(this.state.robots.length===0){
    <h1>Loading...</h1>
}
else {

    return(
        <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox searchchange={this.onserchchange}/>
        <Scroll >
        <Cardlist robots={filterrobots}/>
        </Scroll>
        </div>   
        );
}



    
}
}
export default Apps;