import React from 'react';

const PlayerCard = props => {
    console.log('PlayerCard Props: ', props)
    return (
        <div className='player-card'>
            <h3>{props.player.name} | {props.player.country}</h3>
            <p>Number of searches: {props.player.searches}</p>
        </div>
    )
}

export default PlayerCard;