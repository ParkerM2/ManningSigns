import useStyles from './styles';
import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import vehicleWrap from './../../assets/vehiclewrap.jpg';
import tShirt from './../../assets/tShirt.png';
import outdoorSign from './../../assets/outdoorSign.jpg';



const tiers = [
    {
        title: 'Shirts',
        description: ['Must order 24+',""],
        buttonText: ['Get a Quote', 'View our gallery'],
        buttonVariant: 'contained',
        backgroundImage: tShirt,
        url: ["/quote", "/gallery"]
    },
    {
        title: 'Signs',
        description: ['We offer a large range of custom outdoor Signs and window lettering. Please visit our Gallery for examples!'],
        buttonText: ['Get a Quote', 'View our gallery'],
        buttonVariant: 'contained',
        backgroundImage: outdoorSign,
        url: ["/quote", "/gallery"]
    },
    {
        title: 'Vehicle Wrap',
        description: ["We do full and partial vehicle wraps as well as normal vinyl lettering."],
        buttonText: ['Get a Quote', 'View our gallery'],
        buttonVariant: 'contained',
        backgroundImage: vehicleWrap,
        url: ["/quote", "/gallery"]
  },
];
  const post = {
  title: 'Manning Signs',
  description:
    " We offer a large range of T-Shirt and Sign options! Feel free to contact us for a quote or check out our online store to see whats in stock!",
  image: 'url(https://source.unsplash.com/random)',
  imgText: 'main image description',
  linkText: 'Click here to view our online store!',
};


const HomePage = () => {
    const classes = useStyles();
    
    return ( 
      <>
        <CssBaseline />
      <br></br>
      <Container maxWidth="lg" component="main">
      <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
                </Typography>
                <Button component={Link} to="/shop" variant="contained" color="primary">
                  {post.linkText}
                </Button>
          </div>
        </Grid>
      </Grid>
      </Paper>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12}  md={4}>
                <Card className={classes.root}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                      />
                <CardMedia 
                    component="img"
                    alt={tier.title}
                    height="300"
                    src={tier.backgroundImage}
                    title={tier.title}
                />
                <CardContent>
                  <ul className={classes.ul}>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                    <Button fullWidth component={Link} to={tier.url[0]} variant={tier.buttonVariant} color="primary">
                    {tier.buttonText[0]}
                    </Button>
                </CardActions>
                <CardActions>
                  <Button fullWidth component={Link} to={tier.url[1]} variant={tier.buttonVariant} color="primary">
                    {tier.buttonText[1]}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
    </>
    )
}

export default HomePage;