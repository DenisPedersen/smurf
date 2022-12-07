import React from 'react'
import { Link } from 'react-router-dom'

const PersonList = ({ persons,title }) => {
  

    return (
        <div className='person-list'>
            <h2> {title} </h2>
            {persons.map((person) => (
                <div className='album-preview' key={person.id}>
                    <Link to={ `/persons/${person.id}`}>
                    <h2>{person.name}</h2>
                    <p>Beskrivelse: {person.description}</p>
                    </Link>
               </div>
            ))}</div>
    )
}

export default PersonList