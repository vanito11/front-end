import {Entreprise} from "./model.Entreprise";

export class Tuteur{
  id:number;
  nom:string="";
  prenom:string="";
  dateNaissance:Date;
  telephone:string="";
  email:string="";
  entreprise:Entreprise;
}
