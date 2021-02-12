const defaultState = {
    items: [],
    // получение данных с API GitHub
    isFetching: true,
    count: 0
}

const SET_COUNT = 'SET_COUNT'

export default function reposReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_COUNT:
            return {...state, count: action.payload}
        default:
            return state
    }
}

export const countCreator = count => ({type: SET_COUNT, payload: count})