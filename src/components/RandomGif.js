import { useState, useEffect } from 'react';
import { Constants } from '../services/Constants';
// import Gif from './Gif';

function RandomGif(){
    const [gifs, setGifs] = useState([]);
    const fetchData = async () => {
        try {
          const response = await Constants();
          setGifs(response.data.images.original.url);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData)

    useEffect(() => {
      fetchData();
    }, [])
    
    return(
        <div>
            <img alt="random gif" src={gifs} />
            <br></br>
            <button onClick={fetchData}>Get New Gif</button>
        </div>
    )
}
export default RandomGif;