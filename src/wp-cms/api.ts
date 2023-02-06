const API_URL = process.env.WP_API_URL as string;

async function fetchAPI(query: string, {variables}: { variables?: string } = {}) {
    const headers = {'Content-Type': 'application/json'};
    const res = await fetch(API_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({query, variables})
    });
    const json = await res.json();
    if (json.errors) {
        console.log(json.errors);
        console.log('error details', query, variables);
        throw new Error('Failed to fetch API');
    }
    return json.data;
}

export async function getHomePageData() {
    const data = await fetchAPI(
        `
      {
        page(id: "6", idType: DATABASE_ID) {
            id
            slug
            title
            content(format: RENDERED)
            menuOrder
            featuredImage {
              cursor
              node {
                id
                uri
                sourceUrl
              }
            }
        }
      }
    `
    );
    return data?.page;
}
