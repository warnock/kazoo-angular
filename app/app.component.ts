import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
      <h1>Zoo Tracker</h1>
      <animal-list [childAnimalList]="masterAnimalList"></animal-list>
  </div>
  `
})

export class AppComponent {

  masterAnimalList: Animal[] = [
    new Animal('Sloth', 'Bob', 3, 'plants', 'south America', 1, 'male', 'chilling', 'rap music' ),
    new Animal('Sloth', 'Ray', 3, 'plants', 'south America', 1, 'male', 'chilling', 'rap music' )
  ]

}
