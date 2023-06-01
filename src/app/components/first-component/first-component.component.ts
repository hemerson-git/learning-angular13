import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name = "Hemerson";
  age = 25
  job = 'Developer'
  hobbies = ['Play Chess', 'Read', 'Play Guitar']
  pet = {
    name: 'Black',
    age: 5,
  }

  constructor() {}

  ngOnInit(): void {

  }
}
