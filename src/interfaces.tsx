export interface Url {
  url: string;
}

export interface projectIdProps {
  projectId: string;
  username: string;
  totalContributions: number;
  avatarUrl: string;
  getTheThingWeNeed: object[];
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
  listOfProgramLangs: edges[];
}

interface getTheThingWeNeedInterface {
  languages: languages;
  name: string;
  object: {
    entries: entriesInterface[];
  };
  url: string;
  visibility: string;
}

interface languages {
  edges: edges[];
}

interface edges{
  node: {
    name: string;
  }
}

export interface entriesInterface {
  name: string;
  object: {
    text: string;
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

export interface oneRepoObjectInterface {
  repoName: string;
  ymlText: string;
  smallPicUrl: string;
  progLangs: edges[];
}

export interface iconsInterface {
  Python: string;
  Dart: string;
  CSS: string;
  HTML: string;
  JavaScript: string;
  TypeScript: string;
  "C#": string;
  "ASP.NET": string;
  Kotlin: string;
  Swift: string;
  "Objective-C": string;
  CMake: string;
  Java: string;
  Ruby: string;
  Starlark: string;
  Cplusplus: string;
}