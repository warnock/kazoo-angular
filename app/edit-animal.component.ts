import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
    <h3>Edit Animal</h3>
    <div>
      <label>Edit Name:</label>
      <input  [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div>
      <label>Edit Age:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div>
      <label>Edit Caretakers:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.caretaker">
    </div>
    <button (click)="doneButtonClicked()">Done</button>
   <div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
     this.doneButtonClickedSender.emit();
   }
}
