import { gql, useLazyQuery } from '@apollo/client'
import React, { useState } from 'react'

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations($name: String!) {
        characters(filter: {
            name: $name
        }) {
            results {
                location {
                    name
                }
            }
        }
    }
`

export default function Search() {
    const [name,setName] = useState("")

    const [getLocations, {loading,error,data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    console.log({
        called,
        loading,
        data,
        error
    })

    return (
    <div>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => getLocations()}>
            Search
        </button>
    </div>
  )
}
