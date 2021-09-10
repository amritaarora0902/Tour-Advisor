import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  mapContainer: {
    height: '75vh', width: '100%',
    }
    
}));


const Map = () => {
    const classes = useStyles();
    const coordinates = {lat:0, lng:0};

    return (
        <div className={classes.mapContainer}>
             <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyAgHVLlOlIvuig21I1jc49Ia1IHPKJE3aU' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50,50,50,50]}
            options={''}
            onChange={''}
            onChildClick={''}
             >  


        </GoogleMapReact> 
        </div>
    );
}

export default Map;
