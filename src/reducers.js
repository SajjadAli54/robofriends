import * as constants from './constants'

const initialState = {
    searchfield: ''
}

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case constants.CHANGE_SEARCH_FIELD:
            return { ...state, searchfield: action.payload }
        default:
            return state;
    }
}