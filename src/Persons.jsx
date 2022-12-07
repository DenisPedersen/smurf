import PersonList from './PersonList'
import useFetch from './useFetch'

const Persons = () => {


    const { data: persons /* her sættes dataen til navnet "persons" */, isPending, error } = useFetch('http://localhost:8000/persons');
 

    return (
        <div className='persons'>
            {error && <div> {error} </div>}

            {isPending && <div>Indlæser data ...</div>}

            {persons && <PersonList persons={persons} title='Alle Smølferne'/>
            }

        </div>
    )
}

export default Persons