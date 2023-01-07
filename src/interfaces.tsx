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
  theRepoName: any[];
  getTheThingWeNeed: any[];
  listOfProgramLangs: any[];
}