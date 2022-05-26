import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffecbce7a4mshea152e32325d40bp18b415jsn463b0342bc79'
  }
};

export const getPlacesData = async ()=>{
    try {
        const {data:{data}} = await axios.get(URL, options);
        return data;
    } catch(error) {
        console.log(error);
    }
}