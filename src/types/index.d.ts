export interface IDataFromWP {
    id: string;
    slug: string;
    title: string;
    content: string;
    featuredImage: {
        node: {
            id: string;
            uri: string;
            sourceUrl: string;
        }
    }
}
