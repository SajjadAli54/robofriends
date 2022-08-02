import React, { Component } from 'react'
import { connect } from 'react-redux'

import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

import * as actions from '../actions'

const mapStateToProps = state => {
    return {
        searchfield: state.searchRobots.searchfield,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = dispath => {
    return {
        onSearchChanges: event => dispath(actions.setSearchField(event.target.value)),
        onRequestRobots: () => dispath(actions.requestRobots())
    }
}
class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchfield, robots, isPending } = this.props;

        if (isPending) {
            return <h1>Ooooops! Loading ....</h1>
        }

        const filteredRobots =
            robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase()))

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
}

export default connect(mapStateToProps, mapDispatchToProps)(App);