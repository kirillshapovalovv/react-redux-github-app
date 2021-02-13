import React from 'react'
import {useParams} from 'react-router-dom'

function Card({ history }) {

    const {username, reponame} = useParams();
    console.log(username);
    console.log(reponame);

    const clickHandler = (e) => {
        e.preventDefault();
        history.goBack()
    } 
    
    return (
        <div>
            Card page
            <button onClick={clickHandler}>Bo Back</button>
        </div>
    )
}

export default Card
