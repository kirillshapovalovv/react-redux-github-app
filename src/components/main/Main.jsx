import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getRepos} from '../../actions/repos'
import Repo from '../repo/Repo'

import './main.scss'

function Main() {

    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)

    const [searchInputValue, setSearchInputValue] = useState('')

    // получение всех репозиториев
    useEffect(() => {
        dispatch(getRepos())
    }, [])

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(getRepos(searchInputValue))
    }

    return (
        <div className="main">
            <form className="search" onSubmit={searchHandler}>
                <input 
                    value={searchInputValue} 
                    onChange={(e) => setSearchInputValue(e.target.value)} 
                    className="search-input" 
                    type="text" 
                    placeholder="Input repository name" 
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            {
                !isFetching
                ?
                    <div>
                        {repos.map(repo => <Repo repo={repo} />)}
                    </div>
                :
                    <div className="fetching-wrapper">
                        <div className="fetching" />
                    </div>
            }
            
        </div>
    )
}

export default Main
