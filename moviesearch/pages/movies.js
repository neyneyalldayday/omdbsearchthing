import react, {useEffect, useState} from 'react';
import MovieDump from './movedump';
import getConfig from 'next/config'
const { serverRunTimeConfig, publicRuntimeConfig} = getConfig();




export default function Movies(initialData) {

    const [searchResults, setSearchResults] = useState([]);
    const [formInput, setFormInputs] = useState({});
    const [searchTitle, setSearchTitle] = useState('');
  
  useEffect(() => {
      setSearchResults(initialData.response.Search)
  }, [initialData])

  const handleInputs = (event) => {
      let {name, value} = event.target 
      setFormInputs({...formInput, [name]: value});
      setSearchTitle(event.target.value);
  }

  const search = async (event) => { 
     
      event.preventDefault();
      let movies = await fetch('');      
      movies = await movies.json()
      setSearchResults(movies.results)
  }
   

    return (
        <>
        <div className="search-box">
        <h1 className="search-title">gonna search some movies</h1>
        <div>
            <form onSubmit={search}>
                <label className="search-label">search</label>
                <input placeholder='hello search a title to your favorite movie' className='search-input' type="text" name='Title' value={searchTitle} onChange={handleInputs} required/>
                <button  className="search-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
        <div className='movie-dump-container'>         
            {searchResults.map((each, index) => {
                return (
                    <MovieDump
                    index={each.imdbID}
                    Title={each.Title}
                    Poster={each.Poster} 
                    Plot={each.Plot}                  
                    />
                )
            })}        
        </div>       
        </>
    )
}
 
export async function getServerSideProps() {

    const apikey = process.env.API_KEY   
    const response = await fetch('http://www.omdbapi.com/?s=movie&apikey='+ apikey).then(r => r.json())    
    
    console.log(response)
    return {
        props: {
            response
        }
    }
  
}