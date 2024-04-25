import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function TravelCard(props) {
  return (
    <Card sx={{ maxWidth: 1/4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="320"
          image={props.img_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.deleteItem}>
          Borrar
        </Button>
      </CardActions>
    </Card>
  );
}
