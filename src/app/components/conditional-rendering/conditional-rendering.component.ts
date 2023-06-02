import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering',
  templateUrl: './conditional-rendering.component.html',
  styleUrls: ['./conditional-rendering.component.css']
})
export class ConditionalRenderingComponent {
  canShow = true
  name = 'Hemerson'
}
