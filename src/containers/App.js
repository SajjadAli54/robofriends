import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import { users } from './users.js'

import * as actions from '../actions'

const mapStateToProps = state => {
    return {
        searchfield: state.searchfield
    }
}

const mapDispatchToProps = dispath => {
    return {
        onSearchChanges: event => dispath(actions.setSearchField(event.target.value))
    }
}
class App extends Component {
    constructor() {
        super()

        this.state = {
            robots: []
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({ robots: users }))
        this.setState({ robots: users })
    }

    render() {
        let filteredRobots = []

        if (!this.state.robots.length) {
            filteredRobots = users;
        }
        else
            filteredRobots = this.filterRobots();

        return (
            <div className='tc' >
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.props.onSearchChanges} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }

    filterRobots = () => {
        console.log(this.props)
        const { robots } = this.state;
        const { searchfield } = this.props;

        const filteredRobots =
            robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

        return filteredRobots;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);