import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList"> Name: {{currentAnimal.name}}, Age: {{currentAnimal.age}}, Caretaker(s) {{currentAnimal.caretaker}}  <button class="btn btn-default" (click)="editButtonHasbeenClicked(currentAnimal)">Edit Animal</button>
    </li>
  </ul>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasbeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit)
  }
}
