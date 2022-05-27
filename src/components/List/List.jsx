import React, {useState, useEffect, createRef} from "react";
import { Box, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Slider, CircularProgress } from "@material-ui/core";
import useStyles from './styles';
import PlaceDetails from "../PlaceDetails/PlaceDetails"
 
const List = ({places , childClicked, isLoading, type, setType, rating, setRating}) => {

    const classes = useStyles();
    const[elRefs, setElRefs] = useState([]);

    useEffect(()=>{
        const refs = Array(places?.length).fill().map((_, i)=> elRefs[i]|| createRef());

        setElRefs(refs);
    }, [places])
    return(
       <Box className={classes.container}>
            <Typography variant="h6" textAlign="center">Restaurant, Hotels and Entertainment</Typography>
            { isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size= "5rem"/>
                </div>
               
            ) : (
            <>
           <Box display="flex" justifyContent="center" margin="25px">
            <Box sx={{ width: 150 }}>
                <InputLabel>Category</InputLabel>
                <FormControl className={classes.FormControl}>    
                    <Select value={type} onChange={(e)=> setType(e.target.value)}>
                        <MenuItem value='restaurants'>Restaurants</MenuItem>
                        <MenuItem value='hotels'>Hotels</MenuItem>
                        <MenuItem value='attractions'>Entertainment</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <FormControl className={classes.FormControl}>
                <Box sx={{ width: 150 }}>
                <InputLabel className={classes.ratingLabel}>Minimum Rating</InputLabel>
                    <Slider
                    onChange={(e) => setRating(e.target.value)}
                    className={classes.ratingSlider}
                    defaultValue={1}
                    valueLabelDisplay="auto"
                    step={1}
                    min={1}
                    max={5}
                    />
                </Box>
            </FormControl>
           </Box>
           <Grid container spacing={3} className={classes.list}>
               {places?.map((place, i)=>(
                   <Grid  item key={i} xs={12}>
                       <PlaceDetails 
                            place={place}
                            selected={Number(childClicked)===i}
                            refProps={elRefs[i]}/>
                   </Grid>
               ))}
           </Grid>
        </>
            )}
            
       </Box>
       
    )
};
 
export default List;