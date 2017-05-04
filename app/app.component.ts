import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>kaZoo</h1>
  </div>

  <!-- Trigger the first modal with a button -->
  <div class="new-animal">
    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Add Animal</button>
  </div>

  <div class="container">

    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" ></animal-list>

    <div class="container">
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
    new Animal('Sloth', 'Bob', 2, 'plants', 'south America', 1, 'male', 'chilling', 'rap music', "https://pbs.twimg.com/profile_images/378800000612004541/173003f219ac28007433aab098136fa2.jpeg" ),
    new Animal('Galapagos Tortoise ', 'Frank', 50, 'plants', 'south America', 2, 'male', 'glaring with his old man stair', 'people calling him a turtle', "http://www.wildlifeworldwide.com/images/discover/latin-america_galapagos_giant-tortoise_square-300.jpg" ),
    new Animal('Giraffe', 'Kazoo', 5, 'plants', 'Africa', 5, 'Female', 'neck rubs', 'the color blue', "https://s-media-cache-ak0.pinimg.com/736x/7c/0b/11/7c0b11a85f656b08f950c0fff3038067.jpg" )
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
