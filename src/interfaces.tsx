export interface Url {
  url: string;
}

export interface projectIdProps {
  projectId: string;
  username: string;
  totalContributions: number;
  avatarUrl: string;
  getTheThingWeNeed: any[];
}

export interface projectIdFilteredData {
  repoName: string;
  repoGitUrl: string;
  ymlText: string;
  bigPicUrl: string;
  portfReadMeUrl: string;
  portfR_M_Text: string;
}

export interface ProjectCardContent {
  textFromYaml: string;
  smallPictureLink: string;
  projectName: string;
  listOfProgramLangs: object[];
}

export interface IndexDataProps {
  username: string;
  totalContributions: number;
  avatarUrl: string;
  getTheThingWeNeed: getTheThingWeNeedInterface[];
  listOfProgramLangs: object[];
}

interface getTheThingWeNeedInterface {
  languages: { edges: theEdges[]; name: string };
  name: string;
  object: {
    entries: entriesInterface[];
  };
  url: string;
  visibility: string;
}

interface theEdges{
  node: {
    name: string;
  }
}

interface entriesInterface {
  object: {
    name: string;
    object: {
      name: string;
    };
  };
}

export interface projectCardItem {
  progLangs: object[];
  ymlText: string;
  smallPicUrl: string;
  repoName: string;
}
