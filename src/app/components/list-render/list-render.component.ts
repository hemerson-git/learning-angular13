import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  products = ['laptop', 'chess', 'microphone', 'rubik cube']
  pets = [
    { name: 'Black', type: 'dog' },
    { name: 'Crystal', type: 'dog' },
    { name: 'Kitty', type: 'cat' }
  ]
}
