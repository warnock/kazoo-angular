import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
    <div>
      <label>Edit Name:</label>
      <input class="form-control" [(ngModel)]="childSelectedAnimal.name">
    </div>
    <div>
      <label>Edit Age:</label>
      <input class="form-control" type="number" [(ngModel)]="childSelectedAnimal.age">
    </div>
    <div>
      <label>Edit Caretakers:</label>
      <input class="form-control" type="number" [(ngModel)]="childSelectedAnimal.caretaker">
    </div>
    <div class="modal-footer">
      <button data-toggle="modal" data-target="#myModalTwo" class="btn btn-default" (click)="doneButtonClicked()">Done</button>
    </div>
   </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
     this.doneButtonClickedSender.emit();
   }
}
