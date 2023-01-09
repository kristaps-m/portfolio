const { REACT_APP_GITHUB_TOKEN } = process.env;

export const getContributions = async (username: string) => {
  const headers = {
    Authorization: `bearer ${REACT_APP_GITHUB_TOKEN}`,
  };
  const body = {
    query: `query {
              user(login: "${username}") {
                name
                login
                avatarUrl
                contributionsCollection {
                  contributionCalendar {
                    colors
                    totalContributions
                    weeks {
                      contributionDays {
                        color
                        contributionCount
                        date
                        weekday
                      }
                      firstDay
                    }
                  }
                }
                repositories(privacy:PUBLIC, first: 100){      						
                  nodes {                    
                    name
                    url
                    visibility
                      object(expression: "HEAD:") {
										        ... on Tree {
                      entries {
                        name
                        object {
                          ... on Tree{
                            entries{
                              name
                       				object{
                                ... on Blob{
                                  text
                                }
                              }
                            }
                          }
                          ... on Blob {
                            text
                          }
                        }
                      }
                    }
										}
                    languages(first: 5)
                    {
                      edges {
                        node {
                          name
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
