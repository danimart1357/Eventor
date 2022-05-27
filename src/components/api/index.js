import axios from "axios";





export const getPlacesData = async (type, ne, sw)=>{
    try {
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': 'ffecbce7a4mshea152e32325d40bp18b415jsn463b0342bc79'
            }
          });
        return data;
    } catch(error) {
        console.log(error);
    }
}