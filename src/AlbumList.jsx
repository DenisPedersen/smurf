import React from 'react'
import { Link } from 'react-router-dom'

const AlbumList = ({ albums, title, year_published, original_title, /* handleDelete */ }) => {
    /* const blogs = props.blogs
    const title = props.title */


    return (
        <div className='album-list'>
            <h2> {title} </h2>
            {albums.map((album) => (
                <div className='album-preview' key={album.id}>
                    <Link to={ `/albums/${album.id}`}>
                    <h2>{album.title}</h2>
                    <p>Skrevet af: {album.author}</p>
                    <p>Udgivet: {album.year_published}</p>
                    <p>Original Titel: {album.original_title}</p>
                    </Link>
                   



                    {/*                     <button onClick={() => handleDelete(album.id)}> slet album</button>
 */}                </div>
            ))}</div>
    )
}

export default AlbumList