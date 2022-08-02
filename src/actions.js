import * as constants from "./constants"

export const setSearchField = text => ({
    type: constants.CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => dispatch => {
    dispatch({ type: constants.REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: constants.REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: constants.REQUEST_ROBOTS_FAILED, payload: error }))
}