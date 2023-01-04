import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Container, Grid, IconButton } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
// import IconPython from 'react-devicon/python/plain';
//import IconAmazonwebservices from 'react-devicon/amazonwebservices/plain-wordmark';

// image = "/static/images/cards/contemplative-reptile.jpg"

interface CardContent{
  textFromYaml: string
  smallPictureLink: string
  projectName: string
  listOfProgramLangs:any[]
}

export default function MediaCard({textFromYaml,smallPictureLink,projectName,listOfProgramLangs} : CardContent) {
  let listWihtIcons: any = {
   Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
  Dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'ASP.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  Kotlin: '',
  Swift: '',
  'Objective-C': '',
  CMake: '',
  Java: '',
  Ruby: '',
  Starlark: ''};

  //listOfProgramLangs.push({node: {name: 'JavaScript',}});

  let testNamesList: string[] = ['Python', 'JavaScript', 'Dart','C#'];

  console.log(smallPictureLink, "Shoule be img link");
  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: 'pink'}}>
      <Container>
        <Grid container>
          {listOfProgramLangs.map((item, index) =>(
            <Grid key={index} xs={1} md={1} lg={3}>
              {/* {item.node.name} */}
              <img src={listWihtIcons[item.node.name]} width={60} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <CardMedia
        component="img"
        height="250" 
        image={smallPictureLink}
        alt={projectName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {textFromYaml}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}