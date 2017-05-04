import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Zoo Tracker</h1>
      <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" ></animal-list>



      <div class="container">
       <!-- Trigger the modal with a button -->
       <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Add Animal</button>
       <!-- Modal -->
       <div class="modal fade" id="myModal" role="dialog">
         <div class="modal-dialog">
           <!-- Modal content-->
           <div class="modal-content">
             <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">&times;</button>
               <h4 class="modal-title">New Animal</h4>
             </div>
             <div class="modal-body">
               <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
             </div>
           </div>
         </div>
       </div>
     </div>

     <div class="container">
     <!-- Modal 2 -->
     <div class="modal fade" id="myModalTwo" role="dialog">
       <div class="modal-dialog">
         <!-- Modal content-->
         <div class="modal-content">
           <div class="modal-header">
             <button type="button" class="close" data-dismiss="modal">&times;</button>
             <h4 class="modal-title">Edit Animal</h4>
           </div>
           <div class="modal-body">
               <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
           </div>
         </div>
       </div>
     </div>
     </div>

  </div>
  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Sloth', 'Bob', 3, 'plants', 'south America', 1, 'male', 'chilling', 'rap music' ),
    new Animal('Sloth', 'Ray', 3, 'plants', 'south America', 1, 'male', 'chilling', 'rap music' )
  ]
  selectedAnimal = null;

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  editAnimal(selectedAnimalFromList) {
    this.selectedAnimal = selectedAnimalFromList;
  }

  finishedEditing() {
   this.selectedAnimal = null;
 }
}
