import GoogleMaps from 'simple-react-google-maps';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { Typography, Card, CardActions, CardContent, CardHeader, Grid, CardMedia, Button, } from '@material-ui/core';
import useStyles from '../Home/styles';
import backgroundImage from '../../assets/location.png'

const data = {
    title: 'Manning Signs Location',
    description: 'Address: 881 S Raceway Rd, Greenville, MS 38703',
    buttonText: 'View on Google Maps',
    buttonVariant: 'outlined',
    backgroundImage: backgroundImage,
    url: "https://www.google.com/maps/dir//manning+signs+greenville+ms+google+maps/@31.8701655,-98.8938294,6z/data=!4m8!4m7!1m0!1m5!1m1!1s0x862becf6f2c61895:0x23b56afddb407098!2m2!1d-91.0072069!2d33.3928269",
};


const Location = () => {
    const classes = useStyles();
    return (
        <>
    <CssBaseline />
    <br></br>
        <Container maxWidth="lg" alignContent="center">
        <Grid container spacing={5} alignItems="center">
            <Grid item key={data.title} xs={12}  md={6} lg={8}>
                <Card className={classes.root}>
                <CardHeader
                  title={data.title}
                  subheader={data.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardMedia 
                    component="img"
                    alt={data.title}
                    height="300"
                    src={data.backgroundImage}
                    title={data.title}
                />
                <CardContent>
                    <Typography>
                        {data.description}   
                    </Typography>
                </CardContent>
                <CardActions>
                  <Button fullWidth component={Link} to={data.url} variant="outlined" color="primary.main">
                    {data.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
        </Grid>
    </Container>
    </>
)

}

export default Location;