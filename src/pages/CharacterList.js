import React from "react"
import { Link } from "react-router-dom"
import "./CharacterList.css"
import { useCharacters } from "./hooks/useCharacters"

const CharacterList = () => {
    const {error,loading,data} = useCharacters()
    
    if (loading) return <div>Loading...</div>

    if (error) return <div>something went wrong...</div>

    return <div className="CharacterList">
        {data.characters.results.map(character => {
            return <Link to={`/${character.id}`}>
                <img src={character.image}/>
                <h2>{character.name}</h2>
            </Link>
        })}
    </div>
}

export default CharacterList