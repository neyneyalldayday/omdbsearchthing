import styled from 'styled-components'
import { useState, useEffect } from 'react';


// i used styled components for this section just to keep track of the stying of this specific component
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

const DetailsContainer = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  max-width: 400px;
`;

const Dtitle = styled.h3`
  text-decoration: underline;
`;

const Details = styled.div`
   font-style: italic;
    font-weight: bold;
`;

// making an api call based off the current title that is served up in the card
//and changing the data every time the title changes
export default function MovieDump({Title, index, Poster, imdbID}) {  
    
    const [id, setId] = useState([]);    

    useEffect(() => {
        async function getID() {
            const resp = await fetch(
                `https://www.omdbapi.com/?t=${Title}&type=movie&plot=full&apikey=d254f211`
            );
            setId(await resp.json());
        }
        getID();
    }, [Title])

   
 // my thought was to attatch the details to the component so that it flows along with the cards dynamically
    return (
        <>     
        <PosterContainer key={index} >        
         <h3>{Title}</h3>                
           <img src={Poster} 
           alt={Title} 
           index={imdbID}                           
           />                     
           <DetailsContainer> 
             <Dtitle>Details</Dtitle>            
             <Details>{JSON.stringify(id.Plot)}</Details>            
           </DetailsContainer>          
        </PosterContainer>               
        </>
        
    )
    
}

