import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// image = "/static/images/cards/contemplative-reptile.jpg"

interface CardContent{
  textFromYaml: string
  smallPictureLink: string
}

export default function MediaCard({textFromYaml,smallPictureLink} : CardContent) {

  console.log(smallPictureLink, "Shoule be img link");
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: 'pink'}}>
      <CardMedia
        component="img"
        height="250" 
        image={smallPictureLink}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards: ... {textFromYaml}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}