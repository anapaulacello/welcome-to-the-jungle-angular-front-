import { FamilyModel } from "./family.models";

export interface AnimalsModel{
    id: number;
    name: string;
    isCarnivore: boolean;
    family: FamilyModel;
}