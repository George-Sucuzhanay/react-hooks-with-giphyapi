import axios from "axios";

export async function Constants(){
    const Result = await axios.get('https://api.giphy.com/v1/gifs/random?api_key=HGm6K3GnPZQ1KJe8J6iZzSOAQgFvHzJM&tag=&rating=g')
    .then(({ data }) => {
        return data;
      });
    return Result;
    
}