const defaultState = {
    items: [],
    // получение данных с API GitHub
    isFetching: true
}

const SET_REPOS = 'SET_REPOS'

export default function reposReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_REPOS:
            return {...state, items: action.payload.items}
        default:
            return state
    }
}


// action creators
export const setRepos = repos => ({type: SET_REPOS, payload: repos})

