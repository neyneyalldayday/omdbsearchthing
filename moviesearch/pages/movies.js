import react, {useState} from 'react';

export default function Movies({ movies }) {

    const [movies, setMovies] = useState([]);

    return (
        <>
        <div className="search-box">
        <h1 className="search-title">gonna search some movies</h1>
        <div>
            <form>
                <label className="search-label">search</label>
                <input type="text"/>
                <button className="search-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
        
        </>
    )
}
 
export async function getServerSideProps() {

    const apikey = process.env.API_KEY
   
    const movies = await fetch('http://www.omdbapi.com/?s=movie&apikey='+ apikey).then(r => r.json())
    console.log(movies)
    return {
        props: {
            movies
        }
    }
}