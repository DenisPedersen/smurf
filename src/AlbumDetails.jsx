import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const AlbumDetails = () => {
  const { id } = useParams()
  const { data: album, error, isPending } = useFetch('http://localhost:8000/albums/' + id)
  const navigate = useNavigate()
  const images = [
    { id: -1, src: '../src/data/-1.jpg' },
    { id: 1, src: '../src/data/1.jpg' },
    { id: 2, src: '../src/data/2.jpg' },
    { id: 3, src: '../src/data/3.jpg' },
    { id: 4, src: '../src/data/4.jpg' },

  ];

  const handleClick = () => {
    fetch('http://localhost:8000/albums/' + album.id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/home')
    })
  }

  return (
    <div className='album-details'>
      {isPending && <div>Indlæser ... </div>}
      {error && <div> {error} </div>}
      {album && (
        <article>
          <h2>{album.title}</h2>
          <div>
            <p>Skrevet af: {album.author}</p>
            <p>Udgivet: {album.year_published}</p>
            <p>Original titel: {album.original_title}</p>
            <p>Handling: {album.additional_info}</p>
            {<img src={images.length < album.id === "" ? images[0].src : images[album.id].src} />}
            <button onClick={handleClick}> Slet </button>
          </div>

        </article>
      )}

    </div>
  )
}

export default AlbumDetails