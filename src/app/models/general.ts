export interface General {
    nav:Nav;
    animal:Animals[];
    habitat:Habitats[];
}
export interface Nav{
    title:string;
}

export interface Animals{
    id:string;
    name:string;
    isCarnivore:boolean;
    family:string;
}
export interface Habitats{
    id:string;
    name:string;
    location:string;
    mode: string;
}