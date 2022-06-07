import axios from 'axios';


class ArtistServices{

    async getAllArtist(){
      const response = await axios.get("http://localhost:5000/api/artists");
      return response.data;
    }

}

export const artistObj = new ArtistServices();