import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ProjectCard from "../src/components/ProjectCard";
import { getContributions } from "../src/lib/github/index";
//import {getContributions2} from '../src/lib/github/index2';
import { NextPage } from "next";
import GitHubCalendar from "react-github-calendar";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import HireMeCard from "../src/components/HireMeCard";
import * as allInterfaces from "../src/interfaces";
import useMediaQuery from '@mui/material/useMediaQuery';
// import projectId from './[projectId]'

export async function getServerSideProps() {
  let data = await getContributions("kristaps-m");
  //const data2 = await getContributions2('kristaps-m', "ycombinator-data-scraper");
  //console.log(data);
  //console.log(data2);
  // console.log(data, "This is data");
  // const nodesList = data.data.user.repositories.nodes;

  return {
    props: {
      username: data.data.user.name,
      totalContributions:
        data.data.user.contributionsCollection.contributionCalendar
          .totalContributions,
      avatarUrl: data.data.user.avatarUrl,
      getTheThingWeNeed: data.data.user.repositories.nodes,
      listOfProgramLangs: data.data.user.repositories,
      //testData2: data2.data.repository.object.entries
    }, // will be passed to the page component as props
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#9CAFB7",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home: NextPage<allInterfaces.IndexDataProps> = (props) => {
  console.log(props.getTheThingWeNeed);

  // The ultimate filter:
  let listOfStringsForProjectCard = [];

  for (let index = 0; index < props.getTheThingWeNeed.length; index++) {
    if (props.getTheThingWeNeed[index].object.entries.length > 0) {
      //console.log(props.getTheThingWeNeed[index], "\n NODES thig we need");
      let objectEntries: allInterfaces.entriesInterface[] =
        props.getTheThingWeNeed[index].object.entries;
      let oneRepoObject: allInterfaces.oneRepoObjectInterface = {
        repoName: "",
        ymlText: "",
        smallPicUrl: "",
        progLangs: [],
      };
      oneRepoObject["repoName"] = props.getTheThingWeNeed[index].name;
      oneRepoObject[
        "smallPicUrl"
      ] = `https://raw.githubusercontent.com/kristaps-m/${oneRepoObject["repoName"]}/master/portfolio/image-small.png`;
      oneRepoObject["progLangs"] =
        props.getTheThingWeNeed[index].languages.edges;

      for (let j = 0; j < objectEntries.length; j++) {
        if (objectEntries[j].name === "portfolio.yml") {
          oneRepoObject["ymlText"] = objectEntries[j].object.text;

          //console.log(oneRepoObject)
          listOfStringsForProjectCard.push(oneRepoObject); // test[j].object.text
        }
      }
    }
  }

  // https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio.yml

  const smallP_L =
    "https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio/image-small.png";

  /** INCRASE SIZE OF DATA FROM API */
  // const listLen = theListOfTexts.length - 2;
  // for (let index = 0; index < listLen; index++) {
  //   theListOfTexts.push(theListOfTexts[index]);
  // }

  // let test = <>Small Screen!!!!</>;
  let test = (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Item>Item 1</Item>
      <Item>Item 2</Item>
      <Item>Item 3</Item>
    </Stack>
  );
  //const matches = useMediaQuery("(min-width: 600px)");
  const matches = useMediaQuery("(min-width:600px)");

  const a = (
    <>
      <Grid item xs={4}>
        <Item className={styles.title}>{props.username} </Item>
      </Grid>
      <Grid item xs={6}>
        <Item className={styles.description}>
          Total Contributions: {props.totalContributions}
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <img src={props.avatarUrl} alt="Avatar Image :)" width={200} />
        </Item>
      </Grid>
      <Grid item xs={6}>
        <Item>
          <div style={{ backgroundColor: "#ADB993" }}>
            <p style={{ color: "darkblue" }}></p>
            <GitHubCalendar username="kristaps-m" />
          </div>
        </Item>
      </Grid>
    </>
  );

  const b = (
    <>
      {listOfStringsForProjectCard.map(
        (item: allInterfaces.projectCardItem) => (
          <Grid key={item.ymlText} xs={6} md={6} lg={4}>
            <ProjectCard
              textFromYaml={item.ymlText}
              smallPictureLink={item.smallPicUrl}
              projectName={item.repoName}
              listOfProgramLangs={item.progLangs}
            ></ProjectCard>
            <br></br>
          </Grid>
        )
      )}
      <HireMeCard></HireMeCard>
    </>
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <Box sx={{ width: "100%" }}>
            {matches ? (
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {a}
              </Grid>
            ) : (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                {a}
              </Stack>
            )}
          </Box>
          <br></br>
          {/* ------------------------CARD---------------------  */}
          {matches ? (
            <Grid container>{b}</Grid>
          ) : (
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              {b}
            </Stack>
          )}
        </Container>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
