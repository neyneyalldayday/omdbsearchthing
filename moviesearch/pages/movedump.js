

export default function MovieDump({Title, index, Poster, Plot}) {
   
    return (
        <>
       <ul key={index}>
           <h3>{Title}</h3>
           <img src={Poster} 
           alt={Title}
           plot={Plot}
           />                      
       </ul>
        </>
    )
}

