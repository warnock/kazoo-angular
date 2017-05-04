import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
<hr>
  <div class="selectMenu">
    <select (change)="onChange($event.target.value)">
      <option value="all">All Animals</option>
      <option value="young">Animals less than 2 years of age</option>
      <option value="mature">Animals more than 2 years of age</option>
    </select>
  </div>
<hr>
  <div class="row">
    <div class="col-md-3" *ngFor="let currentAnimal of childAnimalList | animalAge:filteredByAnimalAge">
      <div class="animalCard">
      <img class="img-responsive" src={{currentAnimal.image}} alt="animal image">
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
  </div>

  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasbeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit)
  }

  filteredByAnimalAge: string = "animalAge";

  onChange(optionFromMenu) {
   this.filteredByAnimalAge = optionFromMenu;
  }
}
