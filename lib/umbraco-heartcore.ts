// Fetch content by page
type Header = {
  "Content-Type": string;
  "Api-Key": string;
  "Umb-Project-Alias": string;
};

async function fetchAPI(query: string, { variables }: any = {}) {
  const res = await fetch("https://graphql.umbraco.io", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Api-Key": process.env.UMBRACO_API_KEY,
      "Umb-Project-Alias": process.env.UMBRACO_PROJECT_ALIAS,
    } as Header,
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getHomePage() {
  const data = await fetchAPI(`
    {
        content(url: "/homepage/") {
                name
                ... on Home {
                title
                heroText
                bodyCopy
                exploreCopy
                image{
                url
                  ... on Image{
                    umbracoWidth
                    umbracoHeight
                  }
                }
                 blocks{
         content{
            ... on TwoColumnBlock{
              contentTypeAlias
              __typename
              col1
              col2
            }
          ... on ChatBlock {
            title
             bodyCopy
            cta {
              url
              type
              name
            }
            ctaText
          }
          }
        }
        }
    }
}
`);
  return data.content;
}

export async function getContactPage() {
  const data = await fetchAPI(`
{
    content(url: "/homepage/contact") {
        name
        ... on Contact {
        pageTitle
        pageIntro
        sectionTitle
        bodyCopy
        image{
            url
            ... on Image{
            umbracoWidth
            umbracoHeight
        }
        }
        }
    }
}
`);
  return data.content;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      allPost {
        edges {
          node {
            slug:url
          }
        }
      }
    }
  `);
  return data.allPost.edges.map((x: any) => x.node);
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query ($preview: Boolean) {
      allPost(first: 20, orderBy: [date_DESC], preview: $preview) {
        edges {
          node {
            slug:url
            summaryTitle
            date
            readTime
            tags
            coverImage {
              url(width: 2000, height: 1000, cropMode: CROP, upscale: true)
            }
        }
      }
    }
  }
  `
  );
  return data.allPost.edges.map((e: any) => e.node);
}

export async function getPost(slug: any) {
  const data = await fetchAPI(
    `
      query PostBySlug {
            post(url: "/posts/${slug}") {
              slug:url
              title:name
              authorName
              content:bodyText
              date
                          readTime

              tags
              coverImage {
                  url(width: 2000, height: 1000, cropMode: CROP, upscale: true)
              }
            }
      }
  `,
    {
      variables: {
        slug: `/posts/${slug}/`,
      },
    }
  );
  return {
    post: data.post
  };
}


