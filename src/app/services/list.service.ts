import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  private apiUrl = 'http://localhost:3333/pets'
  filteredList: Animal[] = []

  constructor(private http: HttpClient) {}

  remove (animal: Animal, animalList: Animal[]) {
    const filteredArr = animalList.filter(pet => pet.name !== animal.name)
    return animalList = [...filteredArr]
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }
}
