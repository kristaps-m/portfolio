import styles from '../styles/Home.module.css'
import * as React from 'react';
import { GetServerSideProps, NextPage, NextPageContext } from "next";
//import styled from "styled-components";

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

  const projectId = context?.params?.projectId

  if(!projectId){
    return {redirect:{destination: '/'}}
  }

  return {
    props: {
      projectId: projectId as string,
    },
  }
}

interface Props {
  projectId: string
}



const Home: NextPage<Props> = (props) => {
    
  return (
    <div className={styles.container}>
      {JSON.stringify(props.projectId)}
    </div>
  )
}

export default Home;