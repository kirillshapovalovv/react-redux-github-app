import React from 'react'
import {NavLink} from 'react-router-dom'

import './repo.scss'

function Repo({ repo }) {
    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name">
                    <NavLink to={`/card/${repo.owner.login}/${repo.name}`} className="repo-header-name-link">
                        {repo.name}
                    </NavLink>
                </div>
                <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link" target="_blank">Перейти к репозиторию</a>
        </div>
    )
}

export default Repo
