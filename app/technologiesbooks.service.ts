import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesbooksService {

  constructor() { }

  public getTechBook(){
    return [
      {"technology": "Angular", "book": "Angular Framework Essentials"},
      {"technology": "Node JS", "book": "Bigining Node.js, Express & MongoDB Development"},
      {"technology": "Android", "book": "Android Development with android studio"},
      {"technology": "Big Data", "book": "Big Data @ work"},
      {"technology": "Artificial Intelligence", "book": "Artificial Intelligence Basics"},
    ];

  }
}
