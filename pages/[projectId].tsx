import styles from '../styles/Home.module.css'
import * as React from 'react';
import { GetServerSideProps, NextPage, NextPageContext } from "next";
import { getContributions2 } from '../src/lib/github/index2';
import { getContributions } from '../src/lib/github';
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Toolbar, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InfoIcon from "@mui/icons-material/Info";
import * as allInterfaces from '../src/interfaces';
//import styled from "styled-components";
// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

export async function getServerSideProps(context: { params: { projectId: string; }; }) {

  const projectId = context?.params?.projectId
  // const data = await getContributions2('kristaps-m', `${projectId}`);
  const data = await getContributions('kristaps-m');
  // console.log("BEFORE ----------------------------------");
  // //console.log(context)
  // console.log(projectId,"---THIS IS PROJECT ID");
  // console.log("DATA---",data, "---DATA");
  // console.log("BEFORE ----------------------------------");

  if(!projectId){
    return {redirect:{destination: '/'}}
  }

  return {
    props: {
      projectId: projectId as string,
      username: data.data.user.name,
      totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
      avatarUrl: data.data.user.avatarUrl,
      getTheThingWeNeed: data.data.user.repositories.nodes,
    },
  }
}

function Copyright({ url }: allInterfaces.Url) {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href={url}>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1];

const theme = createTheme();

const Home: NextPage<allInterfaces.projectIdProps> = (props) => {

  let dataFromGitHub: allInterfaces.projectIdFilteredData[] = [];

  //console.log(props.getTheThingWeNeed);
  // https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio/README.md
  
  for (let index = 0; index < props.getTheThingWeNeed.length; index++) {
    if(props.getTheThingWeNeed[index].object.entries.length > 0) {
      //console.log(props.getTheThingWeNeed[index], "\n NODES thig we need");
      let test = props.getTheThingWeNeed[index].object.entries;
      let oneRepoObject = {
        repoName:'',
        repoGitUrl: '',
        ymlText: '',
        bigPicUrl:'',
        portfReadMeUrl:'',
        portfR_M_Text:'',
      };
      oneRepoObject['repoName'] = props.getTheThingWeNeed[index].name;
      oneRepoObject['repoGitUrl'] = props.getTheThingWeNeed[index].url;
      oneRepoObject['bigPicUrl'] = `https://raw.githubusercontent.com/kristaps-m/${oneRepoObject['repoName']}/master/portfolio/cover-image.png`
      oneRepoObject['portfReadMeUrl'] = `https://raw.githubusercontent.com/kristaps-m/${oneRepoObject['repoName']}/master/portfolio/README.md`

      for (let j = 0; j < test.length; j++) {
        if(test[j].name === "portfolio.yml" && oneRepoObject['repoName'] === props.projectId){
          oneRepoObject['ymlText'] = test[j].object.text;          
          console.log(props.getTheThingWeNeed[index]);
          //console.log(oneRepoObject)
          dataFromGitHub.push(oneRepoObject); // test[j].object.text
        }
        else if(test[j].name === "portfolio"){
          let superDeep = test[j].object.entries;
          for (let omg = 0; omg < superDeep.length; omg++) {
            if(superDeep[omg].name === "README.md"){
              oneRepoObject['portfR_M_Text'] =superDeep[omg].object.text;
            }
          }
        }
      }
    }
  }

  console.log(dataFromGitHub[0].portfR_M_Text);
  console.log(props.projectId, "This is props.projectId");
  return (
    // <div className={styles.container}>
    //   {props.projectId}
    //   <p>THIS IS LINK TO GIT HUB ....<a href={theListOfTexts[0].repoGitUrl}>{theListOfTexts[0].repoName}</a></p>
    //   <div>
    //     <img src={theListOfTexts[0].bigPicUrl} alt={props.projectId}></img>
    //   </div>
    //   <h3>Description</h3>
    //   <p>{theListOfTexts[0].portfR_M_Text}</p>
    // </div>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <InfoIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Made by {props.username}
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {props.projectId}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              {dataFromGitHub[0].portfR_M_Text}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" href={dataFromGitHub[0].repoGitUrl}>
                Go to project GitHub
              </Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* CARD */}
          <Box
            sx={{
              width: 600,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: 0.9,
              },
            }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  // 16:9
                  pt: "10%",
                }}
                image={dataFromGitHub[0].bigPicUrl}
                alt={props.projectId}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Box>

          {/* End hero unit */}
          {/* <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={theListOfTexts[0].bigPicUrl}
                    alt={props.projectId}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid> */}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {props.username}
        </Typography>
        <Copyright url={dataFromGitHub[0].repoGitUrl}/>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Home;