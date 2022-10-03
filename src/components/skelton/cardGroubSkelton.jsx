import React from 'react';
import { Grid, Skeleton, Stack } from "@mui/material";
import CardSkelton from './productCardSkelton';
const ProductCardSkeltonGroup = () => {
    return (
        <Grid container>
            <CardSkelton/> 
            <CardSkelton/>
            <CardSkelton/>
        </Grid>
    );
};

export default ProductCardSkeltonGroup;