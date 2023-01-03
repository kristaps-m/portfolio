const key: string = "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";

export const getContributions = async (username: string) => {
  const headers = {
    Authorization: `bearer ${key}`,
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
