import React from "react";
import {Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import {LocationOnIcon} from "@material-ui/icons/LocationOn";
import {PhoneIcon} from "@material-ui/icons/Phone";
import {Rating} from "@material-ui/lab/Rating";
import useStyles from "./styles";
const PlaceDetails = ({place}) => {
    const classes= useStyles();
    return(
        <Card elevation={6}>
            <CardMedia 
                style={{height:350}}
                image={place.photo? place.photo.images.large.url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Ffood%2F2022%2Fapr%2F15%2Flisboeta-london-w1-the-custard-tasted-like-bacony-trifle-restaurant-review&psig=AOvVaw3RBL4l4WV28RGWsrf-8ecv&ust=1653639107207000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjUqu_b_PcCFQAAAAAdAAAAABAJ'}
                title={place.name}
            /> 
            <CardContent>
                <Typography gutterBottom variant="h6">{place.name}</Typography>
            </CardContent>
        </Card>
    )
};

export default PlaceDetails;