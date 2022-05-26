import React, {useState} from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import useStyles from './styles';
import PlaceDetails from "../PlaceDetails/PlaceDetails"

const List = () => {
    const[type, setType] = useState('restaurants');
    const[rating, setRating] = useState('');
    const classes = useStyles();
    const places = [
        {name:'Pizza Hut'},
        {name:'Dominoes'},
        {name:'Crinitis'},
        {name:'Maccas'},
        {name:'KFC'},
        {name:'Subway'},
        {name:'Chatime'},
        {name:'Rolld'},
        {name:'Red Rooster'},
    ]
    return(
       <div className={classes.container}>
           <Typography variant="h4">Restaurant, Hotels and Entertainment around you!</Typography>
           <FormControl className={classes.FormControl}>
               <InputLabel>Type</InputLabel>
               <Select value={type} onChange={(e)=> setType(e.target.value)}>
                   <MenuItem value='restaurants'>Restaurants</MenuItem>
                   <MenuItem value='hotels'>Hotels</MenuItem>
                   <MenuItem value='entertainment'>Entertainment</MenuItem>
               </Select>
           </FormControl>
           <FormControl className={classes.FormControl}>
               <InputLabel>Rating</InputLabel>
               <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                   <MenuItem value={0}>All</MenuItem>
                   <MenuItem value={3}>Above 3</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                   <MenuItem value={4.5}>Above 4.5</MenuItem>
               </Select>
           </FormControl>
           <Grid container spacing={3} className={classes.list}>
               {places?.map((place, i)=>(
                   <Grid item key={i} xs={12}>
                       <PlaceDetails place={place}/>
                   </Grid>
               ))}
           </Grid>

       </div>
    )
};

export default List;