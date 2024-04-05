export type ContactType = {
    bodyCopy: string,
    image: Media, 
    name: string, 
    pageTitle: string, 
    pageIntro: string, 
    sectionTitle: string, 
}

export type Media = {
    url: string;
    umbracoWidth: string;
    umbracoHeight: string;
};

export type Post = {
    [x: string]: string | TrustedHTML;
    id: number
    slug: string
    name: string
    title: string
    summaryTitle: string
    authorName: string
    date: DateTime
    coverImage: Media
    tags: string[]
    readTime: Number
}