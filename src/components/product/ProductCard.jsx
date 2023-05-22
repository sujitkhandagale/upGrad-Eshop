import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ProductCard() {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <img src={"https://placehold.co/200"} alt="" />
      </CardContent>
      <CardActions>
        <Button size="small"><Link to={"/products/10"}>Product Name</Link></Button>
      </CardActions>
    </Card>
  );
}