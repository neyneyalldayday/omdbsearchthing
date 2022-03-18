import {useEffect, useState} from 'react';
import MovieDump from './movedump';
import Layout from '../components/layout';


export default function Movies(initialData) {

    // state variables
    const [searchResults, setSearchResults] = useState([]);
    const [formInput, setFormInputs] = useState({});
    const [searchTerm, setSearchTerm] = useState('');   
   
  // collecting the string that is entered
  const handleInput = (event) => {
      let {name, value} = event.target 
      setFormInputs({...formInput, [name]: value});
      setSearchTerm(event.target.value);
  }
  // making a search call dynamically depending on the input box and what is entered
  const search = async (event) => {    
      event.preventDefault();
      //couldnt get my api key to work in an environment variable here eeesh security leak
      let movies = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&type=movie&plot=full&apikey=d254f211`);     
      movies = await movies.json()          
      if(!movies.Search) {
          return alert('no movies found')
      }
      setSearchResults(movies.Search)
     
  }

  // making the inital data call from the bottom every time the page loads for the first time
   useEffect(() => {
    setSearchResults(initialData.response.Search)
  }, [initialData])

   
  // the input field for searches with some handlers and state  
    return (
        <Layout>
         <div className="search-box">
         <h1 className="search-title">search some movies</h1>
         <div>
             <form onSubmit={search} className="sub-form">                
                 <input className='search-input' placeholder='search' type="text" 
                 name='searchTerm' value={searchTerm} onChange={handleInput} required/>                             
                 <button  className="search-button" type="submit">Submit</button>
             </form>
         </div>
         </div>
         <div className='movie-dump-container'>         
            {searchResults.map((each, index) => {
  
  // pulling in the component that will hold the search results
                return (                   
                    <MovieDump
                    index={each.imdbID}
                    Title={each.Title}
                    Poster={each.Poster}                                                         
                    />                     
                )
            })}            
         </div>       
        </Layout>
    )
}
 
//inital api call just to have something on the page
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