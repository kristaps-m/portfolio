import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ProjectCard from '../src/components/ProjectCard';
import {getContributions} from '../src/lib/github/index';
import {getContributions2} from '../src/lib/github/index2';
import GitHubAcitvity from '../src/lib/github/activity/GitHubActivity';
import { NextPage } from "next";
import { color } from '@mui/system';
//import styled from "styled-components";
import { GithubContributions } from "react-github-graph";
import GitHubCalendar from 'react-github-calendar';
import axios, { AxiosError } from 'axios';
import * as cheerio from 'cheerio';
import { forEachChild } from 'typescript';
import { type } from 'os';

export async function getServerSideProps() {
  let data = await getContributions('kristaps-m');
  //const data2 = await getContributions2('kristaps-m', "ycombinator-data-scraper");
  //console.log(data);
  //console.log(data2);
  // console.log(data, "This is data");
  // const nodesList = data.data.user.repositories.nodes;

  // for (let index = 0; index < nodesList.length; index++) {
  //   listOfRepoNames.push(nodesList[index].name);
  // }

  return {
    props: {username: data.data.user.name,
    totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
    avatarUrl: data.data.user.avatarUrl,
    projectUrl: data.data.user.repositories.nodes,
    theRepoName: data.data.user.repositories.nodes,
    getTheThingWeNeed: data.data.user.repositories.nodes,
    //testData2: data2.data.repository.object.entries
}, // will be passed to the page component as props
  }
}

interface Props {
  username: string;
  totalContributions: number
  avatarUrl: string
  projectUrl: any
  theRepoName: any[]
  getTheThingWeNeed: any[]
  //testData2: any[]
}

let listOfRepoNames: string[] = [];

// async function testGetNames(){
//   let listOfRepoNames: string[] = [];

//   const data = await getContributions('kristaps-m');
//   console.log(data, "This is data");
//   const nodesList = data.data.user.repositories.nodes;

//   for (let index = 0; index < nodesList.length; index++) {
//     listOfRepoNames.push(nodesList[index].name);
//   }

//   return listOfRepoNames;
// }
// let listOfRepoNames = testGetNames();

// const asyncFilter = async (arr:any, predicate:any) => Promise.all(arr.map(predicate))
// 	.then((results) => arr.filter((_v:any, index:any) => results[index]));


// console.log(asyncFilter(listOfRepoNames, ""), "This is list of names of repositories");
// function fetchPage(url: string): Promise<string | undefined> {
//   const HTMLData = axios
//     .get(url)
//     .then(res => res.data)
//     .catch((error: AxiosError) => {
//       console.error(`There was an error with ${error.config.url}.`);
//       console.error(error.toJSON());
//     });

//   return HTMLData;
// }

let theUrl = "https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio.yml";
let theUrl2 = "https://raw.githubusercontent.com/kristaps-m/Python/master/portfolio.yml";

// function testYolo(urlIn:any){
//   let listOfData: any[] = [];

//   for (let index = 0; index < urlIn.length; index++) {
//     const theName = urlIn[index].name;
//     theUrl = `https://raw.githubusercontent.com/kristaps-m/${theName}/master/portfolio.yml`;
//     axios.get(theUrl)
//     .then((response) => {
//         if(response.status === 200) {
//         const html = response.data;
//             //const giveMeHtml = cheerio.load(html); 
//             console.log("This should be html \n",html.toString());
//             listOfData.push(html.toString());            
//             //return html;
//     }
//     }, (error) => console.log(error) );
//   }

//   return listOfData;
// }

// axios.get(theUrl)
//     .then((response) => {
//         if(response.status === 200) {
//         const html = response.data;
//             const giveMeHtml = cheerio.load(html); 
//             console.log("This should be html \n",html);
//     }
//     }, (error) => console.log(error) );


// async function getTEST(){

//   const data = await getContributions('kristaps-m');

//   let arrayOfNodes = data.data.user.repositories.nodes;

//   for (let index = 0; index < arrayOfNodes.length; index++) {
//     const element = arrayOfNodes[index];

//     listOfUrls.push(element.url);
    
//   }

//   return listOfUrls;
// }


const Home: NextPage<Props> = (props) => {
  let listOfUrls: string[] = [];

  for (let index = 0; index < props.projectUrl.length; index++) {
    const element = props.projectUrl[index];

    listOfUrls.push(element.url);  
  }

  for (let index = 0; index < props.theRepoName.length; index++) {
    listOfRepoNames.push(props.theRepoName[index].name);
  }

  // The ultimate filter:
  let theListOfTexts: any = [];

  for (let index = 0; index < props.getTheThingWeNeed.length; index++) {
    if(props.getTheThingWeNeed[index].object.entries.length > 0) {
      let test = props.getTheThingWeNeed[index].object.entries;
      for (let j = 0; j < test.length; j++) {
        if(test[j].name === "portfolio.yml"){
          theListOfTexts.push(test[j].object.text);
        }
      }
    }
  }

  theListOfTexts.push("Test added applle is my goeat");
  console.log(theListOfTexts);
  console.log(theListOfTexts[0],typeof theListOfTexts[0]);

  //const dataFromYamlFile = testYolo(props.theRepoName)
  //console.log("This is data from dataFromYamlFile \n", dataFromYamlFile, dataFromYamlFile.length);
  
// https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio.yml

  const smallP_L = "https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio/image-small.png";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={props.avatarUrl} alt="Avatar Image :)"  width={200}/>
        <img src={smallP_L} alt="Avatar Image :)"  width={200}/>
        {/* <h1>{props.projectUrl}</h1> */}
        <h3>This is text from yaml file: {theListOfTexts[0]}</h3>
        <h3>{listOfUrls[0]}</h3>
        <h3>This is name of repo: {listOfRepoNames[0]}</h3>
        <h1 className={styles.title}>Name of Developer: 
          {props.username}
        </h1>
        <h2 style={{backgroundColor: 'lightblue', color: 'white'}}>Total Contributions: {props.totalContributions}</h2>
      <div style={{backgroundColor: 'lightgray'}}>
        <h1>This is random activity</h1>      
        <GitHubAcitvity/>
      </div>
        <br/>
      <div style={{backgroundColor: 'lightgray'}}>
        <h1>This is LEGIT activity</h1>    
        <p style={{color: 'darkblue'}}><a href="https://grubersjoe.github.io/react-github-calendar/?ref=madewithreactjs.com">https://grubersjoe.github.io/react-github-calendar/?ref=madewithreactjs.com</a></p>  
        <GitHubCalendar username="kristaps-m" />
      </div>
        <br/>
      <div style={{backgroundColor: 'lightgray'}}>
        <h1>This is LEGIT activity #2</h1>    
        <p style={{color: 'darkblue'}}><a href="https://www.npmjs.com/package/react-github-graph">https://www.npmjs.com/package/react-github-graph</a></p>  
        <GithubContributions username="{kristaps-m}" />
      </div>


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>
        <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
        </Stack>
        {/* ------------------------CARD---------------------  */}       
      <ProjectCard textFromYaml={theListOfTexts[0]} smallPictureLink={smallP_L}></ProjectCard>

        {/* CARD  textFromYaml = {{theListOfTexts[0]}}*/}
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;