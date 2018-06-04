import {Filiere} from "./model.Filiere";

export class Stagiaires{
  id:number;
  nom:string="";
  prenom:string="";
  adresse:string="";
  dateNaissance:Date;
  email:string="";
  password:string="";
  nationnalite:string="";
  niveau:number=0;
  telephone:string="";
  cv:string="";
  photo:string="";
  filiere:Filiere;

}
