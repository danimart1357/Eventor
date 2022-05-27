
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Box} from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from "./styles";
import { useState } from "react";
 
const Map = ({setBounds, setCoordinates, coordinates, places, setChildClicked}) => {
    const classes = useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    

    return(
        <Box sx={{ height: '85vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCBJhM-TytFRvhzMYMFsuKTf4-jN0FMVw0" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={['50', '50', '50', '50',]}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child)=>setChildClicked(child)}>
                    {places?.map((place,i)=>(
                        <div
                            className={classes.markerContainer}
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}
                        >
                            {
                                !isDesktop? (
                                    <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                                ) : (
                                    <Paper elevation={3} className={classes.paper}>
                                        <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                                            {place.name}
                                        </Typography>
                                        <img 
                                            className={classes.pointer}
                                            src={place.photo? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                                            alt={place.name}
                                        />
                                        <Rating size="small" value={Number(place.rating)} readOnly/>
                                    </Paper>
                                )
                            }
                         </div>
                    ))}
            </GoogleMapReact>
        </Box>
    )
};
 
export default Map;