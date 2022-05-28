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
              'X-RapidAPI-Key': '3c0c7eb614msh99a674013e1d384p14d1d3jsnfcfa391d31f7'
            }
          });
        return data;
    } catch(error) {
        console.log(error);
    }
}