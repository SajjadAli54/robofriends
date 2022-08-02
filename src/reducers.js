import * as constants from './constants'

const initialStateSearch = {
    searchfield: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case constants.CHANGE_SEARCH_FIELD:
            return { ...state, searchfield: action.payload }
        default:
            return state;
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case constants.REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }
        case constants.REQUEST_ROBOTS_SUCCESS:
            return { ...state, isPending: false, robots: action.payload }
        case constants.REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false }
        default:
            return state;
    }
}