import { useState, useEffect } from 'react';
import axios from 'axios';
import { CLIENT_URL } from '../services/constants';

function RandomGif(){
    const [gifs, setGifs] = useState([]);
    const fetchData = async () => {
        try {
          const response = await axios.get(CLIENT_URL);
          const { results } = response.data.data.images.fixed_height_small_still.url;
        
          console.log(results);
          setGifs(results);
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
      fetchData();
    }, [])
    
    return(
      
        <img src={gifs}></img>

    )
}
export default RandomGif;