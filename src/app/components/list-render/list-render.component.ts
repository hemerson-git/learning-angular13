import { Component } from '@angular/core';
import { Animal } from '../../Animal'

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  products = ['laptop', 'chess', 'microphone', 'rubik cube']
  pets: Animal[] = []

  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals()
  }

  showAge = (animal: Animal) => {
    this.animalDetails = `The pet ${animal.name} has ${animal.age} yo`
  }

  removeAnimal(animal: Animal) {
    this.pets = this.listService.remove(animal, this.pets)
  }

  getAnimals = () => {
    this.listService.getAll().subscribe((animals) => this.pets = animals)
  }
}
