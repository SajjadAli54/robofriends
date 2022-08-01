import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { users } from './users'

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
    }

    onSearchChanges = event => {
        this.setState({
            searchfield: event.target.value
        })
    }

    render() {
        let filteredRobots = this.filterRobots();

        if (!filteredRobots.length) {
            filteredRobots = users;
        }

        return (
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChanges} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }

    filterRobots = () => {
        const { robots, searchfield } = this.state;

        const filteredRobots =
            robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

        return filteredRobots;
    }
}

export default App