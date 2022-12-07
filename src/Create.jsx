import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('Peyo')
  const [original_title, setOriginalTitle] = useState('')
  const [year_published, setYearPublished] = useState(null)
  const [additional_info, setAdditionalInfo] = useState('')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const album= {title, author, original_title, year_published, additional_info}

    setIsPending(true)

    fetch('http://localhost:8000/albums', {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(album)
    }).then(() => {
      console.log("Album added")
      setIsPending(false)
      //navigate(-1)
      navigate('/home')
    })

  }



  return (
    <div className='create'>
      <h2>Opret nyt smølfealbum</h2>
      <form onSubmit={handleSubmit}>
        <label> Album titel: </label>
        <input type="text"
          required
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />
        <label> Forfatter: </label>
        <select
          value={author}
          onChange={(e) =>
            
            setAuthor(e.target.value)}>
          <option value="Peyo"> Peyo</option>
          <option value="Alain Jost"> Alain Jost</option>
        </select>
        <label> Original titel: </label>
        <input type="text"
          required
          value={original_title}
          onChange={(e) =>
            setOriginalTitle(e.target.value)}
        />
        <label> Udgivelsesår: </label>
        <input type="number"
          required
          value={year_published}
          onChange={(e) =>
            setYearPublished(e.target.value)}
        />
        
        <label> Handling: </label>
        <textarea
          required
          value={additional_info}
          onChange={(e) =>
            setAdditionalInfo(e.target.value)}
        > </textarea>
        
        { !isPending && <button> Opret album</button>}
        {isPending && <button> Album oprettes ...</button> }
      </form>
      <div>{title}</div>
      <div>{author}</div>
      <div>{original_title}</div>
      <div>{year_published}</div>
      <div>{additional_info}</div>
    </div>
  )
}

export default Create