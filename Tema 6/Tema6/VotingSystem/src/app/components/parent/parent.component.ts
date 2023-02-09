import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  agreed = 0;
  disagreed =0;
  voters = ["John", "Maria", "Kris", "Sheila", "Anthony"];

  clickToVote(agreed:boolean) {
   agreed ? this.agreed++: this.disagreed++;
   }
}
