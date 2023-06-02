import { Component } from '@angular/core';
import { Animal } from '../../Animal'

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  products = ['laptop', 'chess', 'microphone', 'rubik cube']
  pets: Animal[] = [
    { name: 'Black', type: 'dog', age: 4 },
    { name: 'Crystal', type: 'dog', age: 3 },
    { name: 'Kitty', type: 'cat', age: 2 }
  ]

  animalDetails = ''

  showAge = (animal: Animal) => {
    this.animalDetails = `The pet ${animal.name} has ${animal.age} yo`
  }
}
