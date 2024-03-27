// Fetch content by page
type Header = {
    'Content-Type': string,
    'Api-Key': string,
    'Umb-Project-Alias': string
}

async function fetchAPI(query: string, { variables }: any = {}) {
    const res = await fetch("https://graphql.umbraco.io", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Api-Key': process.env.UMBRACO_API_KEY,
            'Umb-Project-Alias': process.env.UMBRACO_PROJECT_ALIAS,
        } as Header,
        body: JSON.stringify({
            query,
            variables
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
            crops {
                width
                height
            }
        }
        }
    }
}
`);
    return data.content;
}