import styles from '../styles/Home.module.css'
import * as React from 'react';
import { GetServerSideProps, NextPage, NextPageContext } from "next";
import { getContributions2 } from '../src/lib/github/index2';
import { getContributions } from '../src/lib/github';
//import styled from "styled-components";
// export const getServerSideProps: GetServerSideProps<Props> = async (context) => {

export async function getServerSideProps(context: { params: { projectId: string; }; }) {

  const projectId = context?.params?.projectId
  // const data = await getContributions2('kristaps-m', `${projectId}`);
  const data = await getContributions('kristaps-m');
  console.log("BEFORE ----------------------------------");
  //console.log(context)
  console.log(projectId,"---THIS IS PROJECT ID");
  console.log("DATA---",data, "---DATA");
  console.log("BEFORE ----------------------------------");

  if(!projectId){
    return {redirect:{destination: '/'}}
  }

  return {
    props: {
      projectId: projectId as string,
      totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
      avatarUrl: data.data.user.avatarUrl,
      getTheThingWeNeed: data.data.user.repositories.nodes,
    },
  }
}

interface Props {
  projectId: string
  totalContributions: number
  avatarUrl: string
  getTheThingWeNeed: any[]
}

const Home: NextPage<Props> = (props) => {

  let theListOfTexts: any = [];
  console.log("dasdadadsa");
  //console.log(props.getTheThingWeNeed);
  // https://raw.githubusercontent.com/kristaps-m/ycombinator-data-scraper/master/portfolio/README.md
  
  for (let index = 0; index < props.getTheThingWeNeed.length; index++) {
    if(props.getTheThingWeNeed[index].object.entries.length > 0) {
      //console.log(props.getTheThingWeNeed[index], "\n NODES thig we need");
      let test = props.getTheThingWeNeed[index].object.entries;
      let oneRepoObject = {
        repoName:'',
        ymlText: '',
        bigPicUrl:'',
        portfReadMeUrl:'',
        portfR_M_Text:'',
        progLangs: [],
      };
      oneRepoObject['repoName'] = props.getTheThingWeNeed[index].name;
      oneRepoObject['bigPicUrl'] = `https://raw.githubusercontent.com/kristaps-m/${oneRepoObject['repoName']}/master/portfolio/cover-image.png`
      oneRepoObject['portfReadMeUrl'] = `https://raw.githubusercontent.com/kristaps-m/${oneRepoObject['repoName']}/master/portfolio/README.md`
      oneRepoObject['progLangs'] = props.getTheThingWeNeed[index].languages.edges

      for (let j = 0; j < test.length; j++) {
        if(test[j].name === "portfolio.yml" && oneRepoObject['repoName'] === props.projectId){
          oneRepoObject['ymlText'] = test[j].object.text;          
          console.log(props.getTheThingWeNeed[index]);
          //console.log(oneRepoObject)
          theListOfTexts.push(oneRepoObject); // test[j].object.text
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

  console.log(theListOfTexts[0].portfR_M_Text);
  console.log(props.projectId, "This is props.projectId");
  return (
    <div className={styles.container}>
      {JSON.stringify(props.projectId)}
      <div>
        <img src="https://picsum.photos/200/300" alt="Girl in a jacket" width="200"></img>
        <img src={props.avatarUrl} alt="Girl in a jacket" width="200"></img>
      </div>
      <div>TOTAL CONTRIBUTIONS = {props.totalContributions}</div>
      <div>
        <img src={theListOfTexts[0].bigPicUrl} alt={props.projectId}></img>
        <p>{theListOfTexts[0].bigPicUrl}</p>
      </div>
      <h3>{theListOfTexts[0].portfReadMeUrl}</h3>
      <p>{theListOfTexts[0].portfR_M_Text}</p>
    </div>
  )
}

export default Home;