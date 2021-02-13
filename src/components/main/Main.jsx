import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getRepos} from '../../actions/repos'
import {setCurrentPage} from '../../store/reposReducer'
import Repo from '../repo/Repo'
import Loading from '../loading/Loading'
import {createPages} from '../../utils/createPages'

import './main.scss'

function Main() {

    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const perPage = useSelector(state => state.repos.perPage)
    const totalCount = useSelector(state => state.repos.totalCount)

    const [searchInputValue, setSearchInputValue] = useState('')

    const pagesCount = Math.ceil(totalCount / perPage)
    const pages = []

    createPages(pages, pagesCount, currentPage)

    // получение всех репозиториев
    useEffect(() => {
        dispatch(getRepos(searchInputValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = (e) => {
        e.preventDefault()
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchInputValue, currentPage, perPage))
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
                        {repos.map((repo, index) => <Repo key={index} repo={repo} />)}
                        <div className="pages">
                            {pages.map((page, index) => (
                                <span 
                                    key={index} 
                                    className={currentPage === page ? 'current-page' : 'page'}
                                    onClick={() => dispatch(setCurrentPage(page))}
                                >
                                    {page}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                :
                    <Loading />
            }
        </div>
    )
}

export default Main
