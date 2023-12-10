import graphqlRequest from "./graphqlRequest";

export default async function getAllPosts() {
  const query = {
    query: `
    query NewQuery {
        posts {
          nodes {
            slug
            title
            date
            featuredImage {
              node {
                mediaDetails {
                  sizes {
                    sourceUrl
                    width
                    height
                  }
                }
              }
            }
            excerpt(format: RENDERED)
            categories {
              nodes {
                slug
                name
              }
            }
          }
        }
      }
        `,
  };
  const resJson = await graphqlRequest(query);
  const Allposts = await resJson.data.posts;
  return Allposts;
}
