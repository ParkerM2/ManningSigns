import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const Product = ( {product, onAddToCart} ) => {
    // import styles from material ui at styles.js
    const classes = useStyles();


    return (
        <>
        <CssBaseline />
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.seo.title}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted_with_code}
                    </Typography>
                </div>
                <Typography variant="h6" color="textSecondary">
                        {product.seo.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
            </Card>
        </>
    )
}

export default Product
