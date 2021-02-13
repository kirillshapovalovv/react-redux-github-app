import axios from 'axios';
import {setRepos, setIsFetching} from '../store/reposReducer' 


export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
    if(searchQuery == "") {
        searchQuery = "stars:%3E1"
    }
    return async dispatch => {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
        dispatch(setRepos(response.data))
    }
}

export const getCurrentRepo = async (username, reponame, setRepo, setIsFetching) => {
    setIsFetching(true)
    const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
    setRepo(response.data)
}

export const getContributors = async (username, reponame, setContributors, setIsFetching) => {
    setIsFetching(true)
    const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`)
    setContributors(response.data)
}