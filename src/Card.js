import React from 'react'

function Card({ id, name, email }) {
    let i = Math.round(Math.random) + picsArray.length - 1;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='Robot Image' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card

// src={`https://robohash.org/${id}?200x200`}