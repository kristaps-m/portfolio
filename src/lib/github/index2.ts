const { REACT_APP_GITHUB_TOKEN } = process.env;

export const getContributions2 = async (username: string, repoName: string) => {
  const headers = {
    Authorization: `bearer ${REACT_APP_GITHUB_TOKEN}`,
  };
  const body = {
    query: `query {
  repository(owner: ${username}, name: ${repoName}) {
    object(expression: "HEAD:") {
      ... on Tree {
        entries {
          name
          object {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  }
}`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  //console.log("---------TEST-----------");
  //console.log(JSON.stringify(body));
  return data;
};
