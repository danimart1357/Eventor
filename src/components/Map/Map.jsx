
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Box} from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from "./styles";
 
const Map = ({setBounds, setCoordinates, coordinates}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return(
        <Box sx={{ height: '85vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={50}
                options={''}
                onChange={(e)=>{
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}>
            </GoogleMapReact>
        </Box>
    )
};
 
export default Map;