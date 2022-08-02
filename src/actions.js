import * as constants from "./constants"

export const setSearchField = text => ({
    type: constants.CHANGE_SEARCH_FIELD,
    payload: text
})