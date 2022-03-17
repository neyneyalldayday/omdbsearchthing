import {useEffect, useState} from 'react';
import MovieDump from './movedump';





export default function Movies(initialData) {

    const [searchResults, setSearchResults] = useState([]);
    const [formInput, setFormInputs] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    console.log(searchTerm);
   
  
  const handleInput = (event) => {
      let {name, value} = event.target 
      setFormInputs({...formInput, [name]: value});
      setSearchTerm(event.target.value);
  }

  const search = async (event) => {    
      event.preventDefault();
      let movies = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&apikey=d254f211`);
      console.log(movies)
      movies = await movies.json()
      setSearchResults(movies.response)
  }

   useEffect(() => {
    setSearchResults(initialData.response.Search)
  }, [initialData])

   

    return (
        <>
         <div className="search-box">
         <h1 className="search-title">gonna search some movies</h1>
         <div>
             <form onSubmit={search}>
                 <label className="search-label">search</label>
                 <input type="text" name='searchTerm' value={searchTerm} onChange={handleInput} required/>
                 <button  className="search-button" type="submit">Submit</button>
             </form>
         </div>
         </div>
         <div className='movie-dump-container'>         
            {searchResults.map((each, index) => {
                console.log(searchResults)
                return (
                    <MovieDump
                    index={each.imdbID}
                    Title={each.Title}
                    Poster={each.Poster}                   
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