import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div>
    <label>Enter Animals Species:</label>
    <input class="form-control" #animalSpecies>
  </div>
  <div>
    <label>Enter Animals Name:</label>
    <input class="form-control" #animalName>
  </div>
  <div>
    <label>Enter Animals Age:</label>
    <input type="number" class="form-control" #animalAge>
  </div>
  <div>
    <label>Enter Animals Diet:</label>
    <input class="form-control" #animalDiet>
  </div>
  <div>
    <label>Enter Animals Location within the Park:</label>
      <input class="form-control" #animalLocation>
  </div>
  <div>
    <label>How many caretakers the animal needs:</label>
    <input type="number" class="form-control" #animalCaretaker>
  </div>
  <div>
  <label>Sex of Animal</label>
  <select class="form-control" #sexOfAnimal>
     <option [value]="male"> male </option>
     <option [value]="female"> female </option>
  </select>
  </div>
  <div>
    <label>The Animal Likes:</label>
    <input class="form-control" #animalLike>
  </div>
  <div>
    <label>The Animal dislikes:</label>
    <input class="form-control" #animalDislike>
  </div>
   <div class="modal-footer">
  <button class="btn btn-default" data-dismiss="modal" (click)="submitForm(animalSpecies.value, animalName.value, animalAge.value, animalDiet.value, animalLocation.value, animalCaretaker.value, sexOfAnimal.value, animalLike.value, animalDislike.value); animalSpecies.value=''; animalName.value=''; animalAge.value=''; animalDiet.value=''; animalLocation.value=''; animalCaretaker.value=''; sexOfAnimal.value=''; animalLike.value=''; animalDislike.value='';">Add</button>
   </div>
  `

})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretaker: number, sex: string, like: string, dislike: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretaker, sex, like, dislike);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
