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

export type Author ={
    name: string | undefined
    url: string | URL | undefined
    picture: Media
}

export type Post ={
    id: number
    slug: string
    name: string
    title: string
    author: Author
    date: DateTime
    coverImage: Media
}