export interface General {
    nav:Nav;
    gallery:Gallery[];
    about:About;
}
export interface Nav{
    title:string;
    img:Img;
}

export interface Gallery{
    title:string;
    img:Img;
}

export interface About{}

export interface Img{
    src:string;
    alt:string;
}