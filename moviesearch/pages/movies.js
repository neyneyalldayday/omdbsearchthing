import react, {useEffect, useState} from 'react';
import MovieDump from './movedump';
import { MovieTitle } from './movieTitle';
import { SearchBox } from './searchBox';



export default function Movies(initialData) {

    const [searchResults, setSearchResults] = useState([]);
   
  useEffect(() => {
      setSearchResults(initialData.response.Search)
  }, [initialData])
   

    return (
        <>
        <SearchBox />
        <div className='movie-dump-container'>         
            {searchResults.map((each, index) => {
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