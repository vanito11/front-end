import {Filiere} from "./model.Filiere";

export class Stagiaires{
  id:number=0;
  nom:string="";
  prenom:string="";
  adresse:string="";
  dateNaissance:Date= new Date();
  email:string="";
  password:string="";
  nationnalite:string="";
  niveau:number=0;
  telephone:string="";
  cv:string="";
  photo:string="";
  filiere:Filiere = new Filiere();


}
