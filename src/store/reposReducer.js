const defaultState = {
    items: [],
    // получение данных с API GitHub
    isFetching: true,
    currentPage: 1,
    // кол-во репозиториев на одной странице
    perPage: 10,
    // кол-во всех репозиториев
    totalCount: 0,
}

const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export default function reposReducer(state = defaultState, action) {
    switch(action.type) {
        case SET_REPOS:
            return {
                ...state, 
                items: action.payload.items, 
                totalCount: action.payload.total_count, 
                isFetching: false
            }
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}


// action creators
export const setRepos = repos => ({type: SET_REPOS, payload: repos})
export const setIsFetching = bool => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, payload: page})

