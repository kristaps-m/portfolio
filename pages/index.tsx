import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ProjectCard from '../src/components/ProjectCard';
import {getContributions} from '../src/lib/github/index';
import GitHubAcitvity from '../src/lib/github/activity/GitHubActivity';
import { NextPage } from "next";
import { color } from '@mui/system';
//import styled from "styled-components";
import { GithubContributions } from "react-github-graph";
import GitHubCalendar from 'react-github-calendar';

export async function getServerSideProps() {
  const data = await getContributions('kristaps-m');
  //console.log(data);
  return {
    props: {username: data.data.user.name,
    totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
    avatarUrl: data.data.user.avatarUrl
}, // will be passed to the page component as props
  }
}

interface Props {
  username: string;
  totalContributions: number
  avatarUrl: string
}

const Home: NextPage<Props> = (props) => {
  const imgLink = props.avatarUrl

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src={props.avatarUrl} alt="Avatar Image :)"  width={200}/>

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
      <ProjectCard ></ProjectCard>    

        {/* CARD */}
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