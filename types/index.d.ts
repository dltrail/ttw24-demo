export interface ContactType {
    bodyCopy: string,
    image: Media, 
    name: string, 
    pageTitle: string, 
    pageIntro: string, 
    sectionTitle: string, 
}

export interface Media {
    url: string;
    umbracoWidth: string;
    umbracoHeight: string;
};