import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent {
  number = 0

  onChangeNumber = () => this.number = Math.floor(Math.random() * 10)
  onIncreaseNumber = () => this.number++
}
