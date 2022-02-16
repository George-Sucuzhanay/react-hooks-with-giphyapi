import axios from 'axios';
import { useState, useEffect } from 'react';
// import Gif from './Gif';

function Search(){
    const [gifs, setGifs] = useState([]);
    const [searchWord, setSearchWord] = useState("tech");
    
    useEffect(() => {
        fetchSearchData();
      }, [])

    const fetchSearchData = async () => {
        try {
          const CILENT_SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=HGm6K3GnPZQ1KJe8J6iZzSOAQgFvHzJM&q=${searchWord}&limit=25&offset=0&tag=&rating=g`;
          const response = await axios.get(CILENT_SEARCH_URL);
          const results = response.data.data[0].images.downsized_large.url;
          console.log(results);
          setGifs(results);
          console.log(setGifs);
        } catch (error) {
          console.log(error);
        }
      }

    
    
    return(
        <div>
            <input 
                value={searchWord} 
                onChange={(e) => setSearchWord(e.target.value)}
            />
            <br></br>
            <button onClick={fetchSearchData}>Search</button>
            <br></br>
            <img alt="search query gif" src={gifs} />
            
            <br></br>
        </div>
    )
}
export default Search;