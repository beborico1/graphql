import React from 'react'
import { useParams } from 'react-router';
import "./Character.css"
import { useCharacter } from './hooks/useCharacter';

export default function Character() {

    const {id} = useParams()

    const {data,loading,error} = useCharacter(id);
    console.log({error,data,loading})

    if (error) return <div>something went wrong</div>
    if(loading) return <div>Loading...</div>
  return (
    <div className='Character'>
        <img src={data.character.image} width={750} height={750}/>
        <div className='Character-content'>
            <h1>{data.character.name}</h1>
            <p>{data.character.gender}</p>
            <div className='Character-episode'>
                {data.character.episode.map((episode) => {
                    return <div key={episode.episode}>
                        {episode.name} - <b>{episode.episode}</b>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}
