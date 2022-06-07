import axios from 'axios';


class SongServices{

    async getAllSongs(){
      const response = await axios.get("http://localhost:5000/api/songs");
      return response.data;
    }
}

export const songObj = new SongServices();