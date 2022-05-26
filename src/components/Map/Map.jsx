
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Box} from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from "./styles";
 
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { 
        lat:0, 
        lng:0 
    };
    return(
        <Box sx={{ height: '85vh', width: '100%'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCBJhM-TytFRvhzMYMFsuKTf4-jN0FMVw0" }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={50}
                options={''}
                onChange={''}
                onChildClick={''}>
            </GoogleMapReact>
        </Box>
    )
};
 
export default Map;