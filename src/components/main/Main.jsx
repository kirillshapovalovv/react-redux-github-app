import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getRepos} from '../../actions/repos'
import Repo from '../repo/Repo'

import './main.scss'

function Main() {

    const dispatch = useDispatch();

    const repos = useSelector(state => state.repos.items)

    // получение всех репозиториев
    useEffect(() => {
        dispatch(getRepos())
    }, [])

    return (
        <div>
            {repos.map(repo => <Repo repo={repo} />)}
        </div>
    )
}

export default Main
