import React from 'react'

import './repo.scss'

function Repo({ repo }) {
    return (
        <div className="repo">
            <div className="repo-header">
                <div className="repo-header-name">{repo.name}</div>
                <div className="repo-header-stars">Количество звезд: {repo.stargazers_count}</div>
            </div>
            <div className="repo-last-commit">Последний коммит: {repo.updated_at}</div>
            <a href={repo.html_url} className="repo-link">Перейти к репозиторию</a>
        </div>
    )
}

export default Repo
