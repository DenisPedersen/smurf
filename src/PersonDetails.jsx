import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from './useFetch'

const PersonDetails = () => {
     const {id } = useParams()
     const {data: person, error, isPending}  = useFetch('http://localhost:8000/persons/' + id)
     const navigate = useNavigate()
     const images = [
        { id: -1, src: '../src/data/persons/-1.jpg'},
        { id: 1, src: '../src/data/persons/1.jpg'},
        { id: 2, src: '../src/data/persons/2.png'},
        { id: 3, src: '../src/data/persons/3.webp'}
     ]

     const handleClick = () => {
        fetch('http://localhost:8000/persons/' + person.id, {
          method: 'DELETE'
        }).then(() => {
          navigate('/home')
        })
      }


  return (
    <div className='album-details'>
      {isPending && <div>Indlæser ... </div>}
      {error && <div> {error} </div>}
      {person && (
        <article>
          <h2>{person.name}</h2>
          <div>
            <p>Beskrivelse: {person.description}</p>
            {<img src={images.length < person.id === "" ? images[0].src : images[person.id].src} />}
            <button onClick={handleClick}> Slet </button>
          </div>

        </article>
      )}

    </div>
  )
}

export default PersonDetails