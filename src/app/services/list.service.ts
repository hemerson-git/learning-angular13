import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  filteredList: Animal[] = []

  remove (animal: Animal, animalList: Animal[]) {
    const filteredArr = animalList.filter(pet => pet.name !== animal.name)
    return animalList = [...filteredArr]
  }

  constructor() { }
}
