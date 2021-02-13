import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import {getCurrentRepo, getContributors} from '../../actions/repos'
import Loading from '../loading/Loading'

import './card.scss'

function Card({ history }) {

    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({owner: {}});
    const [contributors, setContributors] = useState([]);
    const [isFetching, setIsFetching] = useState(true);



    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo, setIsFetching);
        getContributors(username, reponame, setContributors, setIsFetching)
        setIsFetching(false)
    }, [])

    

    const clickHandler = (e) => {
        e.preventDefault();
        history.goBack()
    } 
    
    return (
        <div>
            <button onClick={clickHandler}>Bo Back</button>
            {!isFetching
            ? 
                <div className="card">
                    <img src={repo.owner.avatar_url} className="card-img" alt="logo" />
                    <div className="card-username">{repo.name}</div>
                    <div className="card-stars">Кол-во звёзд: {repo.stargazers_count}</div>
                    {contributors.map((contributor, index) => (
                        <div key={index}>{index + 1}. {contributor.login}</div>
                    ))}
                </div>
            :
                <Loading />}
            
        </div>
    )
}

export default Card
