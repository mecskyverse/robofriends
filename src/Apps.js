import Cardlist from './Cardlist.js'
import {robots} from './robots'
import React from 'react'
class Apps extends React.Component{
render(){
    return(
    <div>
    <h1>Hello world</h1>
    <Cardlist robots={robots}/>
    </div>   
    );
}
}
export default Apps;