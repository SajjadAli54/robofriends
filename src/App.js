import React, { Component } from 'react'
import CardList from './CardList'
import SearchBox from './SearchBox'
import './App.css'
import Scroll from './Scroll'

class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(posts => console.log(posts))
    }

    onSearchChanges = event => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        const filteredRobots = this.state.robots
            .filter(robot => robot.name.toLowerCase()
                .includes(this.state.searchfield
                    .toLowerCase()))
        if (filteredRobots.length === 0)
            return <h1>Loading...</h1>
        return (
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChanges} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App