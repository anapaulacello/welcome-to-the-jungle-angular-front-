import { HabitatsModel } from "./habitats.model";

export interface FamilyModel{
    _id?:string;
    id: number;
    nombre: string;
    livingInGroup:boolean;
    habitat:HabitatsModel;
}