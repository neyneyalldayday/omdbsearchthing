import styled from 'styled-components'
import Link from 'next/link';
import { useState, useEffect } from 'react';



const PosterContainer = styled.ul`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 400px;
  background-color: rgb(126, 226, 226, );

  &:hover,
   :focus,
   :active {
  color: #0070f3;
  border-color: rgb(126, 226, 226, 2.8);
  box-shadow: 5px 5px rgb(126, 226, 226, 2.8)
  }
`;


export default function MovieDump({Title, index, Poster, imdbID}) {  
    
    const [id, setId] = useState([]);

    useEffect(() => {
        async function getID() {
            const resp = await fetch(
                `http://www.omdbapi.com/?t=${Title}&type=movie&plot=full&apikey=d254f211`
            );
            setId(await resp.json());
        }
        getID();
    }, [])
 
    return (
        <>     
        <PosterContainer key={index} >
        
         <h3>{Title}</h3> 
          <Link href={`/movieDeets/${id}`}>         
           <img src={Poster} 
           alt={Title} 
           index={imdbID}                           
           />         
           </Link>              
           {/* <div>{JSON.stringify(id)}</div> */}
        </PosterContainer>               
        </>
        
    )
    
}

