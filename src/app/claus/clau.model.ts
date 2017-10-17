import { Membre } from '../membres/membre.model';

export class Clau{
  sid: string;
  nom: string;
  descripcio: string;
  propietari: Membre

  constructor (sid: string, nom: string, descripcio: string, propietari: Membre){
    this.sid = sid;
    this.nom = nom;
    this.descripcio = descripcio;
    this.propietari = propietari;
  }
}
