import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="row">
    <div class="animalCard col-md-3" *ngFor="let currentAnimal of childAnimalList">
      <img class="img-responsive" src={{currentAnimal.image}} alt="animalImg">
      <h4>Name: {{currentAnimal.name}}</h4>
      <hr>
      <p><strong>Species:</strong> {{currentAnimal.species}}</p>
      <p><strong>Current Age:</strong> {{currentAnimal.age}}</p>
      <p><strong>Diet:</strong> {{currentAnimal.diet}}</p>
      <p><strong>Located:</strong> {{currentAnimal.location}}</p>
      <p><strong>Caretakers Needed:</strong> {{currentAnimal.caretaker}}</p>
      <p><strong>Animals Sex:</strong> {{currentAnimal.sex}}</p>
      <p><strong>Likes:</strong> {{currentAnimal.like}}</p>
      <p><strong>Dislikes:</strong> {{currentAnimal.dislike}}</p>
      <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModalTwo" (click)="editButtonHasbeenClicked(currentAnimal)">Edit</button>
    </div>
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasbeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit)
  }
}
