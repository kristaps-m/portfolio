import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, CardHeader, Container, Grid, IconButton, Link} from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';
import SeeMorePage from './SeeMorePage';
import { BrowserRouter, Route } from 'react-router-dom';
// import IconPython from 'react-devicon/python/plain';
//import IconAmazonwebservices from 'react-devicon/amazonwebservices/plain-wordmark';

// image = "/static/images/cards/contemplative-reptile.jpg"

interface CardContent{
  textFromYaml: string
  smallPictureLink: string
  projectName: string
  listOfProgramLangs: object[]
}

function clickTest(): void{
  console.log("IT IS CLICKED!")
}

export default function MediaCard({textFromYaml,smallPictureLink,projectName,listOfProgramLangs} : CardContent) {
  let listWihtIcons: any = {
   Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
  Dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
  'ASP.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original-wordmark.svg',
  Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
  'Objective-C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/objectivec/objectivec-plain.svg',
  CMake: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
  Ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
  Starlark: '',
  Cplusplus: 'stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css'};

  // if(listOfProgramLangs.length < 6){
  //   listOfProgramLangs.push({node: {name: 'JavaScript',}});
  // }

  let testNamesList: string[] = ['Python', 'JavaScript', 'Dart','C#'];

  function goGo() {
      const openInNewTab = (url: string | URL | undefined) => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      return (
        <div>
          <button onClick={() => openInNewTab('https://google.com')}>
            Open google
          </button>
        </div>
      );
    };

  console.log(smallPictureLink, "Shoule be img link");

  return (
    <Card sx={{ maxWidth: 345 }} style={{backgroundColor: 'pink'}}>
      <Container>
        <Grid container>
          {listOfProgramLangs.map((item, index) =>(
            <Grid key={index} xs={1} md={1} lg={2}>
              {/* {item.node.name} */}
              <img src={listWihtIcons[item.node.name]} width={55} alt={projectName}/>
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
        <Link href="https://github.com/kristaps-m" target="_blank">
            Go GitHub
        </Link>
        {/* <Link href='/:1' target="_blank" component={SeeMorePage}/> */}
        <Button style={{backgroundColor: 'white'}} size="small" onClick={() => goGo()}>
          SEE MORE
            {/* <Route path='/' component={SeeMorePage}/>           */}
          
        </Button>
      </CardActions>
    </Card>
  );
}