export class Membre{
  public nom: string;
  public cognoms: string;
  public email: string;
  public telefon: string;

  constructor(nom: string, cognoms: string, email: string, telefon: string){
    this.nom = nom;
    this.cognoms = cognoms;
    this.email = email;
    this.telefon = telefon;
  }
  
}
