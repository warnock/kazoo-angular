import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="selectMenu">
    <select (change)="onChange($event.target.value)">
      <option value="all">All Animals</option>
      <option value="young">Animals less than 2 years of age</option>
      <option value="mature">Animals more than 2 years of age</option>
    </select>
  </div>
  <div class="row">
    <div class="col-md-4" *ngFor="let currentAnimal of childAnimalList | animalAge:filteredByAnimalAge">
      <div class="animalCard">
      <img class="img-responsive" src={{currentAnimal.image}} alt="animal image">
      <h4>Name: {{currentAnimal.name}}</h4>
      <hr>
      <p><span class="bio">Species:</span> {{currentAnimal.species}}</p>
      <p><span class="bio">Current Age:</span> {{currentAnimal.age}}</p>
      <p><span class="bio">Diet:</span> {{currentAnimal.diet}}</p>
      <p><span class="bio">Located:</span> {{currentAnimal.location}}</p>
      <p><span class="bio">Caretakers Needed:</span> {{currentAnimal.caretaker}}</p>
      <p><span class="bio">Animals Sex:</span> {{currentAnimal.sex}}</p>
      <p><span class="bio">Likes:</span> {{currentAnimal.like}}</p>
      <p><span class="bio">Dislikes:</span> {{currentAnimal.dislike}}</p>
      <button type="button" class="btn btn-default btn-lg" data-toggle="modal" data-target="#myModalTwo" (click)="editButtonHasbeenClicked(currentAnimal)">Edit</button>
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
