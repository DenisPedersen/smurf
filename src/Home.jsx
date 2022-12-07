import AlbumList from './AlbumList'
import useFetch from './useFetch'

const Home = () => {
    //  let name='Arne'
    /* const [name, setName] = useState('John')
    const [age, setAge] = useState('12')


    const handleClick = () => {
        setName('Bjarne')
        setAge(13)
    } */


    /*  const [name, setName] = useState('Tobias') */


    /* const handleDelete = (id) => {
        const newAlbums = albums.filter(album => album.id !== id)
        setAlbums(newAlbums)
    } */


    const { data: albums /* her sættes dataen til navnet "albums" */, isPending, error } = useFetch('http://localhost:8000/albums');
 

    return (
        <div className='home'>
            {error && <div> {error} </div>}

            {isPending && <div>Indlæser data ...</div>}


            {albums && <AlbumList albums={albums} title='Alle Smølfe-albums' /* handleDelete={handleDelete}  */ />
            }

            {/* <Albumlist albums={albums.filter((album) => album.author === 'Peyo')} title='Book by Peyo' /> */}

            {/* <h2>Home</h2>
            <p>{name} is {age}</p>
            
            <button onClick={handleClick}>Click me</button> */}

        </div>
    )
}

export default Home