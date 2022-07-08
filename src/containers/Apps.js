import Cardlist from '../components/Cardlist.js'
import Scroll from '../components/scroll.js'
import React from 'react'
import Searchbox from '../components/search.jsx'
import './App.css'
import Errorcatch from './ErrorRecord.jsx'
class Apps extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onserchchange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }



    render() {
        const { robots,searchfield } =this.state;
        const filterrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());

        })


        return (! robots.length) ?
            <h1>Loading...</h1>
            : (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchchange={this.onserchchange} />
                    <Scroll >
                        <Errorcatch>
                       <Cardlist robots={filterrobots} />
                       </Errorcatch>
                    </Scroll>
                </div>
            );





    }
}
export default Apps;