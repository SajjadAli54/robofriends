import * as constants from "./constants"

export const setSearchField = text => ({
    type: constants.CHANGE_SEARCHFIELD,
    payload: text
})