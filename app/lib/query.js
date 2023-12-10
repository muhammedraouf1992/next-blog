import graphqlRequest from "./graphqlRequest";

export async function getAllPosts() {
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
export async function getSinglePost(slug) {
  const query = {
    query: `
  query NewQuery {
    post(id: "${slug}", idType: SLUG) {
      title
      slug
      excerpt
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
    }
  }
  `,
  };
  const resJson = await graphqlRequest(query);
  const singlePost = await resJson.data.post;
  return singlePost;
}
