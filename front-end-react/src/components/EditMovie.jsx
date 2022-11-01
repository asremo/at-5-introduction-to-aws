import {useState} from 'react'

const EditMovie = (data) => {


    const [title, setTitle] = useState('')
    console.log('title!!!', title)

    const [image, setImage] = useState('')
    console.log('image!!!', image)

    const [date, setDate] = useState('')
    console.log('date!!!', date)

    const [duration, setDuration] = useState('')
    console.log('duration!!!', duration)

    const [genre, setGenre] = useState('')
    console.log('genre!!!', genre)

    const [description, setDescription] = useState('')
    console.log('description!!!', description)


    const updateMovie = (id) => {
        console.log('We are about to save the edit!!!!!', id)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' }
            
          };
         // do our fetch stuff!!
        const data = fetch(`/movie/${id}`, requestOptions)
         console.log('time to edit movie!!', data)
         window.location.reload()
    }

    return (
        <div className="Form">
            <h2>Edit Movie</h2>
            <form>
                <label>Movie Title: </label>
                <input 
                    id="title"
                    name="title"
                    value={data.movie.title}
                    onChange={(e)=> {setTitle(e.target.value)}}
                    required
                />
                <label>Image URL: </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    value={data.movie.image}
                    onChange={(e)=> {setImage(e.target.value)}}
                />
                <label>Date Released (year): </label>
                <input 
                    type="number"
                    id="date"
                    name="date"
                    value={data.movie.date}
                    onChange={(e)=> {setDate(e.target.value)}}
                    required
                />
                <label>Duration (in minutes): </label>
                <input 
                    type="number"
                    id="duration"
                    name="duration"
                    value={data.movie.duration}
                    onChange={(e)=> {setDuration(e.target.value)}}
                />
                <label>Genre: </label>
                <input 
                    type="text"
                    id="genre"
                    name="genre"
                    value={data.movie.genre}
                    onChange={(e)=> {setGenre(e.target.value)}}
                />
                <label>Movie Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    value={data.movie.description}
                    onChange={(e)=> {setDescription(e.target.value)}}
                    required
                />
                <input 
                    onClick={updateMovie}
                    className="btn"
                    // type="submit"
                    value="Update Movie"
                />
            </form>
        </div>
    )}


export default EditMovie;